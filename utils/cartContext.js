'use client'
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeFromCart = (itemId) => {
        setCart( cart.filter(i => i.slug !== itemId) );
    };

    const clearCart = () => {
        setCart([]);
    };

    const amountProduct = (slug) => {
        return cart.filter(e => e.slug === slug).length;
    }

    const amountCart = () => {
        return cart.reduce((acc, item) => acc + item.amount, 0)
    }

    const amountPrice = () => {
        return cart.reduce((total, item) => total + item.amount * item.price, 0);
    }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, amountCart, amountPrice, amountProduct }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
