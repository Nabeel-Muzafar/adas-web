import { Box, useColorModeValue as mode } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box minH="640px">
      <Box
        as="header"
        bg={mode("white", "gray.800")}
        position="relative"
        zIndex="100000"
        border={"1px"}
        borderColor="gray.100"
      >
        <Box
          as="nav"
          aria-label="Main navigation"
          maxW="7xl"
          mx="auto"
          px={{
            base: "6",
            md: "8",
          }}
        >
          <NavContent.Mobile
            display={{
              base: "flex",
              lg: "none",
            }}
          />
          <NavContent.Desktop
            display={{
              base: "none",
              lg: "flex",
            }}
          />
        </Box>
      </Box>
      <Outlet />
    </Box>
  );
};
