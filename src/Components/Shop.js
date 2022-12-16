import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

import { Outlet } from "react-router-dom";
import { Allproducts } from "./Allproducts/Allproducts";

const Shop = () => {
  return (
    <>
      <Center my={"1rem"}>
        <Heading color={"#153A5B"}>All Products</Heading>
      </Center>
      <Box>
        <Allproducts />
        <Allproducts />
      </Box>
      <Outlet />
    </>
  );
};

export default Shop;
