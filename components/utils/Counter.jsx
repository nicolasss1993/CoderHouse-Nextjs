"use client"
import Button from "@/components/utils/Button"

const Counter = ({counter, setCounter, max}) => {
    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)

    return (
        <div className="flex items-center gap-3">
            <Button onClick={decrease} className="rounded-lg py-2 px-4 bg-green-500 active:bg-green-700" text="-"/>
            <p>{counter}</p>
            <Button onClick={increase} className="rounded-lg py-2 px-4 bg-green-500 active:bg-green-700" text="+" />
        </div>
    )
}

export default Counter
