"use client"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { useAuthContext } from "@/utils/context/authContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCart } from "@/utils/context/cartContext"
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Boton from "./Button";

const LoginButton = () => {
    const { loginUser, googleLogin, registerUser, setCart } = useAuthContext();
    const { setDbCart } = useCart();
    const [openPopUp, setOpenPopUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
    };

    return (
        <>
            <button
                onClick={() => setOpenPopUp(!openPopUp)}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 flex items-center"
            >
                <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
                Login
            </button>
            {openPopUp && (
                <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
                    <form onSubmit={handleSubmit} className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
                        <h2>Login</h2>
                        <input
                            type="email"
                            onChange={handleChangeEmail}
                            value={email}
                            placeholder="Tu email"
                            className="p-2 rounded w-full border border-blue-100 block my-4"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={handleChangePassword}
                            placeholder="password"
                            className="p-2 rounded w-full border border-blue-100 block my-4"
                        />
                        <Boton onClick={() => loginUser({ email, password })} className="m-1 p-1 bg-blue-400 rounded" type="button" text="Ingresar" />
                        <Boton onClick={googleLogin} className="m-1 p-1 bg-blue-400 rounded" text="Ingresar con google" />
                        <Boton onClick={() => registerUser({ email, password, redirect: "/productos/all" })} className="m-1 p-1 bg-blue-400 rounded" text="Registrarme" />
                        <Boton onClick={() => setOpenPopUp(!openPopUp)} className="m-1 p-1 bg-red-400 rounded" type="button" text="Cerrar" />
                    </form>
                </div>
            )}
        </>
    );
};

export default LoginButton;