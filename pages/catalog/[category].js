import Layout from "../../components/layout";
import ProductGrid from "../../components/products/productGrid";
import { useRouter } from 'next/router';

export default function CatalogByCategory() {
    const router = useRouter()
    const { category } = router.query;
    return (
        <Layout>
            <h2>Sumaremos nuevos productos en el catalogo a medida se encuentren disponibles, esten atentos!</h2>
            {category &&
                <ProductGrid category={category}></ProductGrid>}
        </Layout>
    );
}


export async function getStaticProps({ params: { category } }) {
    return { props: { category } };
}

export async function getStaticPaths() {
    const categories = ["Pot", "tree"];

    const paths = categories.map((c) => {
        return { params: { category: c } };
    });

    return {
        paths,
        fallback: false,
    };
}