import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  useDisclosure,
  // VisuallyHidden,
  // useColorModeValue as mode,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
} from "@chakra-ui/react";
import * as React from "react";
import { Await, Link as ReachLink } from "react-router-dom";
import { useContext, useRef } from "react";
import { UserContext } from "../../Context/UserContext";

// import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { Links } from "./_data";
import { UserSignOut } from "../../utils/Firebase";
const MobileNavContext = (props) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        className="nav-content__mobile"
        {...props}
      >
        <Box flexBasis="6rem">
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box rel="home" mx="auto">
          {/* <Logo h="24px" iconColor="blue.400" /> */}
          <Image
            src="./Images/logo.svg"
            // sizes="sm"
            alt="Logo"
            height={"100%"}
            width="100%"
          ></Image>
        </Box>
        <Box
          visibility={{
            base: "hidden",
            sm: "visible",
          }}
        >
          <Button as="" color={"white"} bg="#153A5B">
            Get Started
          </Button>
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? "open" : "closed"}>
        {Links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href}>
              {link.label}
            </NavLink.Mobile>
          )
        )}
        <Button colorScheme="blue" w="full" size="lg" mt="5">
          Try for free
        </Button>
      </NavMenu>
    </>
  );
};

const DesktopNavContent = (props) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  // console.log(currentUser);
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <ReachLink to="/" rel="home">
        {/* <VisuallyHidden>Envelope</VisuallyHidden> */}
        <Image
          src="./Images/logo.svg"
          // sizes="sm"
          alt="Logo"
          height={"100%"}
          width="100%"
        ></Image>
      </ReachLink>

      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
      >
        {Links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <ReachLink to={link.href}>
                <NavLink.Desktop>{link.label}</NavLink.Desktop>
              </ReachLink>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="240px" justify="space-between">
        {currentUser ? (
          <ReachLink
            to="/Auth"
            color={"#153A5B"}
            // color={mode("blue.600", "blue.300")}
            // fontWeight="bold"
          >
            <Button bg={"#153A5B"} color="white" onClick={UserSignOut}>
              Sign out
            </Button>
          </ReachLink>
        ) : (
          <ReachLink
            to="/Auth"
            color={"#153A5B"}
            // color={mode("blue.600", "blue.300")}
            // fontWeight="bold"
          >
            <Button bg={"#153A5B"} color="white">
              Sign in
            </Button>
          </ReachLink>
        )}
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
