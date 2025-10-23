import pricingData from '../../public/data/classes-pricing.json'
import productsData from '../../public/data/prodcuts.json'

describe('Data files smoke test', () => {
  test('pricing data has expected structure', () => {
    expect(Array.isArray(pricingData)).toBe(true)
    expect(pricingData.length).toBeGreaterThan(0)
    
    const plan = pricingData[0]
    expect(plan).toHaveProperty('name')
    expect(plan).toHaveProperty('category')
    expect(plan).toHaveProperty('priceUSD')
    expect(plan).toHaveProperty('features')
    expect(Array.isArray(plan.features)).toBe(true)
  })

  test('products data has expected structure', () => {
    expect(Array.isArray(productsData)).toBe(true)
    expect(productsData.length).toBeGreaterThan(0)
    
    // Test pot structure
    const pot = productsData.find(p => p.type === 'Pot')
    expect(pot).toBeTruthy()
    expect(pot).toHaveProperty('code')
    expect(pot).toHaveProperty('name')
    expect(pot).toHaveProperty('priceUSD')
    expect(pot).toHaveProperty('available')
    
    // Test tool structure
    const tool = productsData.find(p => p.type === 'Tools')
    expect(tool).toBeTruthy()
    expect(tool).toHaveProperty('code')
    expect(tool).toHaveProperty('name')
    expect(tool).toHaveProperty('priceUSD')
    
    // Test tree structure
    const tree = productsData.find(p => p.type === 'tree')
    expect(tree).toBeTruthy()
    expect(tree).toHaveProperty('tree_width')
    expect(tree).toHaveProperty('tree_height')
    expect(tree).toHaveProperty('code')
  })

  test('product categories match expected values', () => {
    const categories = [...new Set(productsData.map(p => p.type))]
    expect(categories).toEqual(expect.arrayContaining(['Pot', 'Tools', 'tree']))
  })
})