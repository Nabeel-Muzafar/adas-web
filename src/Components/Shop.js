import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Box my={"1px"}> hi</Box>
      <Outlet />
    </>
  );
};

export default Shop;
