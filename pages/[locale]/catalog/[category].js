import Layout from '../../../components/layout';
import ProductGrid from '../../../components/products/productGrid';
import { useRouter } from 'next/router';

export default function CatalogByCategory({ category }) {
  const router = useRouter();
  // Fallback to router.query if prop is not instantly available, though static props provide it.
  const activeCategory = category || router.query.category;
  
  return (
    <Layout>
      {activeCategory && <ProductGrid category={activeCategory}></ProductGrid>}
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
