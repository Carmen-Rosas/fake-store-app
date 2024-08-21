
export default function QuantityCart({item, index, updateCart, setUpdateCart}) {

    const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    const handleDecrement = (index) => {
        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity -= 1;
        } else {
            cartItems.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setUpdateCart(!updateCart);
    };

    const handleIncrement = (index) => {
        cartItems[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setUpdateCart(!updateCart);
    };

    return (
        <div className="flex items-center border-gray-100 pb-6">
            <button className="rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-teal-400 hover:text-blue-50" onClick={() => handleDecrement(index)} > - </button>
            <input className="h-8 w-8 border bg-white text-center outline-none" type="number" value={item.quantity} />
            <button className="rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-teal-400 hover:text-blue-50" onClick={() => handleIncrement(index)}> + </button>
        </div>
    )
}