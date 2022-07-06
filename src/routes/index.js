import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SignUp from "../pages/signup/SignUp";
import SignIn from "../pages/signin/SignIn";
import Shop from "../pages/shop/Shop";
import Checkout from "../pages/checkout/Checkout";
import Products from "../pages/products/Products";

const NotFound = () => {
  return <h1>Requested page not available.....!</h1>;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:category" element={<Products />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
