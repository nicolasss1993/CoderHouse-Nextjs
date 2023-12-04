import ProductCard from "./ProductCard"

const ProductList = async ({ category }) => {
    const url = `${process.env.BASE_URL}/api/productos/${category}`
    const items = await fetch(url, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map(item => <ProductCard key={item.slug} item={item}/>)
            }
        </section>
    )
}

export default ProductList