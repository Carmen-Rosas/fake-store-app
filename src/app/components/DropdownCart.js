import cropText from "../functions/cropText";

export default function DropdownCart({ updateCart, setUpdateCart }) {
    const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

    function handleRemove(index) {

        if (cartItems[index].quantity > 1) {
            cartItems[index].quantity -= 1;
        } else {
            cartItems.splice(index, 1);
        }
        
        localStorage.setItem("cart", JSON.stringify(cartItems));
        setUpdateCart(!updateCart);
    }

    return (
        <div>
            {cartItems.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div className="flex gap-10 items-center justify-evenly" key={index}>
                            <img className="w-12" src={item.image} alt={item.title} />
                            <p className="text-sm">{cropText(item.title, 20)}</p>
                            {(item.category === "women's clothing" || item.category === "men's clothing") && item.title !== "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" ? (
                                <p className="text-sm">{item.selectedSize}</p>
                            ) : (
                                <p className="text-sm">&nbsp;</p>
                            )}
                            <p className="text-sm">{item.quantity}</p>
                            <p className="text-sm">${ (item.price * item.quantity).toFixed(2) }</p>
                            <button className="text-sm" onClick={() => handleRemove(index)}>X</button>
                        </div>
                    ))}
                    <p className="text-xl mt-8">Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                </div>
            )}
        </div>
    );
}
