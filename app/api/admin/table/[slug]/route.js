import { db } from "@/utils/firebase";
import { doc, deleteDoc } from "firebase/firestore"
import { NextResponse } from "next/server";

export async function DELETE(_, { params }) {
    const { slug } = params;
    try {
        const documentoRef = doc(db, 'productos', slug);
        await deleteDoc(documentoRef)
        return NextResponse.json({ success: true, message: 'Producto eliminado exitosamente', status: 200 });
    } catch (error) {
        console.error('Error al eliminar el producto: ', error);
        return NextResponse.json({ success: false, message: 'Error al eliminar el producto', status: 500 });
    }
}
