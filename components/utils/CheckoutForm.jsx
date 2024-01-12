'use client'
import React, { useState } from 'react';
import { setSale } from '@/utils/constants';
import moment from 'moment';
import { useCart } from "@/utils/context/cartContext"

export const CheckoutForm = ({ idUser, callback, onClose }) => {
    const { getCart } = useCart();
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        dni: '',
        direccion: '',
        telefono: '',
        email: '',
        datetimeCreate: moment().toDate(),
        userUid: idUser,
        sales: getCart()
    });
    

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSale(formData);
        callback();
    };

    return (
        <div className="modal fixed inset-0 overflow-y-auto flex items-center justify-center">
            <div className="modal-content bg-white rounded shadow-md p-6 max-w-md">
                <span className="close absolute top-0 right-0 p-4 cursor-pointer" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                        Nombre:
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full border rounded-md p-2" />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
                        Apellido:
                        <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="w-full border rounded-md p-2" />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dni">
                        DNI:
                        <input type="text" name="dni" value={formData.dni} onChange={handleChange} className="w-full border rounded-md p-2" />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccion">
                        Dirección:
                        <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} className="w-full border rounded-md p-2" />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                        Teléfono:
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full border rounded-md p-2" />
                    </label>
                    <br />
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border rounded-md p-2" />
                    </label>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Finalizar</button>
                        <button type="button" onClick={onClose} className="ml-2 bg-gray-300 py-2 px-4 rounded">Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};