"use client"

import { useState } from "react"
import Boton from "../utils/Button"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/utils/firebase"

const createProduct = async (values, file, updateData) => {
    const storageRef = ref(storage, values.slug);
    const fileSnapshot = await uploadBytes(storageRef, file);
    const fileURL = await getDownloadURL(fileSnapshot.ref);

    const docRef = doc(db, "productos", values.slug);
    return setDoc(docRef, {
        ...values,
        image: fileURL
    }).then(() => {
        console.log("Producto creado exitosamente");
        updateData();
    });
}

const CreateForm = ({ openPopUp, updateData }) => {
    const [values, setValues] = useState({ 
        title: '', 
        description: '', 
        stock: 0,
        price: 0, 
        type: '', 
        slug: '' 
    })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(values, file, updateData);
        openPopUp();
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.stock}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="stock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border block border-blue-100 my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit" className="m-4 px-4 py-2 bg-blue-500 rounded-md" text="Guardar" />
                <Boton onClick={() => openPopUp()} className="mt-4 px-4 py-2 bg-red-500 rounded-md" text="Cerrar" />
            </form>
        </div>
    )
}

export default CreateForm