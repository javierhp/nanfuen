const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3001;
const ROOT_DIR = path.resolve(__dirname, '../..');
const ROOT_PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DATA_FILE = path.join(ROOT_PUBLIC_DIR, 'data', 'prodcuts.json');
const BACKUPS_DIR = path.join(__dirname, 'backups');
const EDITOR_PUBLIC_DIR = path.join(__dirname, 'public');

// Ensure backups directory exists
if (!fs.existsSync(BACKUPS_DIR)) {
  fs.mkdirSync(BACKUPS_DIR, { recursive: true });
}

// MIME types for static file serving
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

// Helper: send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(data, null, 2));
}

// Helper: read request body
function parseRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      // Safeguard against very large payloads (10MB limit)
      if (body.length > 1e7) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        if (!body.trim()) {
          resolve({});
        } else {
          resolve(JSON.parse(body));
        }
      } catch (err) {
        reject(new Error('Invalid JSON: ' + err.message));
      }
    });
    req.on('error', reject);
  });
}

// Helper: validate products array
function validateProducts(products) {
  if (!Array.isArray(products)) {
    return { valid: false, error: 'Payload must be an array of products' };
  }

  const validTypes = ['Pot', 'Tools', 'tree', 'tools'];

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (!p || typeof p !== 'object') {
      return { valid: false, error: `Product at index ${i} is not a valid object` };
    }
    if (!p.name || typeof p.name !== 'string' || !p.name.trim()) {
      return { valid: false, error: `Product at index ${i} is missing a valid 'name'` };
    }
    if (!p.type || !validTypes.includes(p.type)) {
      return { valid: false, error: `Product at index ${i} ('${p.name}') has invalid type '${p.type}'. Must be Pot, Tools, or tree` };
    }
    if (p.discountPercentage !== undefined && p.discountPercentage !== null && p.discountPercentage !== '') {
      const discount = Number(p.discountPercentage);
      if (isNaN(discount) || discount < 0 || discount > 100) {
        return { valid: false, error: `Product at index ${i} ('${p.name}') has invalid discountPercentage '${p.discountPercentage}'. Must be between 0 and 100` };
      }
    }
  }

  return { valid: true };
}

// Helper: create a backup file
function createBackup(customTag = 'auto') {
  if (!fs.existsSync(DATA_FILE)) return null;

  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupFileName = `prodcuts_${customTag}_${timestamp}.json`;
  const backupFilePath = path.join(BACKUPS_DIR, backupFileName);

  const currentContent = fs.readFileSync(DATA_FILE, 'utf8');
  fs.writeFileSync(backupFilePath, currentContent, 'utf8');

  return {
    filename: backupFileName,
    path: backupFilePath,
    timestamp: new Date().toISOString()
  };
}

// Helper: stream a static file to the client
function sendFile(res, fullFilePath) {
  fs.stat(fullFilePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
      });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(fullFilePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': ext.match(/\.(jpg|jpeg|png|gif|svg|ico|webp)$/i) ? 'public, max-age=3600' : 'no-cache'
    });

    const stream = fs.createReadStream(fullFilePath);
    stream.pipe(res);
  });
}

// Helper: find file with case-insensitive fallback if exact path doesn't match
function resolveCaseInsensitiveFile(baseDir, relativePath) {
  const normalizedRel = path.normalize(relativePath).replace(/^(\.\.[\/\\])+/, '');
  const directPath = path.join(baseDir, normalizedRel);

  // Security check: ensure path stays within baseDir
  if (!directPath.startsWith(path.normalize(baseDir))) {
    return null;
  }

  if (fs.existsSync(directPath)) {
    return directPath;
  }

  // Case-insensitive lookup in the directory
  try {
    const parentDir = path.dirname(directPath);
    const targetBaseName = path.basename(directPath).toLowerCase();
    if (fs.existsSync(parentDir)) {
      const files = fs.readdirSync(parentDir);
      const match = files.find(f => f.toLowerCase() === targetBaseName);
      if (match) {
        return path.join(parentDir, match);
      }
    }
  } catch {
    // ignore filesystem search errors
  }

  return null;
}

