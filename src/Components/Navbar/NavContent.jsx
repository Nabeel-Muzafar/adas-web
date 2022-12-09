import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Image,
  useDisclosure,
  // VisuallyHidden,
  // useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Link as ReachLink } from "@reach/router";

// import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { Submenu } from "./Submenu";
import { ToggleButton } from "./ToggleButton";
import { links } from "./_data";
const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();
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
        <Box as="a" rel="home" mx="auto">
          {/* <Logo h="24px" iconColor="blue.400" /> */}
          <Image
            src="./Images/logo.svg"
            // sizes="sm"
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
        {links.map((link, idx) =>
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
  return (
    <Flex
      className="nav-content__desktop"
      align="center"
      justify="space-between"
      {...props}
    >
      <Link as={ReachLink} to="/" rel="home">
        {/* <VisuallyHidden>Envelope</VisuallyHidden> */}
        <Image
          src="./Images/logo.svg"
          // sizes="sm"
          height={"100%"}
          width="100%"
        ></Image>
      </Link>
      <HStack
        as="ul"
        id="nav__primary-menu"
        aria-label="Main Menu"
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop link={link} />
            ) : (
              <NavLink.Desktop href={link.href}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="240px" justify="space-between">
        <Box
          as={ReachLink}
          to="/shop"
          color={"#153A5B"}
          // color={mode("blue.600", "blue.300")}
          // fontWeight="bold"
        >
          Sign In
        </Box>
        <Button as="a" href="#" bg={"#153A5B"} color="white" fontWeight="bold">
          Sign up for free
        </Button>
      </HStack>
    </Flex>
  );
};

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};
