"use client"

import { useState } from "react"
import Boton from "@/components/utils/Button"
import { db, storage } from "@/utils/firebase"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const valueDefault = {
    title: '', description: '', stock: 0, price: 0, type: '', image: null
};

const updateProduct = async (slug, values, file) => {
    let fileURL = values.image

    if (file) {
        const storageRef = ref(storage, `products/${values.slug}`)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)
    }

    const docRef = doc(db, "productos", slug)
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        stock: Number(values.stock),
        price: Number(values.price),
        type: values.type,
        image: fileURL
    })
        .then(() => console.log("Producto actualizado correctamente"))
}


const EditForm = ({ item, openPopUp, refreshData }) => {
    const { title, description, stock, price, type, image } = item ? item : valueDefault;
    const [values, setValues] = useState({ title, description, stock, price, type, image })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updateProduct(item.slug, values, file);
        openPopUp();
        refreshData();
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <form onSubmit={handleSubmit} className="my-12">
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
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

export default EditForm