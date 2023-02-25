import Layout from "../../components/layout";
import ProductGrid from "../../components/products/productGrid";
import { useRouter } from 'next/router';

export default function CatalogByCategory() {
    const router = useRouter()
    const { category } = router.query;
    return (
        <Layout>
            <h1>Estamos renovando el catalogo, por favor visitanos mas tarde.</h1>
            {category &&
                <ProductGrid category={category}></ProductGrid>}
        </Layout>
    );
}