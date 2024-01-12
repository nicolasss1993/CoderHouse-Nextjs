import { NextResponse } from "next/server"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/utils/firebase"

export async function GET(_, { params }) {
    console.log("Entro al GET ", params)
    const { slug } = params

    const docRef = doc(db, "productos", slug)
    console.log("DocRef ", docRef);
    const docSnapshot = await getDoc(docRef)
    console.log(docSnapshot)
    return NextResponse.json(docSnapshot.data())
}
