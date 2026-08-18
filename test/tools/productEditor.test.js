const http = require('http');
const fs = require('fs');
const path = require('path');
const server = require('../../tools/product-editor/server');

describe('Product Editor Server & API', () => {
  let testServer;
  let testPort;
  let baseUrl;
  const DATA_FILE = path.join(__dirname, '../../public/data/prodcuts.json');
  const BACKUPS_DIR = path.join(__dirname, '../../tools/product-editor/backups');
  let originalData;

  beforeAll(() => {
    return new Promise((resolve) => {
      // Preserve original prodcuts.json
      if (fs.existsSync(DATA_FILE)) {
        originalData = fs.readFileSync(DATA_FILE, 'utf8');
      }

      testServer = server.listen(0, () => {
        testPort = testServer.address().port;
        baseUrl = `http://localhost:${testPort}`;
        resolve();
      });
    });
  });

  afterAll(() => {
    return new Promise((resolve) => {
      // Restore original prodcuts.json
      if (originalData) {
        fs.writeFileSync(DATA_FILE, originalData, 'utf8');
      }
      testServer.close(resolve);
    });
  });

  function makeRequest(pathname, options = {}) {
    return new Promise((resolve, reject) => {
      const url = `${baseUrl}${pathname}`;
      const req = http.request(url, options, (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          let parsed;
          try {
            parsed = JSON.parse(body);
          } catch {
            parsed = body;
          }
          resolve({ status: res.statusCode, headers: res.headers, body: parsed });
        });
      });
      req.on('error', reject);
      if (options.body) {
        req.write(typeof options.body === 'string' ? options.body : JSON.stringify(options.body));
      }
      req.end();
    });
  }

  describe('Static File Serving', () => {
    test('serves index.html at root /', async () => {
      const res = await makeRequest('/');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toContain('text/html');
      expect(typeof res.body).toBe('string');
      expect(res.body).toContain('Nanfuen Product Editor');
    });

    test('serves styles.css', async () => {
      const res = await makeRequest('/styles.css');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toContain('text/css');
    });

    test('serves app.js', async () => {
      const res = await makeRequest('/app.js');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toContain('application/javascript');
    });

    test('serves catalog images from /images/catalog/<code>.jpg', async () => {
      const res = await makeRequest('/images/catalog/PA002.jpg');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('image/jpeg');
    });

    test('serves catalog images when prefixed with /public/images/catalog/PA002.jpg', async () => {
      const res = await makeRequest('/public/images/catalog/PA002.jpg');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('image/jpeg');
    });

    test('serves catalog images case-insensitively (/images/catalog/pa002.jpg)', async () => {
      const res = await makeRequest('/images/catalog/pa002.jpg');
      expect(res.status).toBe(200);
      expect(res.headers['content-type']).toBe('image/jpeg');
    });

    test('returns 404 for non-existent image', async () => {
      const res = await makeRequest('/images/catalog/NONEXISTENT_IMG_123.jpg');
      expect(res.status).toBe(404);
    });
  });

  describe('GET /api/products', () => {
    test('returns product list with 200 OK', async () => {
      const res = await makeRequest('/api/products');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.products)).toBe(true);
      expect(res.body.count).toBe(res.body.products.length);
      expect(res.body.products.length).toBeGreaterThan(0);
    });
  });

  describe('POST /api/products Validation', () => {
    test('rejects non-array payload with 400 Bad Request', async () => {
      const res = await makeRequest('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { products: 'not-an-array' }
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain('must be an array');
    });

    test('rejects product without a name', async () => {
      const res = await makeRequest('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: [{ type: 'Pot', code: 'TEST1' }]
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain("missing a valid 'name'");
    });

    test('rejects product with invalid type', async () => {
      const res = await makeRequest('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: [{ name: 'Test Product', type: 'InvalidType' }]
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain('invalid type');
    });

    test('rejects product with invalid discountPercentage (> 100 or < 0)', async () => {
      const res = await makeRequest('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: [{ name: 'Test Product', type: 'Pot', discountPercentage: 150 }]
      });
      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain('invalid discountPercentage');
    });
  });

  describe('POST /api/products & Backups', () => {
    test('successfully saves valid products and creates a backup snapshot', async () => {
      const testProducts = [
        {
          type: 'Pot',
          code: 'TEST01',
          name: 'Test Bonsai Pot',
          available: 'YES',
          priceUSD: 50,
          discountPercentage: 20,
          discountStartDate: '2026-06-01T00:00:00.000Z',
          discountEndDate: '2026-12-31T23:59:59.000Z'
        },
        {
          type: 'Tools',
          code: 'TEST02',
          name: 'Test Bonsai Shears',
          available: 'NO',
          priceUSD: 35
        }
      ];

      const res = await makeRequest('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { products: testProducts }
      });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.count).toBe(2);
      expect(res.body.backup).toBeTruthy();
      expect(res.body.backup.filename).toContain('prodcuts_save_');

      // Verify file on disk was updated
      const updatedOnDisk = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
      expect(updatedOnDisk).toHaveLength(2);
      expect(updatedOnDisk[0].code).toBe('TEST01');
      expect(updatedOnDisk[0].discountPercentage).toBe(20);

      // Verify backup file exists on disk
      const backupPath = path.join(BACKUPS_DIR, res.body.backup.filename);
      expect(fs.existsSync(backupPath)).toBe(true);
    });

    test('GET /api/backups lists saved backups', async () => {
      const res = await makeRequest('/api/backups');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.backups)).toBe(true);
      expect(res.body.backups.length).toBeGreaterThan(0);
    });

    test('POST /api/restore restores data from backup file', async () => {
      const backupsRes = await makeRequest('/api/backups');
      const latestBackup = backupsRes.body.backups[0];

      const res = await makeRequest('/api/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: { filename: latestBackup.filename }
      });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.products)).toBe(true);
    });
  });
});
