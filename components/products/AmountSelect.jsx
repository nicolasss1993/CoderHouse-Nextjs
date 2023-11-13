"use client"
import { useState } from "react"
import { useCart } from "@/utils/cartContext"
import Counter from "@/components/utils/Counter"
import Button from "@/components/utils/Button"

const AmountSelector = ({ item }) => {
    const { addToCart } = useCart();
    const [amount, setAmount] = useState(1)

    const handleAddToCart = () => {
        addToCart({...item, amount});
    };

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max={item.stock} counter={amount} setCounter={setAmount} />
            <Button className="w-full rounded-lg py-2 px-4 bg-gray-500 active:bg-gray-700" onClick={handleAddToCart} text="Agregar al carrito" />
        </div>
    )
}

export default AmountSelector