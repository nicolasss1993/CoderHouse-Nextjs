'use client'
const Boton = ({ text, className = '', ...args }) => {

    return (
        <button 
            className={` text-white text-center ${className}`}
            {...args}
        >
            {text}
        </button>
    )
}

export default Boton