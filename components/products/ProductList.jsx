import ProductCard from "./ProductCard"
import { mockData } from "@/utils/data"

const ProductList = async ({ category }) => {
    const items = category === 'all' ? mockData : mockData.filter(item => item.type === category)
    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item}/>)
            }
        </section>
    )
}

export default ProductList