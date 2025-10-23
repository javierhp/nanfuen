const path = require('path')
const catalogPage = require(path.resolve(__dirname, '..', '..', 'pages', 'catalog', '[category].js'))

describe('catalog page data functions (smoke)', () => {
  const { getStaticPaths, getStaticProps } = catalogPage
  test('getStaticPaths returns expected categories and fallback false', async () => {
    const res = await getStaticPaths()
    expect(res).toHaveProperty('paths')
    const categories = res.paths.map((p) => p.params.category)
    expect(categories).toEqual(expect.arrayContaining(['Pot', 'tree', 'Tools']))
    expect(res).toHaveProperty('fallback', false)
  })

  test('getStaticProps returns props with the given category', async () => {
    const context = { params: { category: 'Pot' } }
    const res = await getStaticProps(context)
    expect(res).toHaveProperty('props')
    expect(res.props).toEqual({ category: 'Pot' })
  })
})
