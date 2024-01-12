import { collection, getDocs, query, where } from "firebase/firestore";
import ProductCard from "./ProductCard";
import { db } from "@/utils/firebase";

const getProducts = async (categories) => {
    const productsRef = collection(db, "productos");
    const q =
        categories === "all"
            ? productsRef
            : query(productsRef, where("type", "==", categories));

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

const ProductList = async ({ category }) => {
    const items = await getProducts(category);
    console.log("ProductList ", items)
    return (
        <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
            {
                items.map((item) => <ProductCard key={item.slug} item={item} />)
            }
        </section>
    )
}

export default ProductList
