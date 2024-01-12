'use client'
import React, { useState, useEffect } from 'react';
import { useCart } from "@/utils/context/cartContext";
import CartItem from '@/components/cart/CartItem';
import Boton from '../utils/Button';
import { AddProductToCar } from '@/utils/constants';
import { useAuthContext } from "@/utils/context/authContext";
import { CheckoutForm } from '../utils/CheckoutForm';
import { SuccessMessage } from '../utils/SucessMessage';
import { updateStock } from '@/utils/constants';

const CartTable = () => {
    const { cart, amountPrice, clearCart, getCart } = useCart();
    const { userId } = useAuthContext();
    const [update, setUpdate] = useState(false);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [checkoutSucess, setCheckoutSucess] = useState(false)

    const hadlerClearCart = () => {
        clearCart();
        setUpdate(true)
    };

    const hadlerSucessOk = () => {
        updateStock(getCart());
        setShowCheckoutForm(!showCheckoutForm);
        hadlerClearCart();
        setCheckoutSucess(true);
    }

    useEffect(() => {
        if (userId.logged && cart.length > 0) {
            AddProductToCar(userId.uid, []);
        }
    }, [update]);

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
                        <CartItem key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex flex-col items-center">
                <strong>Total:</strong> ${amountPrice().toFixed(2)}
                <Boton onClick={() => setShowCheckoutForm(!showCheckoutForm)} className="m-1 p-2 bg-blue-400 rounded" type="button" text="Finalizar compra" />
                <Boton onClick={() => hadlerClearCart()} className="m-1 p-2 bg-red-400 rounded" type="button" text="Vaciar Carrito" />
                {showCheckoutForm && <CheckoutForm idUser={userId.uid} callback={() => hadlerSucessOk()} onClose={() => setShowCheckoutForm(!showCheckoutForm)} />}
                {checkoutSucess && <SuccessMessage onClose={() => setCheckoutSucess(!checkoutSucess)} />}
            </div>
        </>
    );
};

export default CartTable;