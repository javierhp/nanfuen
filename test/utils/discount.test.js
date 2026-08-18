import {
  isDiscountActive,
  getDiscountPercentage,
  getDiscountedPrice,
  getEffectivePrice,
} from '../../utils/discount';

describe('Discount utility functions', () => {
  const baseProduct = {
    name: 'Sample Pot',
    priceUSD: 100,
    discountPercentage: 20,
    discountStartDate: '2026-06-01T00:00:00Z',
    discountEndDate: '2026-08-31T23:59:59Z',
  };

  describe('isDiscountActive', () => {
    test('returns true when current date is within discount window', () => {
      const activeDate = '2026-07-15T12:00:00Z';
      expect(isDiscountActive(baseProduct, activeDate)).toBe(true);
    });

    test('returns false when current date is before start date', () => {
      const beforeDate = '2026-05-31T23:59:59Z';
      expect(isDiscountActive(baseProduct, beforeDate)).toBe(false);
    });

    test('returns false when current date is after end date', () => {
      const afterDate = '2026-09-01T00:00:00Z';
      expect(isDiscountActive(baseProduct, afterDate)).toBe(false);
    });

    test('returns false if discountPercentage is missing, 0, or invalid', () => {
      expect(isDiscountActive({ ...baseProduct, discountPercentage: undefined })).toBe(false);
      expect(isDiscountActive({ ...baseProduct, discountPercentage: 0 })).toBe(false);
      expect(isDiscountActive({ ...baseProduct, discountPercentage: -10 })).toBe(false);
      expect(isDiscountActive({ ...baseProduct, discountPercentage: 150 })).toBe(false);
      expect(isDiscountActive(null)).toBe(false);
    });

    test('returns true when start and/or end dates are omitted but percentage is valid', () => {
      const openDiscount = {
        name: 'Open discount',
        priceUSD: 50,
        discountPercentage: 15,
      };
      expect(isDiscountActive(openDiscount)).toBe(true);
    });
  });

  describe('getDiscountPercentage', () => {
    test('returns percentage when active', () => {
      const activeDate = '2026-07-15T12:00:00Z';
      expect(getDiscountPercentage(baseProduct, activeDate)).toBe(20);
    });

    test('returns 0 when inactive', () => {
      const expiredDate = '2026-09-15T12:00:00Z';
      expect(getDiscountPercentage(baseProduct, expiredDate)).toBe(0);
    });
  });

  describe('getDiscountedPrice', () => {
    test('calculates correct discounted price for active discount', () => {
      const activeDate = '2026-07-15T12:00:00Z';
      // 100 - (20% of 100) = 80
      expect(getDiscountedPrice(baseProduct, activeDate)).toBe(80);
    });

    test('returns null when discount is not active', () => {
      const expiredDate = '2026-09-15T12:00:00Z';
      expect(getDiscountedPrice(baseProduct, expiredDate)).toBeNull();
    });

    test('handles float price correctly', () => {
      const productWithFloat = {
        priceUSD: '46.97986577181208',
        discountPercentage: 20,
      };
      const discounted = getDiscountedPrice(productWithFloat);
      expect(discounted).toBeCloseTo(37.58389, 4);
    });
  });

  describe('getEffectivePrice', () => {
    test('returns discounted price when discount is active', () => {
      const activeDate = '2026-07-15T12:00:00Z';
      expect(getEffectivePrice(baseProduct, activeDate)).toBe(80);
    });

    test('returns base price when discount is not active', () => {
      const expiredDate = '2026-09-15T12:00:00Z';
      expect(getEffectivePrice(baseProduct, expiredDate)).toBe(100);
    });

    test('returns base price when no discount specified', () => {
      const noDiscountProduct = { priceUSD: 55 };
      expect(getEffectivePrice(noDiscountProduct)).toBe(55);
    });
  });
});
