import CategoryMenu from "@/components/products/CategoryMenu";
import ProductList from "@/components/products/ProductList"

export async function generateMetadata({params, searchParams}, parent) {
    return {
        title: `Capellari - ${params.categoria}`,
    }
}

const Productos = ({params}) => {
    const { category } = params
    return (
        <main className="container m-auto bg-body">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <CategoryMenu />
                <ProductList category={category}/>
            </div>
        </main>
    )
}

export default Productos