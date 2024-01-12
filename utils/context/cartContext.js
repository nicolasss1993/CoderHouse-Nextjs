'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { getDbCart } from '../constants';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, amount) => {
        const isInCart = cart.find( e => e.slug === item.slug);
        if (isInCart) {
            isInCart.amount += amount;
        } else {
            setCart([...cart, item]);
        };
    };

    const removeFromCart = (itemId) => {
        setCart( cart.filter(i => i.slug !== itemId) );
    };

    const clearCart = () => {
        setCart([]);
    };

    const setDbCart = async (uid) => {
        const dbCart = await getDbCart(uid);
        setCart(dbCart.cart);
    };

    const amountProduct = (slug) => {
        return cart.filter(e => e.slug === slug)[0].amount;
    }

    const amountCart = () => {
        return cart.reduce((acc, item) => acc + item.amount, 0)
    }

    const amountPrice = () => {
        return cart.reduce((total, item) => total + item.amount * item.price, 0);
    }

    const getCart = () => {
        return cart
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, amountCart, amountPrice, amountProduct, getCart, setDbCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
