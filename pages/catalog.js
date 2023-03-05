import Layout from "../components/layout";
import ProductGrid from "../components/products/productGrid";

export default function Catalog() {
  return (
    <Layout>
      <h2>Sumaremos nuevos productos en el catalogo a medida se encuentren disponibles, esten atentos!</h2>
      <ProductGrid></ProductGrid>
    </Layout>
  );
}