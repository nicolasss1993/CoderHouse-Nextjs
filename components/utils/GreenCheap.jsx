import React from "react"

const GreenCheap = ({text = ''}) => {
    return (
        <div class="bg-green-200 border-2 border-green-700 text-green-700 p-6 rounded-md text-center text-lg mt-8">
            {text}
        </div>
    )
};

export default GreenCheap;