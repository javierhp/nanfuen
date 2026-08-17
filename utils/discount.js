/**
 * Utility functions to handle product discounts.
 */

/**
 * Checks if a product has an active discount based on discountPercentage and validity dates.
 * 
 * @param {Object} product - Product object
 * @param {Date|string|number} [currentDate=new Date()] - Reference date for validation
 * @returns {boolean} True if discount is active, false otherwise
 */
export function isDiscountActive(product, currentDate = new Date()) {
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

/**
 * Gets the active discount percentage if active, or 0 if inactive.
 * 
 * @param {Object} product - Product object
 * @param {Date|string|number} [currentDate=new Date()] - Reference date
 * @returns {number} Active discount percentage
 */
export function getDiscountPercentage(product, currentDate = new Date()) {
  if (!isDiscountActive(product, currentDate)) {
    return 0;
  }
  return Number(product.discountPercentage);
}

/**
 * Calculates the discounted price for a product.
 * Returns null if no active discount or invalid price.
 * 
 * @param {Object} product - Product object
 * @param {Date|string|number} [currentDate=new Date()] - Reference date
 * @returns {number|null} Discounted price or null
 */
export function getDiscountedPrice(product, currentDate = new Date()) {
  if (!isDiscountActive(product, currentDate)) {
    return null;
  }

  const basePrice = Number(product.priceUSD);
  if (isNaN(basePrice) || basePrice < 0) {
    return null;
  }

  const percentage = Number(product.discountPercentage);
  const discounted = basePrice * (1 - percentage / 100);
  return Math.max(0, discounted);
}

/**
 * Gets the effective price to display/sort for a product.
 * Returns discounted price if discount is active, otherwise base price.
 * 
 * @param {Object} product - Product object
 * @param {Date|string|number} [currentDate=new Date()] - Reference date
 * @returns {number} Effective price
 */
export function getEffectivePrice(product, currentDate = new Date()) {
  if (!product) return 0;
  const basePrice = Number(product.priceUSD) || 0;
  if (isDiscountActive(product, currentDate)) {
    const discounted = getDiscountedPrice(product, currentDate);
    if (discounted !== null) {
      return discounted;
    }
  }
  return basePrice;
}
