"use client"
import Link from "next/link"
import { useCart } from "@/utils/context/cartContext"
import Image from "next/image"

const CartWidget = () => {
    const { amountCart } = useCart()
    return (
        <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center`}>
            <Image 
                src={"/cart-icon.svg"}
                alt="Cart icon"
                width={30}
                height={30}
            />
            <span>{amountCart()}</span>
        </Link>
    )
}

export default CartWidget
