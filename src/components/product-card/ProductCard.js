import React, {useContext} from "react";
import { CartContext } from "../../context/cartContext";
import { DarkButton } from "../../styled-components/StyledButton";
import "./ProductCard.scss";

function ProductCard({product}) {
  const { name, price, imageUrl } = product;
  const {addItemToCart} = useContext(CartContext)
  const addToCart = () => {
    addItemToCart(product)
  }
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="product-card-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <DarkButton onClick={addToCart}>Add to cart</DarkButton>
    </div>
  );
}

export default ProductCard;
