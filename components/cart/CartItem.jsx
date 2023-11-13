import React from 'react';
import Image from 'next/image';
import { useCart } from "@/utils/cartContext";

const CartItem = ({ product }) => {
    const { amountProduct } = useCart();
    const amount = amountProduct();
    return (
        <tr>
            <td className='text-center'>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="object-cover mx-auto"
                />
            </td>
            <td className='text-center'>{`${amount > 0 ? `${amount} x`: ''} ${product.title}`}</td>
            <td className='text-center'>${product.price}</td>
        </tr>
    );
};

export default CartItem;