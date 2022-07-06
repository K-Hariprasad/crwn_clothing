import React, { useContext } from "react";
import "./CartModal.scss";
import { CartContext } from "../../context/cartContext";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";
import { CheckoutButton } from "../../styled-components/StyledButton";

function CartModal() {
  const { cartItems, setShowcart, showCart } = useContext(CartContext);
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    setShowcart(!showCart);
    navigate("/checkout");
  };
  return (
    <div className="cart-modal-container">
      <div className="cart-modal-body">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} />)
        ) : (
          <p>Your cart is empty!</p>
        )}
      </div>
      <CheckoutButton onClick={navigateToCheckout}>
        GO TO CHECKOUT
      </CheckoutButton>
    </div>
  );
}

export default CartModal;
