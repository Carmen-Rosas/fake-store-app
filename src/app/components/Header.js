import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DropdownCart from "./DropdownCart";

export default function Header({ updateCart, setUpdateCart }) {
  const [background, setBackground] = useState(false);
  const isLoggedIn = localStorage.getItem("login");

  const cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={background ? "header-container-blue" : "header-container"}>
        <img className="logo" src="/img/brand.png"></img>
        <div className="header">
          <Link to="/" className="text-xl">Home</Link>
          <div className="dropdown">
            <button><Link to="/shop" className="text-xl">Shop</Link></button>
            <div className="dropdown-content shadow bg-white rounded-lg">
              <Link to="/women">Women's Clothing</Link>
              <Link to="/men">Men's Clothing</Link>
              <Link to="/jewelery">Jewelery</Link>
              <Link to="/electronics">Electronics</Link>
            </div>
          </div>
          <Link to="/about" className="text-xl">About</Link>
        </div>
        <div className="buttons">
          {isLoggedIn ?
            <Link to="/profile"><button className="text-lg">Profile</button></Link> :
            <Link to="/login"><button className="text-lg">Login</button></Link>}
          <p className="text-lg">|</p>
          <Link to="/cart">
            <button className="dropdown text-lg">
              Cart {localStorage.getItem("cart") ? "(" + cartItems.reduce((total, item) => total + item.quantity, 0) + ")" : "(0)"}
              <div className="dropdown-content-cart shadow bg-white rounded-lg">
                <DropdownCart updateCart={updateCart} setUpdateCart={setUpdateCart} />
              </div>
            </button>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}


