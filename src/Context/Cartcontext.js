import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  cartItems: [],
  addTOCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setcartItems] = useState([]);
  const addTOCart = (productToAdd) => {
    setcartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { cartItems, addTOCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
