# Specification: Product Discounts Feature

## Overview
As a sales person, I want to establish a discount percentage for products with specific start and end dates. This will allow the catalog to display the discount percentage as a badge and show the new price alongside the strikethrough old price, aiming to increase sales during specific timeframes.

## Data Structure Changes
Modify the product data schema (currently in `public/data/prodcuts.json`) to support the following new fields for each product (or selectively applied):
- `discountPercentage` (number): The percentage of discount to apply (e.g., 20 for 20%).
- `discountStartDate` (string/ISO Date): The date and time when the discount becomes active.
- `discountEndDate` (string/ISO Date): The date and time when the discount expires.

## Component Changes

### 1. `components/products/productCard.js` (and related card components)
- **Logic**: 
  - Read `discountPercentage`, `discountStartDate`, and `discountEndDate`.
  - Check if the current date falls within the start and end dates.
  - If active, calculate the new price based on the original price (`priceARS`) and `discountPercentage`.
- **UI/Visuals**:
  - **Badge**: Display a visual badge on the product image or card header indicating the discount (e.g., "20% OFF").
  - **Pricing**: Render the original price with a strikethrough styling and display the new discounted price prominently.

### 2. `components/products/productGrid.js`
- Ensure any price sorting or filtering logic (if re-enabled or modified) accounts for the *active discounted price* rather than just the base price.

## Agent Tasks
1. Update a sample of `public/data/prodcuts.json` to include the new fields for testing.
2. Modify `ProductCard` to implement the active discount check, calculate the new price, and update the UI with the badge and strikethrough text.
3. Update `ProductGrid` if price sorting needs to factor in the active discounts.
4. Verify the UI changes ensure the layout doesn't break when the badge and extra price information are displayed.
