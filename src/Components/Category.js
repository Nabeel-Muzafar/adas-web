import React from "react";
import { Button, Image } from "@chakra-ui/react";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
const Category = ({ categoryList }) => {
  const { id, name, sub_name, image } = categoryList;
  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        w={"40%"}
        p="2rem"
        bg={"#EFF5F9"}
        my={"1rem"}
        // height="300px"
        // mx={"2rem"}
        // my="1rem"
        key={id}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={image}
          alt="Instrument"
        />

        <Stack>
          <CardBody>
            <Heading size="lg" letterSpacing={"1px"} color={"#153A5B"}>
              {name}
            </Heading>

            <Text
              py="2"
              letterSpacing={"1px"}
              fontSize={"lg"}
              color={"#6D736E"}
            >
              {sub_name}
            </Text>
          </CardBody>

          <CardFooter justify="right">
            <Button
              variant="Link"
              textDecoration={"underline"}
              colorScheme="blue"
            >
              Shop Now
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </>
  );
};

export default Category;
