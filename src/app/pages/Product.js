import { useParams } from 'react-router-dom';
import { fetchProduct } from "../functions/fetchProduct";
import { useState } from "react";
import { Link } from 'react-router-dom';
import Size from '../components/Size';
import Quantity from '../components/Quantity';

export default function Product( {updateCart, setUpdateCart, setProduct } ) {
    const { id } = useParams();

    const title = fetchProduct(id, "title");
    const price = fetchProduct(id, "price");
    const image = fetchProduct(id, "image");
    const description = fetchProduct(id, "description");
    const category = fetchProduct(id, "category");

    const [selectedSize, setSelectedSize] = useState("xs");
    const [quantity, setQuantity] = useState(1);

    function handleClick() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItemIndex = cart.findIndex(item =>
            item.image === image &&
            item.title === title &&
            item.selectedSize === selectedSize &&
            item.price === price
        );
    
        if (existingItemIndex !== -1) {
            cart[existingItemIndex].quantity += quantity;
        } else {
            cart.push({image, title, quantity, selectedSize, price, category});
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        setUpdateCart(!updateCart);
    }

    function handleBuyNow() {
        setProduct({title, quantity, price});
    }

    return (
        <div className="font-mono">
            <div className="product-black">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div className="flex">
                    <h2>${price}</h2>
                    <h2 className="pl-3 uppercase text-teal-400">In stock</h2>
                </div>
            </div>
            <div className="product flex gap-80">
                <img src={image} alt="" className="single-image w-80" />
                <div className="product-desc flex-col pr-14">
                    <p className={category === "electronics" || category === "jewelery" || id === "1" ? "mb-14 mt-14" : "mt-14"}>{description}</p>
                    <div>{category === "men's clothing" && id !== "1" && <Size selectedSize={selectedSize} setSelectedSize={setSelectedSize} /> }</div>
                    <div>{category === "women's clothing" && <Size selectedSize={selectedSize} setSelectedSize={setSelectedSize} />}</div>
                    <Quantity quantity={quantity} setQuantity={setQuantity} />
                    <div className="flex space-x-2 mb-4 text-sm font-medium">
                        <div className="flex space-x-4">
                            <Link to="/express">
                                <button className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="button" onClick={handleBuyNow} >
                                Buy now
                                </button>
                            </Link>
                            <button className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button" onClick={handleClick}>
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <p className="text-xs leading-6 text-slate-500">
                        Free shipping on all continental US orders.
                    </p>
                </div>
            </div>
        </div>
    );
}
