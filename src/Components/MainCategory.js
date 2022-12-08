import React from "react";
import { Flex } from "@chakra-ui/react";
import Category from "./Category";

const MainCategory = ({ category }) => {
  return (
    <>
      <Flex
        justify={"space-around"}
        wrap="wrap"
        width={"90%"}
        marginInline="auto"
        // border={"1px"}
      >
        {category.map((categoryList) => {
          return <Category categoryList={categoryList} />;
        })}
      </Flex>
    </>
  );
};

export default MainCategory;
