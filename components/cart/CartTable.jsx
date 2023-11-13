'use client'
import React from 'react';
import { useCart } from "@/utils/cartContext";
import CartItem from '@/components/cart/CartItem';

const CartTable = () => {
    const { cart, amountPrice, amountProduct } = useCart()
    return (
        <>
            <table className="table-auto w-full max-w-screen-md mx-auto my-8">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product) => (
                        <CartItem key={product.id} product={product} amount={amountProduct(product.slug)}/>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 text-center">
                <strong>Total:</strong> ${amountPrice().toFixed(2)}
            </div>
        </>
    );
};

export default CartTable;