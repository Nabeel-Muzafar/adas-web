import { Box } from "@chakra-ui/react";
import * as React from "react";
import { useContext } from "react";
import { productsContext } from "../../Context/ProductsContext";
import { ProductCard } from "./ProductCard";

import { ProductGrid } from "./ProductGrid";

export const Allproducts = () => {
  const { products } = useContext(productsContext);
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Box>
  );
};
