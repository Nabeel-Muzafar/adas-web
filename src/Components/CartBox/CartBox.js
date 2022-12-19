import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import * as React from "react";
import { CartItem } from "./CartItem";
import { CartOrderSummary } from "./CartOrderSummary";
// import { cartData } from "./_data";
import { CartContext } from "../../Context/Cartcontext";

const CartBox = () => {
  const { cartItems } = useContext(CartContext);

  const [countCartitems, setcountCartitems] = useState(cartItems.length);
  return (
    <Box
      // border={"1px"}
      maxW={{
        base: "3xl",
        lg: "5xl",
      }}
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
      <Stack
        // border={"1px"}
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart ({countCartitems})
          </Heading>

          <Stack spacing="6">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>

        {/* <CartOrderSummary /> */}
        {/* <Flex direction="column" align="center" flex="1">
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("blue.500", "blue.200")}>Continue shopping</Link>
          </HStack>
        </Flex> */}
      </Stack>
    </Box>
  );
};

export default CartBox;
