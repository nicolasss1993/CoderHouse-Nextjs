'use client'
import React from 'react';
import Button from '@/components/utils/Button'
import Image from 'next/image';

const ProductAdminItem = ({ product, onEdit, onDelete }) => {
    return (
        <tr>
            <td className="text-center">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={48}
                    height={48}
                    className="object-cover mx-auto"
                />
            </td>
            <td className="border p-2">{product.title}</td>
            <td className="border p-2">{product.type}</td>
            <td className="border p-2">{product.stock}</td>
            <td className='p-4 flex flex-row'>
                <Button
                    onClick={() => alert('Editar en construccion')}
                    className="bg-blue-500 px-2 py-1 mr-2"
                    text="Editar"
                />
                <Button
                    onClick={() => alert("Trabajando en la funcion!")}
                    className="bg-red-500 px-2 py-1"
                    text="Eliminar"
                />
            </td>
        </tr>
    );
};

export default ProductAdminItem;
