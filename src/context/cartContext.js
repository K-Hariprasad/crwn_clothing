import { createContext, useState, useEffect } from "react";

const addToCart = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find((e) => e.id === itemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((t) =>
      t.id === itemToAdd.id ? { ...t, quantity: t.quantity + 1 } : { ...t }
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

const removeFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find((e) => e.id === itemToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearFromCart = (cartItems, itemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};

export const CartContext = createContext({
  showCart: false,
  setShowcart: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [showCart, setShowcart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const addItemToCart = (product) => {
    setCartItems(addToCart(cartItems, product));
  };
  const removeItemFromCart = (product) => {
    setCartItems(removeFromCart(cartItems, product));
  };
  const clearItemFromCart = (product) => {
    setCartItems(clearFromCart(cartItems, product));
  };
  useEffect(() => {
    const newCartCount = cartItems.reduce((a, c) => {
      a += c.quantity;
      return a;
    }, 0);
    setCartCount(newCartCount);
    const newCartTotal = cartItems.reduce((a, c) => {
      a += c.quantity * c.price;
      return a;
    }, 0);
    setCartTotal(newCartTotal)
  }, [cartItems]);
  const value = {
    showCart,
    setShowcart,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
