import { useState } from "react";

export default function Quantity({quantity, setQuantity}) {
    
    function handleIncrementQuantity() {
        setQuantity(quantity + 1);
    }

    function handleDecrementQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="flex items-center border-gray-100 pb-6">
            <button className="rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-teal-400 hover:text-blue-50" onClick={handleDecrementQuantity}> - </button>
            <input className="h-8 w-8 border bg-white text-center outline-none" type="number" value={quantity} min="1" />
            <button className="rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-teal-400 hover:text-blue-50" onClick={handleIncrementQuantity}> + </button>
        </div>
    )
}