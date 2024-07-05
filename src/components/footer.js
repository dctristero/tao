import React from "react";
import { chakra, Flex, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <chakra.footer
      w="full"
      bg={["primary.200"]}
      _dark={{ bg: "#3e3e3e" }}
      py={0}
      alignItems="center"
      justifyContent="center"
      position="absolute"
      bottom={0}
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="right"
        px={4}
        py={0}
        bg={["primary.200"]}
        _dark={{
          bg: "gray.800",
        }}
      >
        <HStack
          spacing={3}
          mr={0}
          display={{ base: "none", md: "inline-flex" }}
        >
          <Link to="/">
            <Button
              color={["primary.300"]}
              variant="ghost"
              _hover={{ bg: "primary.500" }}
              _active={{ bg: "primary.500" }}
            >
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button
              color={["primary.300"]}
              variant="ghost"
              _hover={{ bg: "primary.500" }}
              _active={{ bg: "primary.500" }}
            >
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              color={["primary.300"]}
              variant="ghost"
              _hover={{ bg: "primary.500" }}
              _active={{ bg: "primary.500" }}
            >
              Contact
            </Button>
          </Link>
        </HStack>
      </Flex>
    </chakra.footer>
  );
};
export default Footer;
