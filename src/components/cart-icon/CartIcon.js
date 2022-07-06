import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cartContext";
import "./CartIcon.scss";

const CartIcon = () => {
  const { showCart, setShowcart, cartCount } = useContext(CartContext);
  const toggleCart = () => {
    setShowcart(!showCart);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
