import ProductDetail from "@/components/products/ProductDetail"

export async function generateMetadata({params, searchParams}, parent) {
    return {
        title: `Capellari - ${params.slug}`,
    }
};

const DetailPage = ({params}) => {
    const {slug} = params

    return (
        <main className="container m-auto mt-10">
            <ProductDetail slug={slug}/>
        </main>
    )
};

export default DetailPage
