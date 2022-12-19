import React from "react";
import { BsFillCartFill, BsCartX } from "react-icons/bs";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useDisclosure,
  Button,
  Text,
  Center,
  Heading,
} from "@chakra-ui/react";
import CartBox from "./CartBox/CartBox";

const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Button
        ref={btnRef}
        bg={"#153A5B"}
        color="white"
        _hover={{
          color: "#153A5B",
          bg: "white",
          border: "1px solid #153A5B",
        }}
        border="1px solid #153A5B"
        transition={"0.7s"}
        onClick={onOpen}
      >
        <BsFillCartFill />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        colorScheme={"whiteAlpha"}
        onClose={onClose}
        size="xl"
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bg={"#153A5B"} color="white">
            <Center>
              <Heading>Cart</Heading>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <CartBox />
          </DrawerBody>

          <DrawerFooter>
            <Button
              colorScheme={"purple"}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
