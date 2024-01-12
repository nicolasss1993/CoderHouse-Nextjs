"use client"
import { useRouter } from "next/navigation"
import { useAuthContext } from "@/utils/context/authContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "@/utils/context/cartContext";

const LogoutButton = () => {
    const router = useRouter();
    const { logout } = useAuthContext()
    const { clearCart } = useCart();

    return (
        <button
            onClick={() => {
                logout();
                router.push("/");
                clearCart();
            }}
            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 flex items-center"
        >
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
            Logout
        </button>
    );
};

export default LogoutButton;