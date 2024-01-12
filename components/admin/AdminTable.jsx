'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"
import ProductAdminItem from './AdminItem';
import Boton from '@/components/utils/Button';
import CreateForm from './CreateForm';

const ProductAdminTable = () => {
    const [products, setProducts] = useState([]);
    const [showProduct, setShowProduct] = useState(false);
    const [showUsers, setShowUsers] = useState(false);
    const [showSales, setShowSales] = useState(false);
    const [openPopUpCreate, setOpenPopUpCreate] = useState(false);
    const router = useRouter();

    const refreshData = () => {
        router.refresh();
    };

    useEffect(()=> {
        console.log('Effect ', products)
        const url = `${process.env.VERCEL_URL}/api/productos/all`
        try {
            fetch(url, { cache: 'no-store'})
                .then(r => r.json())
                .then((data) => {
                    setProducts(data);
                    console.log('Ya guarde la info.')
                })
        } catch(err) {
            return err;
        }
    }, []);

    const popUpCreateOpen = () => {
        setOpenPopUpCreate(!openPopUpCreate);
        refreshData();
    };

    return (
        <>
            <div className='flex justify-center align-center mt-8'>
                <Boton
                    onClick={() => popUpCreateOpen()}
                    className="bg-green-500 mr-2 rounded-lg p-4"
                    text="Agregar producto"
                />
                {openPopUpCreate && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                        <div className="container m-auto mt-6 max-w-lg bg-white p-8 rounded-lg">
                            <CreateForm openPopUp={() => popUpCreateOpen()} />
                        </div>
                    </div>
                )}
            </div>
            <table className="table-auto w-full max-w-screen-md mx-auto my-8">
                <thead>
                    <tr>
                        <th className="border p-2">Imagen</th>
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Tipo</th>
                        <th className="border p-2">Stock</th>
                        <th className='border p-2'>Precio</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, idx) => (
                        <ProductAdminItem key={product.slug} product={product} refreshData={() => refreshData()} />
                    ))}
                </tbody>
            </table>

        </>
    );
};

export default ProductAdminTable;
