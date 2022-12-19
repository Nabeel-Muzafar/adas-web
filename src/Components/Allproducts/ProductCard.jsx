import {
  AspectRatio,
  border,
  Box,
  Button,
  color,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import * as React from "react";
import { Rating } from "./Rating";
import { FavouriteButton } from "./FavouriteButton";
import { PriceTag } from "./PriceTag";
import { CartContext } from "../../Context/Cartcontext";

export const ProductCard = (props) => {
  const { addTOCart } = useContext(CartContext);
  const { product, rootProps } = props;
  const { name, imageUrl, price, salePrice, rating } = product;

  const addCart = () => {
    addTOCart(product);
  };
  return (
    <Stack
      // border={"1px"}
      // borderRadius="15px"
      spacing={useBreakpointValue({
        base: "4",
        md: "5",
      })}
      {...rootProps}
      border="1px"
      borderColor={"gray.200"}
      borderRadius="13px"
    >
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            bg="#153A5B"
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={useBreakpointValue({
              base: "md",
              md: "xl",
            })}
          />
        </AspectRatio>
        <FavouriteButton
          position="absolute"
          top="4"
          right="4"
          aria-label={`Add ${name} to your favourites`}
        />
      </Box>
      <Stack>
        <Stack spacing="1">
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <PriceTag price={price} salePrice={salePrice} currency="USD" />
        </Stack>
        {/* <HStack>
          <Rating defaultValue={rating} size="sm" />
          <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
            12 Reviews
          </Text>
        </HStack> */}
      </Stack>
      <Stack align="center">
        <Button
          _hover={{
            color: "#153A5B",
            bg: "white",
            border: "1px  solid #153A5B",
          }}
          bg="#153A5B"
          color={"white"}
          width="full"
          onClick={addCart}
        >
          Add to cart
        </Button>
        <Link textDecoration="underline" fontWeight="medium" color={"#153A5B"}>
          Quick Preview
        </Link>
      </Stack>
    </Stack>
  );
};
