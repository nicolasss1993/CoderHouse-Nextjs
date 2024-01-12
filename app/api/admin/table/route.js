import { NextResponse } from "next/server"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/utils/firebase"

export async function GET(_, { params }) {
    const productosRef = collection(db, "productos")
    const querySnapshot = await getDocs(productosRef)
    const docs = querySnapshot.docs.map(doc => doc.data())
    console.log(docs)
    return NextResponse.json(docs)
}