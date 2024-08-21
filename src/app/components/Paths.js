import About from "../pages/About";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Electronics from "../pages/Electronics";
import Jewelery from "../pages/Jewelery";
import Header from "./Header";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Checkout from "../pages/Checkout";
import SuccessfulPayment from "../pages/SuccessfulPayment";
import ExpressCheckout from "../pages/ExpressCheckout";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from 'react';




export default function Paths() {

  const [updateCart, setUpdateCart] = useState(false);
  const [product, setProduct] = useState({});

    return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header updateCart={updateCart} setUpdateCart={setUpdateCart} />}>
              <Route path="/" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="women" element={<Women />} />
              <Route path="men" element={<Men />} />
              <Route path="jewelery" element={<Jewelery />} />
              <Route path="electronics" element={<Electronics />} />
              <Route path="about" element={<About />} />
              <Route path="product/:id" element={<Product updateCart={updateCart} setUpdateCart={setUpdateCart} setProduct={setProduct} />} />
              <Route path="cart" element={<Cart updateCart={updateCart} setUpdateCart={setUpdateCart} />} />
              <Route path="login" element={<Login />} />
              <Route path="profile" element={<Profile />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="success" element={<SuccessfulPayment />} />
              <Route path="express" element={<ExpressCheckout product={product} />} />
            </Route>
          </Routes>
      </BrowserRouter>
    )
  }