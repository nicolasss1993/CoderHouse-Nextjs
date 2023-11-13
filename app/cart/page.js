import CartTable from "@/components/cart/CartTable"

export const metadata = {
	title: 'Carrito!',
	description: 'Pagina de Carrito de Capellari',
};

const CartPage = () => {
    return (
        <main className="container m-auto">
            <h1 className="text-3xl font-bold my-8">Lista de Productos</h1>
            <hr />
            <CartTable />
        </main>
    )
}

export default CartPage