// Request router
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = decodeURIComponent(parsedUrl.pathname);
  const method = req.method.toUpperCase();

  // CORS preflight
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    });
    res.end();
    return;
  }

  // --- API Endpoints ---

  // GET /api/products
  if (pathname === '/api/products' && method === 'GET') {
    try {
      if (!fs.existsSync(DATA_FILE)) {
        return sendJson(res, 404, { success: false, error: 'Data file prodcuts.json not found at ' + DATA_FILE });
      }

      const fileStats = fs.statSync(DATA_FILE);
      const rawData = fs.readFileSync(DATA_FILE, 'utf8');
      const products = JSON.parse(rawData);

      return sendJson(res, 200, {
        success: true,
        count: products.length,
        lastModified: fileStats.mtime,
        products
      });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: 'Failed to read products: ' + err.message });
    }
  }

  // POST /api/products (Save products)
  if (pathname === '/api/products' && method === 'POST') {
    try {
      const body = await parseRequestBody(req);
      const products = body.products || body;

      const validation = validateProducts(products);
      if (!validation.valid) {
        return sendJson(res, 400, { success: false, error: validation.error });
      }

      // 1. Create automatic backup before overwrite
      const backup = createBackup('save');

      // 2. Format and write JSON
      const formattedJson = JSON.stringify(products, null, 4) + '\n';
      fs.writeFileSync(DATA_FILE, formattedJson, 'utf8');

      return sendJson(res, 200, {
        success: true,
        message: `Successfully saved ${products.length} products to prodcuts.json`,
        count: products.length,
        backup
      });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: 'Failed to save products: ' + err.message });
    }
  }

  // GET /api/backups
  if (pathname === '/api/backups' && method === 'GET') {
    try {
      const files = fs.readdirSync(BACKUPS_DIR);
      const backups = files
        .filter(f => f.endsWith('.json'))
        .map(file => {
          const filePath = path.join(BACKUPS_DIR, file);
          const stats = fs.statSync(filePath);
          return {
            filename: file,
            sizeBytes: stats.size,
            createdAt: stats.birthtime || stats.mtime
          };
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      return sendJson(res, 200, { success: true, backups });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: 'Failed to list backups: ' + err.message });
    }
  }

  // POST /api/restore
  if (pathname === '/api/restore' && method === 'POST') {
    try {
      const body = await parseRequestBody(req);
      const filename = body.filename;

      if (!filename || typeof filename !== 'string') {
        return sendJson(res, 400, { success: false, error: 'Missing backup filename' });
      }

      const backupPath = path.join(BACKUPS_DIR, path.basename(filename));
      if (!fs.existsSync(backupPath)) {
        return sendJson(res, 404, { success: false, error: 'Backup file not found' });
      }

      // Backup current state before restoring
      createBackup('pre-restore');

      // Restore content
      const content = fs.readFileSync(backupPath, 'utf8');
      const parsed = JSON.parse(content);

      fs.writeFileSync(DATA_FILE, JSON.stringify(parsed, null, 4) + '\n', 'utf8');

      return sendJson(res, 200, {
        success: true,
        message: `Restored products from backup ${filename}`,
        count: parsed.length,
        products: parsed
      });
    } catch (err) {
      return sendJson(res, 500, { success: false, error: 'Failed to restore backup: ' + err.message });
    }
  }

  // --- Static Asset Serving ---

  // 1. Root / or default HTML file
  if (pathname === '/' || pathname === '') {
    const indexPath = path.join(EDITOR_PUBLIC_DIR, 'index.html');
    return sendFile(res, indexPath);
  }

  // 2. Images: /images/* or /public/images/* (Convention-based catalog images: public/images/catalog/<code>.jpg)
  if (pathname.startsWith('/images/') || pathname.startsWith('/public/images/')) {
    const cleanPath = pathname.replace(/^\/public/, '');
    const resolvedImage = resolveCaseInsensitiveFile(ROOT_PUBLIC_DIR, cleanPath);
    if (resolvedImage) {
      return sendFile(res, resolvedImage);
    }
    // Try fallback inside public/images/ directly
    const fallbackImage = resolveCaseInsensitiveFile(path.join(ROOT_PUBLIC_DIR, 'images'), cleanPath.replace(/^\/images\//, ''));
    if (fallbackImage) {
      return sendFile(res, fallbackImage);
    }
  }

  // 3. Static files from tools/product-editor/public/ (styles.css, app.js, etc.)
  const editorFilePath = resolveCaseInsensitiveFile(EDITOR_PUBLIC_DIR, pathname);
  if (editorFilePath) {
    return sendFile(res, editorFilePath);
  }

  // 4. Any other public asset from the Next.js /public directory (favicon.ico, etc.)
  const rootPublicFilePath = resolveCaseInsensitiveFile(ROOT_PUBLIC_DIR, pathname.replace(/^\/public\//, '/'));
  if (rootPublicFilePath) {
    return sendFile(res, rootPublicFilePath);
  }

  // 404 Not Found
  res.writeHead(404, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  });
  res.end('404 Not Found: ' + pathname);
});

// Export server instance for testing
module.exports = server;

// Start server if run directly
if (require.main === module) {
  server.listen(PORT, () => {
    console.log('====================================================');
    console.log(`🌿 Nanfuen Product Editor running at:`);
    console.log(`👉 http://localhost:${PORT}`);
    console.log(`📁 Editing: ${DATA_FILE}`);
    console.log(`🖼️  Catalog Images: ${path.join(ROOT_PUBLIC_DIR, 'images', 'catalog')}`);
    console.log('====================================================');
  });
}
