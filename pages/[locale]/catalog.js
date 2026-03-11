import Layout from '../../components/layout';
import ProductGrid from '../../components/products/productGrid';

export default function Catalog() {
  return (
    <Layout>
      <ProductGrid></ProductGrid>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  return { props: { locale: params.locale } };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'es' } }
    ],
    fallback: false,
  };
}
