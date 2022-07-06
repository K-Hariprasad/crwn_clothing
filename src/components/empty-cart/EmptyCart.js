import React from "react";
import { useNavigate } from "react-router-dom";
import EmptyCartIcon from "../emptyCart-icon/EmptyCartIcon";
import "./EmptyCart.scss";

function EmptyCart() {
    const navigate = useNavigate()
  return (
    <div className="empty-cart-container">
      <span>Your cart is empty!!!</span>
      <EmptyCartIcon />
      <button onClick={()=>navigate('/shop')}>Start Shopping</button>
    </div>
  );
}

export default EmptyCart;
