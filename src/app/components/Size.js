import React, { useState } from 'react';

export default function Size({selectedSize, setSelectedSize}) {

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    return (
        <div className="flex items-baseline my-6">
            <div className="space-x-3 flex text-sm font-medium">
                <label>
                    <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value="xs"
                        checked={selectedSize === "xs"}
                        onChange={handleSizeChange}
                    />
                    <div className="cursor-pointer relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                        XS
                    </div>
                </label>
                <label>
                    <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value="s"
                        checked={selectedSize === "s"}
                        onChange={handleSizeChange}
                    />
                    <div className="cursor-pointer relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                        S
                    </div>
                </label>
                <label>
                    <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value="m"
                        checked={selectedSize === "m"}
                        onChange={handleSizeChange}
                    />
                    <div className="cursor-pointer relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                        M
                    </div>
                </label>
                <label>
                    <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value="l"
                        checked={selectedSize === "l"}
                        onChange={handleSizeChange}
                    />
                    <div className="cursor-pointer relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                        L
                    </div>
                </label>
                <label>
                    <input
                        className="sr-only peer"
                        name="size"
                        type="radio"
                        value="xl"
                        checked={selectedSize === "xl"}
                        onChange={handleSizeChange}
                    />
                    <div className="cursor-pointer relative w-10 h-10 flex items-center justify-center text-black peer-checked:bg-black peer-checked:text-white before:absolute before:z-[-1] before:top-0.5 before:left-0.5 before:w-full before:h-full peer-checked:before:bg-teal-400">
                        XL
                    </div>
                </label>
            </div>
        </div>
    );
}
