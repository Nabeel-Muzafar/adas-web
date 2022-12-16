import { createContext, useContext, useState } from "react";
import PRODUCTS from "../Components/Allproducts/_data.json";

export const productsContext = createContext({
  products: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setproduct] = useState(PRODUCTS);
  const value = { products };
  return (
    <productsContext.Provider value={value}>
      {children}
    </productsContext.Provider>
  );
};
