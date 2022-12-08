import React from "react";

import MainCategory from "./Components/MainCategory";

const App = () => {
  const category = [
    {
      id: 1,
      name: "LIPOSUCTION CANNULA",
      sub_name: "Top Instrument",
      image: "./Images/C_pic_1.png",
    },
    {
      id: 2,
      name: " SURGERY TOOLS",
      sub_name: "Best Instrument",
      image: "./Images/C_pic_2.png",
    },
    {
      id: 3,
      name: "RHINOPLASTIC INSTRUMENT",
      sub_name: "Good One",
      image: "./Images/C_pic_2.png",
    },
    {
      id: 3,
      name: "RHINOPLASTIC INSTRUMENT",
      sub_name: "Your Choice.",
      image: "./Images/C_pic_1.png",
    },
  ];

  return (
    <>
      <MainCategory category={category} />
    </>
  );
};

export default App;
