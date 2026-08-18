/**
 * Nanfuen Product Editor - Client-side Application
 */

(function () {
  'use strict';

  // --- State ---
  let products = [];
  let originalProductsJson = '[]';
  let isDirty = false;
  let editingIndex = null;
  let currentConfirmAction = null;

  // Filter state
  let searchQuery = '';
  let filterCategory = 'all';
  let filterAvailability = 'all';
  let filterDiscount = 'all';
  let sortBy = 'default';

  // --- DOM Elements ---
  const el = {
    // Topbar
    btnSaveAll: document.getElementById('btnSaveAll'),
    btnNewProduct: document.getElementById('btnNewProduct'),
    btnBackups: document.getElementById('btnBackups'),
    btnImportExport: document.getElementById('btnImportExport'),
    connectionStatus: document.getElementById('connectionStatus'),

    // Banner
    unsavedBanner: document.getElementById('unsavedBanner'),
    unsavedCount: document.getElementById('unsavedCount'),
    btnDiscardChanges: document.getElementById('btnDiscardChanges'),
    btnBannerSave: document.getElementById('btnBannerSave'),

    // Stats
    statTotal: document.getElementById('statTotal'),
    statAvailable: document.getElementById('statAvailable'),
    statSold: document.getElementById('statSold'),
    statDiscounted: document.getElementById('statDiscounted'),
    statCards: document.querySelectorAll('.stat-card'),

    // Toolbar
    searchInput: document.getElementById('searchInput'),
    btnClearSearch: document.getElementById('btnClearSearch'),
    filterType: document.getElementById('filterType'),
    filterAvailability: document.getElementById('filterAvailability'),
    filterDiscount: document.getElementById('filterDiscount'),
    sortBy: document.getElementById('sortBy'),
    btnResetFilters: document.getElementById('btnResetFilters'),

    // Table
    productsTable: document.getElementById('productsTable'),
    productsTableBody: document.getElementById('productsTableBody'),
    showingCount: document.getElementById('showingCount'),
    emptyState: document.getElementById('emptyState'),
    btnEmptyReset: document.getElementById('btnEmptyReset'),

    // Product Modal
    productModal: document.getElementById('productModal'),
    productForm: document.getElementById('productForm'),
    modalTitle: document.getElementById('modalTitle'),
    modalSubtitle: document.getElementById('modalSubtitle'),
    btnModalClose: document.getElementById('btnModalClose'),
    btnCancelModal: document.getElementById('btnCancelModal'),
    btnClearDiscountBtn: document.getElementById('btnClearDiscountBtn'),

    // Modal Form Fields
    fieldCode: document.getElementById('fieldCode'),
    fieldType: document.getElementById('fieldType'),
    fieldName: document.getElementById('fieldName'),
    fieldAvailable: document.getElementById('fieldAvailable'),
    fieldPriceUSD: document.getElementById('fieldPriceUSD'),
    fieldPriceARS: document.getElementById('fieldPriceARS'),
    fieldHasImage: document.getElementById('fieldHasImage'),

    // Category sections
    categoryAttributesSection: document.getElementById('categoryAttributesSection'),
    categorySectionTitle: document.getElementById('categorySectionTitle'),
    potFields: document.getElementById('potFields'),
    treeFields: document.getElementById('treeFields'),
    toolsFields: document.getElementById('toolsFields'),

    // Pot fields
    fieldPotShape: document.getElementById('fieldPotShape'),
    fieldPotSize: document.getElementById('fieldPotSize'),
    fieldPotColor: document.getElementById('fieldPotColor'),
    fieldPotAuthor: document.getElementById('fieldPotAuthor'),
    fieldPrecioYenes: document.getElementById('fieldPrecioYenes'),

    // Tree fields
    fieldTreeSpecies: document.getElementById('fieldTreeSpecies'),
    fieldTreeWidth: document.getElementById('fieldTreeWidth'),
    fieldTreeHeight: document.getElementById('fieldTreeHeight'),
    fieldTreeNebari: document.getElementById('fieldTreeNebari'),
    fieldTreeImg: document.getElementById('fieldTreeImg'),

    // Discount fields
    fieldDiscountPercentage: document.getElementById('fieldDiscountPercentage'),
    fieldDiscountStartDate: document.getElementById('fieldDiscountStartDate'),
    fieldDiscountEndDate: document.getElementById('fieldDiscountEndDate'),

    // Live discount preview
    previewStatusBadge: document.getElementById('previewStatusBadge'),
    mockupDiscountBadge: document.getElementById('mockupDiscountBadge'),
    mockupName: document.getElementById('mockupName'),
    mockupPricing: document.getElementById('mockupPricing'),
    mockupSavings: document.getElementById('mockupSavings'),

    // Backups Modal
    backupsModal: document.getElementById('backupsModal'),
    btnBackupsClose: document.getElementById('btnBackupsClose'),
    btnCloseBackupsModal: document.getElementById('btnCloseBackupsModal'),
    backupsTableBody: document.getElementById('backupsTableBody'),
    emptyBackups: document.getElementById('emptyBackups'),

    // Import / Export Modal
    importExportModal: document.getElementById('importExportModal'),
    btnImportExportClose: document.getElementById('btnImportExportClose'),
    btnCloseImportExportModal: document.getElementById('btnCloseImportExportModal'),
    btnDownloadJson: document.getElementById('btnDownloadJson'),
    btnTriggerFileInput: document.getElementById('btnTriggerFileInput'),
    fileInputJson: document.getElementById('fileInputJson'),

    // Image Preview Modal
    imagePreviewModal: document.getElementById('imagePreviewModal'),
    imagePreviewImg: document.getElementById('imagePreviewImg'),
    imagePreviewCaption: document.getElementById('imagePreviewCaption'),
    btnImagePreviewClose: document.getElementById('btnImagePreviewClose'),

    // Confirm Modal
    confirmModal: document.getElementById('confirmModal'),
    confirmTitle: document.getElementById('confirmTitle'),
    confirmMessage: document.getElementById('confirmMessage'),
    btnConfirmCancel: document.getElementById('btnConfirmCancel'),
    btnConfirmOk: document.getElementById('btnConfirmOk'),
    btnConfirmClose: document.getElementById('btnConfirmClose'),

    // Toast Container
    toastContainer: document.getElementById('toastContainer')
  };

  // --- Discount Calculation Helpers (Identical to utils/discount.js) ---

  function isDiscountActive(product, currentDate = new Date()) {
    if (!product) return false;
    const percentage = Number(product.discountPercentage);
    if (isNaN(percentage) || percentage <= 0 || percentage > 100) {
      return false;
    }

    const now = new Date(currentDate).getTime();
    if (isNaN(now)) return false;

    if (product.discountStartDate) {
      const start = new Date(product.discountStartDate).getTime();
      if (!isNaN(start) && now < start) {
        return false;
      }
    }

    if (product.discountEndDate) {
      const end = new Date(product.discountEndDate).getTime();
      if (!isNaN(end) && now > end) {
        return false;
      }
    }

    return true;
  }

  function getDiscountStatus(product, currentDate = new Date()) {
    if (!product) return 'none';
    const percentage = Number(product.discountPercentage);
    if (isNaN(percentage) || percentage <= 0 || percentage > 100) {
      return 'none';
    }

    const now = new Date(currentDate).getTime();
    if (isNaN(now)) return 'none';

    if (product.discountStartDate) {
      const start = new Date(product.discountStartDate).getTime();
      if (!isNaN(start) && now < start) {
        return 'scheduled';
      }
    }

    if (product.discountEndDate) {
      const end = new Date(product.discountEndDate).getTime();
      if (!isNaN(end) && now > end) {
        return 'expired';
      }
    }

    return 'active';
  }

  function getDiscountedPrice(product, currentDate = new Date()) {
    if (!isDiscountActive(product, currentDate)) return null;
    const basePrice = Number(product.priceUSD);
    if (isNaN(basePrice) || basePrice < 0) return null;
    const percentage = Number(product.discountPercentage);
    return Math.max(0, basePrice * (1 - percentage / 100));
  }

  function getEffectivePrice(product, currentDate = new Date()) {
    if (!product) return 0;
    const basePrice = Number(product.priceUSD) || 0;
    if (isDiscountActive(product, currentDate)) {
      const discounted = getDiscountedPrice(product, currentDate);
      if (discounted !== null) return discounted;
    }
    return basePrice;
  }

  // --- Formatters ---

  function formatUSD(val) {
    if (val === undefined || val === null || val === '') return '—';
    const num = Number(val);
    if (isNaN(num)) return val;
    return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function formatDateIso(dateStr) {
    if (!dateStr) return '';
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return dateStr;
    }
  }

  function toDateTimeLocalInput(isoString) {
    if (!isoString) return '';
    try {
      const date = new Date(isoString);
      if (isNaN(date.getTime())) return '';
      const pad = num => (num < 10 ? '0' : '') + num;
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    } catch {
      return '';
    }
  }

  // --- Toast Notifications ---

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    toast.innerHTML = `<span style="font-size:16px;">${icon}</span> <span>${message}</span>`;
    el.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.25s ease';
      setTimeout(() => toast.remove(), 250);
    }, 4000);
  }

  // --- Dirty State Management ---

  function updateDirtyState() {
    const currentJson = JSON.stringify(products);
    isDirty = currentJson !== originalProductsJson;

    if (isDirty) {
      el.btnSaveAll.disabled = false;
      el.unsavedBanner.style.display = 'flex';

      // Count modified/added
      let changesCount = 0;
      try {
        const orig = JSON.parse(originalProductsJson);
        changesCount = Math.abs(products.length - orig.length);
        if (changesCount === 0) changesCount = 'some';
      } catch {
        changesCount = 1;
      }
      el.unsavedCount.textContent = changesCount;
    } else {
      el.btnSaveAll.disabled = true;
      el.unsavedBanner.style.display = 'none';
    }
  }

  window.addEventListener('beforeunload', e => {
    if (isDirty) {
      e.preventDefault();
      e.returnValue = 'You have unsaved changes in prodcuts.json. Are you sure you want to leave?';
    }
  });

  // --- Fetch and Save API Calls ---

  async function fetchProducts() {
    try {
      const res = await fetch('/api/products');
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      const data = await res.json();
      if (!data.success) throw new Error(data.error || 'Failed to load products');

      products = data.products || [];
      originalProductsJson = JSON.stringify(products);
      updateDirtyState();
      renderAll();
      showToast(`Loaded ${products.length} products from prodcuts.json`, 'info');
    } catch (err) {
      console.error(err);
      showToast('Error loading products: ' + err.message, 'error');
    }
  }

  async function saveProductsToServer() {
    try {
      el.btnSaveAll.disabled = true;
      el.btnBannerSave.disabled = true;

      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products })
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to save products');
      }

      originalProductsJson = JSON.stringify(products);
      updateDirtyState();
      renderAll();
      showToast(`Saved ${products.length} products to prodcuts.json! Automatic backup created.`, 'success');
    } catch (err) {
      console.error(err);
      showToast('Error saving products: ' + err.message, 'error');
      updateDirtyState();
    } finally {
      el.btnBannerSave.disabled = false;
    }
  }

  // --- Rendering Functions ---

  function updateStats() {
    const total = products.length;
    let available = 0;
    let sold = 0;
    let discounted = 0;

    const now = new Date();
    products.forEach(p => {
      if (p.available === 'NO') {
        sold++;
      } else {
        available++;
      }
      if (isDiscountActive(p, now)) {
        discounted++;
      }
    });

    el.statTotal.textContent = total;
    el.statAvailable.textContent = available;
    el.statSold.textContent = sold;
    el.statDiscounted.textContent = discounted;
  }

  function getFilteredProducts() {
    const now = new Date();
    const query = searchQuery.trim().toLowerCase();

    return products
      .map((product, originalIndex) => ({ product, originalIndex }))
      .filter(({ product }) => {
        // Search query
        if (query) {
          const matchCode = (product.code || '').toLowerCase().includes(query);
          const matchName = (product.name || '').toLowerCase().includes(query);
          const matchAuthor = (product.author || '').toLowerCase().includes(query);
          const matchShape = (product.potShape || '').toLowerCase().includes(query);
          const matchTree = (product.tree || '').toLowerCase().includes(query);
          if (!matchCode && !matchName && !matchAuthor && !matchShape && !matchTree) {
            return false;
          }
        }

        // Category filter
        if (filterCategory !== 'all') {
          if (filterCategory === 'Tools') {
            if (product.type !== 'Tools' && product.type !== 'tools') return false;
          } else if (product.type !== filterCategory) {
            return false;
          }
        }

        // Availability filter
        if (filterAvailability !== 'all') {
          const isSold = product.available === 'NO';
          if (filterAvailability === 'YES' && isSold) return false;
          if (filterAvailability === 'NO' && !isSold) return false;
        }

        // Discount filter
        if (filterDiscount !== 'all') {
          const status = getDiscountStatus(product, now);
          if (filterDiscount === 'active' && status !== 'active') return false;
          if (filterDiscount === 'scheduled' && (status !== 'scheduled' && status !== 'expired')) return false;
          if (filterDiscount === 'none' && status !== 'none') return false;
        }

        return true;
      })
      .sort((a, b) => {
        const pA = a.product;
        const pB = b.product;

        switch (sortBy) {
          case 'code-asc':
            return (pA.code || '').localeCompare(pB.code || '');
          case 'code-desc':
            return (pB.code || '').localeCompare(pA.code || '');
          case 'name-asc':
            return (pA.name || '').localeCompare(pB.name || '');
          case 'price-asc':
            return getEffectivePrice(pA, now) - getEffectivePrice(pB, now);
          case 'price-desc':
            return getEffectivePrice(pB, now) - getEffectivePrice(pA, now);
          case 'discount-desc':
            return (Number(pB.discountPercentage) || 0) - (Number(pA.discountPercentage) || 0);
          default:
            return a.originalIndex - b.originalIndex;
        }
      });
  }

  function renderTable() {
    const filtered = getFilteredProducts();
    const now = new Date();

    el.showingCount.textContent = `Showing ${filtered.length} of ${products.length} products`;

    if (filtered.length === 0) {
      el.productsTableBody.innerHTML = '';
      el.emptyState.style.display = 'block';
      return;
    }

    el.emptyState.style.display = 'none';

    const rowsHtml = filtered.map(({ product, originalIndex }) => {
      const isSold = product.available === 'NO';
      const hasActiveDiscount = isDiscountActive(product, now);
      const discountStatus = getDiscountStatus(product, now);
      const discountedPrice = getDiscountedPrice(product, now);
      const effectivePrice = getEffectivePrice(product, now);

      // Category badge class
      const typeLower = (product.type || '').toLowerCase();
      const badgeTypeClass = typeLower === 'pot' ? 'badge-pot' : typeLower === 'tree' ? 'badge-tree' : 'badge-tools';

      // Catalog image path
      const imageSrc = `/images/catalog/${product.code}.jpg`;

      // Promotion HTML
      let promoHtml = '<span style="color:var(--text-light);font-size:12px;">—</span>';
      if (discountStatus === 'active') {
        const datesText = product.discountEndDate ? `until ${formatDateIso(product.discountEndDate)}` : 'Active';
        promoHtml = `
          <div class="promo-col">
            <span class="badge badge-discount">${product.discountPercentage}% OFF</span>
            <span class="promo-dates">${datesText}</span>
          </div>
        `;
      } else if (discountStatus === 'scheduled') {
        promoHtml = `
          <div class="promo-col">
            <span class="badge badge-scheduled">Starts ${formatDateIso(product.discountStartDate)}</span>
            <span class="promo-dates">${product.discountPercentage}% OFF</span>
          </div>
        `;
      } else if (discountStatus === 'expired') {
        promoHtml = `
          <div class="promo-col">
            <span class="badge badge-scheduled" style="opacity:0.6;">Expired</span>
            <span class="promo-dates">${product.discountPercentage}% OFF</span>
          </div>
        `;
      }

      // Details meta string
      let detailsMeta = [];
      if (product.type === 'Pot') {
        if (product.potShape) detailsMeta.push(`<span class="meta-pill">Shape: ${escapeHtml(product.potShape)}</span>`);
        if (product.potSize) detailsMeta.push(`<span class="meta-pill">Size: ${escapeHtml(product.potSize)}</span>`);
        if (product.color) detailsMeta.push(`<span class="meta-pill">Color: ${escapeHtml(product.color)}</span>`);
        if (product.author) detailsMeta.push(`<span class="meta-pill">Author: ${escapeHtml(product.author)}</span>`);
      } else if (product.type === 'tree') {
        if (product.tree_width || product.tree_height) detailsMeta.push(`<span class="meta-pill">${product.tree_width || '—'}W x ${product.tree_height || '—'}H cm</span>`);
        if (product.nebari) detailsMeta.push(`<span class="meta-pill">Nebari: ${escapeHtml(product.nebari)}cm</span>`);
      }

      return `
        <tr class="${isSold ? 'sold-row' : ''}">
          <td>
            <div class="thumbnail-cell" onclick="window.app.previewImage('${escapeHtml(imageSrc)}', '${escapeHtml(product.name)}')">
              <img src="${escapeHtml(imageSrc)}" alt="${escapeHtml(product.name)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
              <span class="thumbnail-fallback" style="display:none;">🪴</span>
            </div>
          </td>
          <td>
            <span class="code-badge">${escapeHtml(product.code || '—')}</span>
          </td>
          <td>
            <span class="badge ${badgeTypeClass}">${escapeHtml(product.type || '—')}</span>
          </td>
          <td>
            <div class="product-name-block">
              <span class="product-name-title">${escapeHtml(product.name)}</span>
              ${detailsMeta.length ? `<div class="product-meta-details">${detailsMeta.join('')}</div>` : ''}
            </div>
          </td>
          <td>
            <button class="stock-toggle-btn" onclick="window.app.toggleStock(${originalIndex})" title="Click to toggle availability">
              <span class="badge ${isSold ? 'badge-no' : 'badge-yes'}">
                ${isSold ? '✕ SOLD' : '✓ YES'}
              </span>
            </button>
          </td>
          <td>
            <div class="price-tag">
              ${hasActiveDiscount ? `<span class="price-strikethrough">${formatUSD(product.priceUSD)}</span>` : formatUSD(product.priceUSD)}
            </div>
            ${product.priceARS ? `<div style="font-size:11px;color:var(--text-muted);font-family:var(--font-mono);">$${product.priceARS} ARS</div>` : ''}
          </td>
          <td>
            ${promoHtml}
          </td>
          <td>
            <div class="price-tag ${hasActiveDiscount ? 'price-discounted' : ''}">
              ${formatUSD(effectivePrice)}
            </div>
          </td>
          <td class="text-right">
            <div class="table-actions">
              <button class="btn btn-secondary btn-icon" onclick="window.app.editProduct(${originalIndex})" title="Edit product and discounts">
                ✏️
              </button>
              <button class="btn btn-secondary btn-icon" onclick="window.app.duplicateProduct(${originalIndex})" title="Duplicate product">
                📋
              </button>
              <button class="btn btn-outline-danger btn-icon" onclick="window.app.deleteProduct(${originalIndex})" title="Delete product">
                🗑️
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join('');

    el.productsTableBody.innerHTML = rowsHtml;
  }

  function renderAll() {
    updateStats();
    renderTable();
  }

  function escapeHtml(str) {
    if (str === undefined || str === null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --- Modal & Category Form Management ---

  function updateCategoryFieldVisibility(selectedType) {
    el.potFields.style.display = 'none';
    el.treeFields.style.display = 'none';
    el.toolsFields.style.display = 'none';

    if (selectedType === 'Pot') {
      el.categorySectionTitle.textContent = '2. Pot Specific Details';
      el.potFields.style.display = 'grid';
    } else if (selectedType === 'tree') {
      el.categorySectionTitle.textContent = '2. Bonsai Tree Details';
      el.treeFields.style.display = 'grid';
    } else {
      el.categorySectionTitle.textContent = '2. Tool Details';
      el.toolsFields.style.display = 'grid';
    }
  }

  function updateLiveDiscountPreview() {
    const name = el.fieldName.value.trim() || 'Product Name';
    const code = el.fieldCode.value.trim();
    const priceUSD = parseFloat(el.fieldPriceUSD.value) || 0;
    const discountPct = parseFloat(el.fieldDiscountPercentage.value);
    const startDate = el.fieldDiscountStartDate.value;
    const endDate = el.fieldDiscountEndDate.value;

    const mockupImg = document.getElementById('mockupImg');
    const mockupPlaceholder = document.getElementById('mockupPlaceholder');
    if (mockupImg) {
      if (code) {
        mockupImg.src = `/images/catalog/${code}.jpg`;
        mockupImg.style.display = 'block';
        if (mockupPlaceholder) mockupPlaceholder.style.display = 'none';
        mockupImg.onerror = () => {
          mockupImg.style.display = 'none';
          if (mockupPlaceholder) mockupPlaceholder.style.display = 'block';
        };
      } else {
        mockupImg.style.display = 'none';
        if (mockupPlaceholder) mockupPlaceholder.style.display = 'block';
      }
    }

    const mockProduct = {
      name,
      code,
      priceUSD,
      discountPercentage: isNaN(discountPct) ? undefined : discountPct,
      discountStartDate: startDate ? new Date(startDate).toISOString() : undefined,
      discountEndDate: endDate ? new Date(endDate).toISOString() : undefined
    };

    const status = getDiscountStatus(mockProduct, new Date());
    el.mockupName.textContent = name;

    if (status === 'active') {
      const discounted = getDiscountedPrice(mockProduct, new Date());
      const savings = priceUSD - discounted;
      el.previewStatusBadge.className = 'preview-badge active';
      el.previewStatusBadge.textContent = `✓ Active Discount (${discountPct}% OFF)`;
      el.mockupDiscountBadge.style.display = 'inline-block';
      el.mockupDiscountBadge.textContent = `${discountPct}% OFF`;
      el.mockupPricing.innerHTML = `
        <span class="mockup-effective-price">${formatUSD(discounted)}</span>
        <span class="mockup-original-price">${formatUSD(priceUSD)}</span>
      `;
      el.mockupSavings.textContent = `Customer saves ${formatUSD(savings)}`;
    } else if (status === 'scheduled') {
      el.previewStatusBadge.className = 'preview-badge scheduled';
      el.previewStatusBadge.textContent = `🕒 Scheduled (Starts ${formatDateIso(startDate)})`;
      el.mockupDiscountBadge.style.display = 'none';
      el.mockupPricing.innerHTML = `<span class="mockup-effective-price" style="color:var(--text-main);">${formatUSD(priceUSD)}</span>`;
      el.mockupSavings.textContent = `Will discount by ${discountPct}% on start date`;
    } else if (status === 'expired') {
      el.previewStatusBadge.className = 'preview-badge expired';
      el.previewStatusBadge.textContent = `✕ Expired (Ended ${formatDateIso(endDate)})`;
      el.mockupDiscountBadge.style.display = 'none';
      el.mockupPricing.innerHTML = `<span class="mockup-effective-price" style="color:var(--text-main);">${formatUSD(priceUSD)}</span>`;
      el.mockupSavings.textContent = 'Promotion is past end date (inactive)';
    } else {
      el.previewStatusBadge.className = 'preview-badge';
      el.previewStatusBadge.textContent = 'No Active Discount';
      el.mockupDiscountBadge.style.display = 'none';
      el.mockupPricing.innerHTML = `<span class="mockup-effective-price" style="color:var(--text-main);">${formatUSD(priceUSD)}</span>`;
      el.mockupSavings.textContent = '';
    }
  }

  function openProductModal(index = null) {
    editingIndex = index;
    el.productForm.reset();

    if (index !== null && products[index]) {
      const p = products[index];
      el.modalTitle.textContent = `Edit Product (${p.code || 'No Code'})`;
      el.modalSubtitle.textContent = 'Modify product details and pricing';

      el.fieldCode.value = p.code || '';
      el.fieldType.value = p.type || 'Pot';
      el.fieldName.value = p.name || '';
      el.fieldAvailable.value = p.available === 'NO' ? 'NO' : 'YES';
      el.fieldPriceUSD.value = p.priceUSD !== undefined ? p.priceUSD : '';
      el.fieldPriceARS.value = p.priceARS || '';
      el.fieldHasImage.value = p.hasImage || '';

      // Pot
      el.fieldPotShape.value = p.potShape || '';
      el.fieldPotSize.value = p.potSize || '';
      el.fieldPotColor.value = p.color || '';
      el.fieldPotAuthor.value = p.author || '';
      el.fieldPrecioYenes.value = p['Precio yenes'] || '';

      // Tree
      el.fieldTreeSpecies.value = p.tree || '';
      el.fieldTreeWidth.value = p.tree_width || '';
      el.fieldTreeHeight.value = p.tree_height || '';
      el.fieldTreeNebari.value = p.nebari || '';
      el.fieldTreeImg.value = p.img || '';

      // Discount
      el.fieldDiscountPercentage.value = p.discountPercentage !== undefined ? p.discountPercentage : '';
      el.fieldDiscountStartDate.value = toDateTimeLocalInput(p.discountStartDate);
      el.fieldDiscountEndDate.value = toDateTimeLocalInput(p.discountEndDate);
    } else {
      el.modalTitle.textContent = 'Add New Product';
      el.modalSubtitle.textContent = 'Fill in the information to add a product to the catalog';
      el.fieldType.value = filterCategory !== 'all' ? filterCategory : 'Pot';
      el.fieldAvailable.value = 'YES';
    }

    updateCategoryFieldVisibility(el.fieldType.value);
    updateLiveDiscountPreview();
    el.productModal.style.display = 'flex';
  }

  function closeProductModal() {
    el.productModal.style.display = 'none';
    editingIndex = null;
  }

  // --- CRUD Operations ---

  function handleProductFormSubmit(e) {
    e.preventDefault();

    const code = el.fieldCode.value.trim();
    const type = el.fieldType.value;
    const name = el.fieldName.value.trim();
    const available = el.fieldAvailable.value;

    if (!name) {
      showToast('Product name is required', 'error');
      el.fieldName.focus();
      return;
    }

    if (!code) {
      showToast('Product code is required', 'error');
      el.fieldCode.focus();
      return;
    }

    // Check duplicate code warning
    const duplicate = products.find((p, idx) => p.code === code && idx !== editingIndex);
    if (duplicate) {
      if (!confirm(`Warning: Product code "${code}" is already in use by "${duplicate.name}". Continue anyway?`)) {
        return;
      }
    }

    // Build product object preserving clean schema
    const productObj = editingIndex !== null ? { ...products[editingIndex] } : {};

    productObj.type = type;
    productObj.code = code;
    productObj.name = name;
    productObj.available = available;

    // Prices
    if (el.fieldPriceUSD.value !== '') {
      const pUSD = parseFloat(el.fieldPriceUSD.value);
      productObj.priceUSD = isNaN(pUSD) ? el.fieldPriceUSD.value : pUSD;
    } else {
      delete productObj.priceUSD;
    }

    if (el.fieldPriceARS.value.trim() !== '') {
      productObj.priceARS = el.fieldPriceARS.value.trim();
    } else {
      delete productObj.priceARS;
    }

    if (el.fieldHasImage.value) {
      productObj.hasImage = el.fieldHasImage.value;
    } else {
      delete productObj.hasImage;
    }

    // Category specific fields
    if (type === 'Pot') {
      if (el.fieldPotShape.value.trim()) productObj.potShape = el.fieldPotShape.value.trim(); else delete productObj.potShape;
      if (el.fieldPotSize.value.trim()) productObj.potSize = el.fieldPotSize.value.trim(); else delete productObj.potSize;
      if (el.fieldPotColor.value.trim()) productObj.color = el.fieldPotColor.value.trim(); else delete productObj.color;
      if (el.fieldPotAuthor.value.trim()) productObj.author = el.fieldPotAuthor.value.trim(); else delete productObj.author;
      if (el.fieldPrecioYenes.value.trim()) productObj['Precio yenes'] = el.fieldPrecioYenes.value.trim(); else delete productObj['Precio yenes'];
      // Clean tree fields if switched
      delete productObj.tree;
      delete productObj.tree_width;
      delete productObj.tree_height;
      delete productObj.nebari;
      delete productObj.img;
    } else if (type === 'tree') {
      if (el.fieldTreeSpecies.value.trim()) productObj.tree = el.fieldTreeSpecies.value.trim(); else delete productObj.tree;
      if (el.fieldTreeWidth.value.trim()) productObj.tree_width = el.fieldTreeWidth.value.trim(); else delete productObj.tree_width;
      if (el.fieldTreeHeight.value.trim()) productObj.tree_height = el.fieldTreeHeight.value.trim(); else delete productObj.tree_height;
      if (el.fieldTreeNebari.value.trim()) productObj.nebari = el.fieldTreeNebari.value.trim(); else delete productObj.nebari;
      if (el.fieldTreeImg.value.trim()) productObj.img = el.fieldTreeImg.value.trim(); else delete productObj.img;
      // Clean pot fields if switched
      delete productObj.potShape;
      delete productObj.potSize;
      delete productObj.color;
      delete productObj.author;
      delete productObj['Precio yenes'];
    }

    // Discount fields
    const discountVal = parseFloat(el.fieldDiscountPercentage.value);
    if (!isNaN(discountVal) && discountVal > 0) {
      productObj.discountPercentage = discountVal;
      if (el.fieldDiscountStartDate.value) {
        productObj.discountStartDate = new Date(el.fieldDiscountStartDate.value).toISOString();
      } else {
        delete productObj.discountStartDate;
      }
      if (el.fieldDiscountEndDate.value) {
        productObj.discountEndDate = new Date(el.fieldDiscountEndDate.value).toISOString();
      } else {
        delete productObj.discountEndDate;
      }
    } else {
      delete productObj.discountPercentage;
      delete productObj.discountStartDate;
      delete productObj.discountEndDate;
    }

    if (editingIndex !== null) {
      products[editingIndex] = productObj;
      showToast(`Updated product "${name}"`, 'info');
    } else {
      products.push(productObj);
      showToast(`Added new product "${name}"`, 'success');
    }

    closeProductModal();
    updateDirtyState();
    renderAll();
  }

  function toggleStock(index) {
    if (!products[index]) return;
    const p = products[index];
    p.available = p.available === 'NO' ? 'YES' : 'NO';
    showToast(`Marked "${p.name}" as ${p.available === 'YES' ? 'Available (In Stock)' : 'Sold Out'}`, 'info');
    updateDirtyState();
    renderAll();
  }

  function duplicateProduct(index) {
    if (!products[index]) return;
    const original = products[index];
    const clone = JSON.parse(JSON.stringify(original));
    clone.code = `${original.code || 'NEW'}_copy`;
    clone.name = `${original.name} (Copy)`;
    products.push(clone);
    showToast(`Duplicated "${original.name}"`, 'success');
    updateDirtyState();
    renderAll();
  }

  function deleteProduct(index) {
    if (!products[index]) return;
    const p = products[index];
    openConfirmModal(
      'Delete Product',
      `Are you sure you want to delete product "${p.name}" (${p.code})?`,
      () => {
        products.splice(index, 1);
        showToast(`Deleted product "${p.name}"`, 'info');
        updateDirtyState();
        renderAll();
      }
    );
  }

  // --- Confirmation Modal ---

  function openConfirmModal(title, message, onOk) {
    el.confirmTitle.textContent = title;
    el.confirmMessage.textContent = message;
    currentConfirmAction = onOk;
    el.confirmModal.style.display = 'flex';
  }

  function closeConfirmModal() {
    el.confirmModal.style.display = 'none';
    currentConfirmAction = null;
  }

  // --- Backups Management ---

  async function openBackupsModal() {
    el.backupsModal.style.display = 'flex';
    el.backupsTableBody.innerHTML = '<tr><td colspan="4" style="text-align:center;">Loading backups...</td></tr>';

    try {
      const res = await fetch('/api/backups');
      const data = await res.json();
      if (!data.success) throw new Error(data.error);

      const backups = data.backups || [];
      if (backups.length === 0) {
        el.backupsTableBody.innerHTML = '';
        el.emptyBackups.style.display = 'block';
        return;
      }

      el.emptyBackups.style.display = 'none';
      el.backupsTableBody.innerHTML = backups.map(b => {
        const dateStr = new Date(b.createdAt).toLocaleString();
        const sizeKb = (b.sizeBytes / 1024).toFixed(1);
        return `
          <tr>
            <td><code>${escapeHtml(b.filename)}</code></td>
            <td>${dateStr}</td>
            <td>${sizeKb} KB</td>
            <td class="text-right">
              <button class="btn btn-sm btn-outline-danger" onclick="window.app.restoreBackup('${escapeHtml(b.filename)}')">
                Restore
              </button>
            </td>
          </tr>
        `;
      }).join('');
    } catch (err) {
      el.backupsTableBody.innerHTML = `<tr><td colspan="4" style="color:var(--danger);">Error loading backups: ${err.message}</td></tr>`;
    }
  }

  async function restoreBackup(filename) {
    openConfirmModal(
      'Restore Backup',
      `Restoring from "${filename}" will overwrite current product data. Continue?`,
      async () => {
        try {
          const res = await fetch('/api/restore', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename })
          });
          const data = await res.json();
          if (!data.success) throw new Error(data.error);

          products = data.products || [];
          originalProductsJson = JSON.stringify(products);
          updateDirtyState();
          renderAll();
          el.backupsModal.style.display = 'none';
          showToast(`Successfully restored from backup ${filename}`, 'success');
        } catch (err) {
          showToast('Failed to restore backup: ' + err.message, 'error');
        }
      }
    );
  }

  // --- Export & Import ---

  function downloadJsonFile() {
    const jsonStr = JSON.stringify(products, null, 4);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prodcuts_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Exported prodcuts.json', 'info');
  }

  function handleFileUpload(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const imported = JSON.parse(e.target.result);
        if (!Array.isArray(imported)) {
          throw new Error('Imported JSON must be an array of products');
        }
        products = imported;
        updateDirtyState();
        renderAll();
        el.importExportModal.style.display = 'none';
        showToast(`Imported ${products.length} products! Click "Save Changes" to commit.`, 'success');
      } catch (err) {
        showToast('Invalid JSON file: ' + err.message, 'error');
      }
    };
    reader.readAsText(file);
  }

  // --- Image Preview Popup ---

  function previewImage(src, title) {
    el.imagePreviewImg.src = src;
    el.imagePreviewCaption.textContent = title || '';
    el.imagePreviewModal.style.display = 'flex';
  }

  // --- Event Listeners ---

  function setupEventListeners() {
    // Actions
    el.btnSaveAll.addEventListener('click', saveProductsToServer);
    el.btnBannerSave.addEventListener('click', saveProductsToServer);
    el.btnNewProduct.addEventListener('click', () => openProductModal(null));
    el.btnDiscardChanges.addEventListener('click', () => {
      openConfirmModal(
        'Discard Changes',
        'Discard all unsaved edits and reload from disk?',
        () => {
          try {
            products = JSON.parse(originalProductsJson);
            updateDirtyState();
            renderAll();
            showToast('Changes discarded', 'info');
          } catch {
            fetchProducts();
          }
        }
      );
    });

    // Modals
    el.btnBackups.addEventListener('click', openBackupsModal);
    el.btnBackupsClose.addEventListener('click', () => el.backupsModal.style.display = 'none');
    el.btnCloseBackupsModal.addEventListener('click', () => el.backupsModal.style.display = 'none');

    el.btnImportExport.addEventListener('click', () => el.importExportModal.style.display = 'flex');
    el.btnImportExportClose.addEventListener('click', () => el.importExportModal.style.display = 'none');
    el.btnCloseImportExportModal.addEventListener('click', () => el.importExportModal.style.display = 'none');
    el.btnDownloadJson.addEventListener('click', downloadJsonFile);
    el.btnTriggerFileInput.addEventListener('click', () => el.fileInputJson.click());
    el.fileInputJson.addEventListener('change', e => {
      if (e.target.files.length) handleFileUpload(e.target.files[0]);
    });

    el.btnModalClose.addEventListener('click', closeProductModal);
    el.btnCancelModal.addEventListener('click', closeProductModal);
    el.productForm.addEventListener('submit', handleProductFormSubmit);

    el.btnImagePreviewClose.addEventListener('click', () => el.imagePreviewModal.style.display = 'none');
    el.imagePreviewModal.addEventListener('click', e => {
      if (e.target === el.imagePreviewModal) el.imagePreviewModal.style.display = 'none';
    });

    el.btnConfirmCancel.addEventListener('click', closeConfirmModal);
    el.btnConfirmClose.addEventListener('click', closeConfirmModal);
    el.btnConfirmOk.addEventListener('click', () => {
      if (typeof currentConfirmAction === 'function') currentConfirmAction();
      closeConfirmModal();
    });

    // Category switch in modal
    el.fieldType.addEventListener('change', e => {
      updateCategoryFieldVisibility(e.target.value);
    });

    // Live discount preview updates
    const discountInputs = [
      el.fieldCode,
      el.fieldName,
      el.fieldPriceUSD,
      el.fieldDiscountPercentage,
      el.fieldDiscountStartDate,
      el.fieldDiscountEndDate
    ];
    discountInputs.forEach(input => {
      input.addEventListener('input', updateLiveDiscountPreview);
      input.addEventListener('change', updateLiveDiscountPreview);
    });

    el.btnClearDiscountBtn.addEventListener('click', () => {
      el.fieldDiscountPercentage.value = '';
      el.fieldDiscountStartDate.value = '';
      el.fieldDiscountEndDate.value = '';
      updateLiveDiscountPreview();
    });

    // Search and filters
    el.searchInput.addEventListener('input', e => {
      searchQuery = e.target.value;
      el.btnClearSearch.style.display = searchQuery ? 'block' : 'none';
      renderTable();
    });

    el.btnClearSearch.addEventListener('click', () => {
      el.searchInput.value = '';
      searchQuery = '';
      el.btnClearSearch.style.display = 'none';
      renderTable();
      el.searchInput.focus();
    });

    el.filterType.addEventListener('change', e => {
      filterCategory = e.target.value;
      renderTable();
    });

    el.filterAvailability.addEventListener('change', e => {
      filterAvailability = e.target.value;
      renderTable();
    });

    el.filterDiscount.addEventListener('change', e => {
      filterDiscount = e.target.value;
      renderTable();
    });

    el.sortBy.addEventListener('change', e => {
      sortBy = e.target.value;
      renderTable();
    });

    el.btnResetFilters.addEventListener('click', resetFilters);
    el.btnEmptyReset.addEventListener('click', resetFilters);

    // Stat card quick filter clicks
    el.statCards.forEach(card => {
      card.addEventListener('click', () => {
        const filter = card.dataset.filter;
        resetFilters();
        if (filter === 'available') el.filterAvailability.value = 'YES';
        if (filter === 'sold') el.filterAvailability.value = 'NO';
        if (filter === 'discounted') el.filterDiscount.value = 'active';
        filterAvailability = el.filterAvailability.value;
        filterDiscount = el.filterDiscount.value;
        renderTable();
      });
    });

    // Global keyboard shortcuts
    window.addEventListener('keydown', e => {
      // Save: Ctrl+S / Cmd+S
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        if (isDirty) saveProductsToServer();
      }
      // Search: '/' when not typing in an input
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        e.preventDefault();
        el.searchInput.focus();
      }
      // Esc to close active modal
      if (e.key === 'Escape') {
        if (el.imagePreviewModal.style.display === 'flex') el.imagePreviewModal.style.display = 'none';
        else if (el.confirmModal.style.display === 'flex') closeConfirmModal();
        else if (el.productModal.style.display === 'flex') closeProductModal();
        else if (el.backupsModal.style.display === 'flex') el.backupsModal.style.display = 'none';
        else if (el.importExportModal.style.display === 'flex') el.importExportModal.style.display = 'none';
      }
    });
  }

  function resetFilters() {
    el.searchInput.value = '';
    searchQuery = '';
    el.btnClearSearch.style.display = 'none';
    el.filterType.value = 'all';
    filterCategory = 'all';
    el.filterAvailability.value = 'all';
    filterAvailability = 'all';
    el.filterDiscount.value = 'all';
    filterDiscount = 'all';
    el.sortBy.value = 'default';
    sortBy = 'default';
    renderTable();
  }

  // --- Expose Global API for Inline Action Handlers ---
  window.app = {
    editProduct: openProductModal,
    toggleStock: toggleStock,
    duplicateProduct: duplicateProduct,
    deleteProduct: deleteProduct,
    previewImage: previewImage,
    restoreBackup: restoreBackup
  };

  // --- Initialize ---
  setupEventListeners();
  fetchProducts();

})();
