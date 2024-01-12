"use client"
import { useState, useEffect } from "react";
import { useCart } from "@/utils/context/cartContext";
import Counter from "@/components/utils/Counter";
import Boton from "@/components/utils/Button";
import ButtonBack from "../utils/ButtonBack";
import { AddProductToCar } from "@/components/products/ProductDetail";
import { useAuthContext } from "@/utils/context/authContext";

const AmountSelector = ({ item }) => {
    const { addToCart, cart, getCart } = useCart();
    const [amount, setAmount] = useState(1);
    const [update, setUpdate] = useState(false);
    const { userId } = useAuthContext();

    const handleAddToCart = () => {
        addToCart({...item, amount});
        setUpdate(true);
    };

    useEffect(() => {
        if (userId.logged && cart.length > 0) {
            AddProductToCar(userId.uid, getCart());
        }
    }, [update]);

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.stock} counter={amount} setCounter={setAmount} />
            <Boton
                className="w-full rounded-lg py-2 px-4 bg-gray-500 active:bg-gray-700"
                onClick={() => handleAddToCart()}
                text="Agregar al carrito"
            />
            <ButtonBack
                className='w-full rounded-lg py-2 px-4 bg-blue-500'
                text="< Volver"
            />
        </div>
    )
}

export default AmountSelector