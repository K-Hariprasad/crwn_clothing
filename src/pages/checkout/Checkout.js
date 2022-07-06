import React, { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import { CartContext } from "../../context/cartContext";
import EmptyCart from "../../components/empty-cart/EmptyCart";
import "./Checkout.scss";

function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <>
      {cartItems.length ? (
        <div className="checkout-container">
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>Quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
          <div className="total">TOTAL: ${cartTotal}</div>
        </div>
      ) : (
        <EmptyCart/>
      )}
    </>
  );
}

export default Checkout;
