import { doc, getDoc, getDocs, addDoc, collection, updateDoc, query, where, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getDbCart = async (uid) => {
    const docRef = doc(db, 'cart', uid);
    const cartDoc = await getDoc(docRef);
    return cartDoc.data();
};

export const setSale = async (data) => {
    const collectionRef = collection(db, 'sales');
    await addDoc(collectionRef, data);
};

export const updateStock = async (cart) => {
    cart.forEach(async (element) => {
        let docRef = doc(db, 'productos', element.slug);
        element.stock = element.stock - element.amount;
        await updateDoc(docRef, element);
    });
}

export const getCategory = async (category) => {
    const productosRef = collection(db, "productos")
    const q = category === 'all' 
                ? productosRef
                : query(productosRef, where('type', '==', category))
    const querySnapshot = await getDocs(q)

    const docs = querySnapshot.docs.map(doc => doc.data());
    return docs;
}

export const AddProductToCar = async (uid, cart) => {
    const docRef = doc(db, "cart", uid);
    return updateDoc(docRef, { cart: cart });
};

export const getDetail = async (slug) => {
    const docRef = doc(db, "productos", slug)
    const docSnapshot = await getDoc(docRef)
    return docSnapshot.data();
};

export const DelProduct = async (slug, refresh) => {
    const documentoRef = doc(db, 'productos', slug);
    await deleteDoc(documentoRef);
    refresh()
}

export const LINKS = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Tienda",
        href: "/productos/all"
    },
    {
        label: "Quienes somos",
        href: "/nosotros"
    },
    {
        label: "Contacto",
        href: "/contacto"
    }
];

export const AboutUs = [
    {
        label: 'Nosotros',
        value: 'Bienvenidos a Capellari, tu destino confiable para soluciones electrodomésticas innovadoras y de alta calidad. Desde nuestro inicio, nos hemos comprometido a mejorar la vida cotidiana de nuestros clientes proporcionando productos que combinan rendimiento excepcional y diseño moderno.'
    },
    {
        label: 'Nuestra Misión',
        value: 'En Capellari, nuestra misión es simplificar tu vida a través de electrodomésticos que marcan la diferencia. Nos esforzamos por ser más que una tienda; somos tus socios en la búsqueda de la comodidad y la eficiencia en el hogar.'
    },
    {
        label: 'Compromiso con la Calidad',
        value: 'Trabajamos con las mejores marcas y fabricantes para ofrecerte productos que cumplen con los más altos estándares de calidad. Cada artículo en nuestro catálogo ha sido cuidadosamente seleccionado para brindarte durabilidad, rendimiento y estilo.'
    },
    {
        label: 'Experiencia del Cliente',
        value: 'En Capellari, valoramos cada experiencia de compra. Nuestro equipo dedicado está aquí para proporcionarte asesoramiento experto, responder a tus preguntas y garantizar que encuentres los electrodomésticos perfectos para tus necesidades.'
    }
];

export const LinkProducts = [
    { label: "All", value: "/productos/all" },
    { label: "TVs", value: "/productos/tvs" },
    { label: "Aires", value: "/productos/aires" },
    { label: "Hornos", value: "/productos/hornos" }
];

export const ADMIN_PATH = '/admin'