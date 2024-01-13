'use client'
import React, { useState } from 'react';
import Boton from '@/components/utils/Button'
import Image from 'next/image';
import EditForm from './EditForm';
import { DelProduct } from '@/utils/constants';
import { useRouter } from "next/navigation"

const ProductAdminItem = ({ product, refreshData, onDelete }) => {
    const router = useRouter();
    const [openPopUpEdit, setOpenPopUpEdit] = useState(false);
    const [popUpConfirm, setPopUpConfirm] = useState(false);
    const popUpEditOpen = () => {
        setOpenPopUpEdit(!openPopUpEdit);
    };
    const OpenPopUpConfirm = () => {
        setPopUpConfirm(!popUpConfirm);
    };

    const deleteProduct = (slug) => {
        DelProduct(slug);
    };

    return (
        <React.Fragment key={product.slug}>
            {openPopUpEdit && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                    <div className="container m-auto mt-6 max-w-lg bg-white p-8 rounded-lg">
                        <EditForm item={product} openPopUp={() => popUpEditOpen()} refreshData={refreshData} />
                    </div>
                </div>
            )}
            {popUpConfirm &&
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-md">
                    <p className="mb-4">¿Estás seguro de que quieres eliminar este registro?</p>
                    <div className='flex'>
                        <Boton
                            onClick={() => {
                                setTimeout(() => deleteProduct(product.slug), 1000);
                                OpenPopUpConfirm();
                                refreshData();
                            }}
                            className="w-1/2 bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-600"
                            text="Si"
                        />
                        <Boton
                            onClick={() => OpenPopUpConfirm()}
                            className="w-1/2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            text="No"
                        />
                    </div>
                </div>
            }
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
                <td className="border p-2">{product.price}</td>
                <td className='p-4 flex flex-row'>
                    <Boton
                        onClick={() => popUpEditOpen()}
                        className="bg-blue-500 px-2 py-1 mr-2"
                        text="Editar"
                    />
                    <Boton
                        onClick={() => OpenPopUpConfirm()}
                        className="bg-red-500 px-2 py-1"
                        text="Eliminar"
                    />
                </td>
            </tr>
        </React.Fragment>
    );
};

export default ProductAdminItem;
