'use client'
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        alert('Mensaje enviado');
    };

    return (
        <main className="flex flex-col items-center h-screen text-white">
            <h1 className="text-3xl text-black font-bold my-8">Formulario de Contacto</h1>
            <form className="flex flex-col items-center text-black flex-1 w-full">
                <input
                    type="text"
                    name="firstName"
                    placeholder="Nombre"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mb-4 p-2 rounded-lg"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Apellido"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mb-4 p-2 rounded-lg"
                />
                <textarea
                    name="message"
                    placeholder="Mensaje (máximo 250 caracteres)"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={250}
                    className="mb-4 p-2 rounded-lg w-505 h-40 w-1/2"
                />
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg cursor-pointer"
                >
                    Enviar
                </button>
            </form>
        </main>
    );
};

export default ContactForm;
