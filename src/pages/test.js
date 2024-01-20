import React from "react";
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  chakra,
  Button,
  VStack
} from "@chakra-ui/react";
import Grid from "../components/grid"
import TranslateBtns from "../components/translate-btns"

export default function Test() {
  
  return (
    <div>
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        p={[".2vw"]}
        w="full"
        h="full"
      >
        <VStack spacing='0px'>
        <Box
          w="md"
          // mx="auto"
          mt={4}
          py={4}
          px={6}
          bg={["primary.200"]}
          rounded="md"
          justifyContent="center"
          alignItems="center"
        >
          <TranslateBtns verseNumber={1}/>
        </Box>
        <Grid/>
        </VStack>
      </Flex>
    </div>
  );
}


// make each set of characters an array
// link with template literal of variable in place of chinese character
// make value of clicked character into variable?
// link open in new tab


// "https://translate.google.com/?sl=zh-TW&tl=en&text=經&op=translate"