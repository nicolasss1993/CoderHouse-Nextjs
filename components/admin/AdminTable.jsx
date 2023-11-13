'use client'
import React from 'react';
import ProductAdminItem from './AdminItem';
import Button from '@/components/utils/Button'

const ProductAdminTable = ({ products, onEdit, onDelete }) => {
    return (
        <>
            <div className='flex justify-center align-center mt-8'>
                <Button
                    onClick={() => alert('Crear en construccion')}
                    className="bg-green-500 mr-2 rounded-lg p-4"
                    text="Agregar producto"
                />
            </div>
            <table className="table-auto w-full max-w-screen-md mx-auto my-8">
                <thead>
                    <tr>
                        <th className="border p-2">Imagen</th>
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Tipo</th>
                        <th className="border p-2">Stock</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductAdminItem key={product.slug} product={product} onEdit={onEdit} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ProductAdminTable;
