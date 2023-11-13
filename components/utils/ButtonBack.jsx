'use client'
import { useRouter } from "next/navigation"

const ButtonBack = ({ text, className = '', ...args }) => {
    const router = useRouter()
    return (
        <button 
            className={` text-white text-center ${className}`}
            onClick={() => router.back()}
            {...args}
        >
            {text}
        </button>
    )
}

export default ButtonBack