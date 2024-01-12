"use client"
import { auth, db, provider } from "@/utils/firebase"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { doc, getDoc, addDoc, setDoc, collection } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState({
        logged: false,
        emaiL: null,
        uid: null,
        rol: null,
        redirect: null
    });
    const [sucess, setSucess] = useState(false);

    const router = useRouter();

    const registerUser = async (values) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.password
            );

            const uid = userCredential.user.uid;
            const usersCollectionRef = doc(db, 'users', uid);
            const cartCollectionRef = doc(db, 'cart', uid);
            const user = {
                email: values.email,
                uid: uid,
                rol: values.redirect.toLowerCase().includes('admin') ? 'admin' : 'client',
                redirect: values.redirect
            };

            await setDoc(usersCollectionRef, user);
            await setDoc(cartCollectionRef, { cart: [], userId: uid });
            setSucess(true);

        } catch (error) {
            console.error('Error al registrar el usuario:', error);
        }
    };

    const loginUser = async (values) => {
        const sing = await signInWithEmailAndPassword(auth, values.email, values.password);
        setSucess(true);
        
    }

    const logout = async () => {
        await signOut(auth);
        setSucess(true);
    }

    const googleLogin = async () => {
        await signInWithPopup(auth, provider);
        setSucess(true);
    }

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                const docRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(docRef);
                const userData = userDoc.data();

                if (userData?.rol) {
                    setUserId({
                        logged: true,
                        email: user.email,
                        uid: user.uid,
                        rol: userData.rol,
                        redirect: userData.redirect
                    });
                    if (userId.redirect) {
                        router.push(userId.redirect);
                    } else {
                        router.push('/productos/all');
                    }

                } else {
                    //router.push("/unauthorized");
                    logout();
                };

            } else {
                setUserId({
                    logged: false,
                    emaiL: null,
                    uid: null
                });
            }
        })
    }, [sucess])

    return (
        <AuthContext.Provider value={{
            userId,
            registerUser,
            loginUser,
            logout,
            googleLogin
        }}>
            {children}
        </AuthContext.Provider>
    )
}
