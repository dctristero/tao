import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid, Image, Icon } from "@chakra-ui/react";


export default function Test1(){

  return (
   <div>
    <Flex
      bg={["primary.100"]}
      _dark={{ bg: "#3e3e3e" }}
      p={7}
      w="full"
      justifyContent="center"
      alignItems="center"
      //pos="absolute"
    >
      <Box
        w="full"
        h="full"
        bg={["primary.100"]}
        _dark={{ bg: "gray.800" }}
        px={8}
        py={0}
        mx="auto"
      >
         <Box
          textAlign={{ lg: "center" }}
          bg={["primary.200"]}
          roundedBottom="lg"
          roundedTop="lg"
          pt={0}
          pb={2}
          mt={2}
          mb={8}
          maxW="lg"
          mx="auto"
          px={{ base: 4, lg: 8 }}
        >
          <chakra.h1
            display="block"
            color={["primary.400"]}
            _dark={{ color: "white" }}
            fontWeight="bold"
            fontSize="6xl"
            mt={0}
          >
            TEST 3
          </chakra.h1>
        </Box>

      </Box>
    </Flex>
    </div>
  );
};
