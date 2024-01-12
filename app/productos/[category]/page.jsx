import CategoryMenu from "@/components/products/CategoryMenu";
import ProductList from "@/components/products/ProductList";
import { LinkProducts } from "@/utils/constants";

export async function generateMetadata({ params, searchParams }, parent) {
    return {
        title: `Capellari - ${params.categoria}`,
    }
}

export const revalidate = 1800;

export async function generateStaticParams() {
    const categoryList = LinkProducts.map(e => {
        const category = e.value.split('/')
        return { category : category.pop() }
    });

    return categoryList;
};

const Productos = ({ params }) => {
    return (
        <main className="container m-auto bg-body">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>
            <div className="flex gap-10">
                <CategoryMenu />
                {params.category && <ProductList category={params.category} />}
            </div>
        </main>
    )
}

export default Productos