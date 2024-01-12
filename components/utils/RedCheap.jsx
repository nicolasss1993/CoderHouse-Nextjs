import React from "react"

const RedCheap = ({text = ''}) => {
    return (
        <div class="bg-red-300 border-2 border-red-700 text-red-700 p-6 rounded-md text-center text-lg mt-8">
            {text}
        </div>
    )
};

export default RedCheap;