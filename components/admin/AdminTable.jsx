'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"
import ProductAdminItem from './AdminItem';
import Boton from '@/components/utils/Button';
import CreateForm from './CreateForm';
import { db } from '@/utils/firebase';
import { getDocs, collection } from "firebase/firestore";

const ProductAdminTable = () => {
    const [product, setProduct] = useState([])
    const [openPopUpCreate, setOpenPopUpCreate] = useState(false);
    const [update, setUpdate] = useState(false);
    const router = useRouter();

    const refreshData = () => {
        console.log('Refresh data', update);
        setUpdate(!update);
        console.log('Cambie el update ', update);
        router.refresh()
    };

    const popUpCreateOpen = () => {
        setOpenPopUpCreate(!openPopUpCreate);
        refreshData();
        setUpdate(2);
    };

    useEffect(() => {
        console.log("Entre al Effect primer nivel.")
        const fetchProducts = async () => {
            try {
                console.log("Entre la effectivo")
                const querySnapshot = await getDocs(collection(db, "productos"));
                const products = querySnapshot.docs.map((doc) => doc.data());
                setProduct(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, [update, router]);

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
                            <CreateForm openPopUp={() => popUpCreateOpen()} updateData={refreshData} />
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
                    {product.map((product, idx) => (
                        <ProductAdminItem key={product.slug} product={product} refreshData={() => refreshData()} />
                    ))}
                </tbody>
            </table>

        </>
    );
};

export default ProductAdminTable;
