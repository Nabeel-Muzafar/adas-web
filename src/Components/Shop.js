import React from "react";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Outlet />
      <div>hi</div>
    </>
  );
};

export default Shop;
