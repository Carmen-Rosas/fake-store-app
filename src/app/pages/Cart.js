import { Link } from "react-router-dom";
import cropText from "../functions/cropText";
import QuantityCart from "../components/QuantityCart";

export default function Cart({updateCart, setUpdateCart}) {
    const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];


    return (
        <div>
            <h1 className="font-fantasy text-4xl mt-8 mb-4 ml-4">Shopping cart</h1>
            {cartItems.length === 0 ? (
                <p className="ml-4">Cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => (
                        <div className="flex flex-col sm:flex-col md:flex-row gap-2 sm:gap-2 md:gap-10 items-center justify-evenly rounded-xl bg-white shadow-md mb-8 mt-8 ml-8 mr-8 pl-0 sm:pl-0 md:pl-8 pt-8 pb-8" key={index}>
                            <img className="w-48 rounded-xl" src={item.image} alt={item.title} />
                            <p className="text-xl">{cropText(item.title, 20)}</p>
                            {(item.category === "women's clothing" || item.category === "men's clothing") && item.title !== "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" ? (
                                <p className="text-base sm:text-base md:text-xl">{item.selectedSize}</p>
                            ) : (
                                <p className="text-base sm:text-base md:text-xl">&nbsp;</p>
                            )}
                            <QuantityCart item={item} index={index} updateCart={updateCart} setUpdateCart={setUpdateCart} />
                            <p className="text-base sm:text-base md:text-xl">${ (item.price * item.quantity).toFixed(2) }</p>
                        </div>
                    ))}
                    <div className="flex flex-col items-center">
                        <p className="text-xl mt-8 mb-4">Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
                        <div className="flex gap-8 mb-8">
                            <Link to="/shop"><button className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900">Continue Shopping</button></Link>
                            <Link to="/checkout"><button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black">Checkout</button></Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}