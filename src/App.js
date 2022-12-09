import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import Shop from "./Components/Shop";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="Shop" element={<Shop />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
