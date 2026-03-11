import Layout from '../../../components/layout';
import ProductGrid from '../../../components/products/productGrid';
import { useRouter } from 'next/router';

export default function CatalogByCategory() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <Layout>
      {category && <ProductGrid category={category}></ProductGrid>}
    </Layout>
  );
}

export async function getStaticProps({ params: { category, locale } }) {
  return { props: { category, locale } };
}

export async function getStaticPaths() {
  const categories = ['Pot', 'tree', 'Tools'];
  const locales = ['en', 'es'];
  const paths = [];

  locales.forEach(locale => {
    categories.forEach(category => {
      paths.push({ params: { locale, category } });
    });
  });

  return {
    paths,
    fallback: false,
  };
}
