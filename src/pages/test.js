import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import {
  Text,
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  chakra,
  Button,
  VStack,
  Center
} from "@chakra-ui/react";
import Grid from "../components/grid"
import Footer from "../components/footer.js";

export default function Test() {
  
  return (
    <div>
      {/* <Center> */}
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        p={[".2vw"]}
        w="full"
        h="full"
      >
        <VStack spacing='0px' alignItems="center" w="full" maxW="800px">

        <Box
          className="homebox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          mt={4}
          py={4}
          px={3}
          bg={["primary.200"]}
          rounded="md"
          display="flex"
          flexDirection="column"
          mx="auto"
        >
          <chakra.p
            fontWeight={300}
            px={1}
            m={2}
            color={["primary.300"]}
            className="translation"
          >
          This is a resource for learning about the Tao Te Ching. 
          Click any number in the grid below to see four public domain translations of that verse, 
          plus the original Chinese text. 
          Click any character of the Chinese text to open a new tab with Google Translate results 
          showing various possible English translations of that character. 
          Dive in now, or visit  <chakra.span fontWeight={500} color="primary.300" _hover={{color: "teal.500"}}>
    <Link to="/tao/about/">the about page</Link>
  </chakra.span> to learn more.
        {/* &nbsp;  */}
          </chakra.p>
        </Box>
        
        <Grid/>
        </VStack>
        <Footer/>
      </Flex>
      {/* </Center> */}
    </div>
  );
}


// make each set of characters an array
// link with template literal of variable in place of chinese character
// make value of clicked character into variable?
// link open in new tab


// "https://translate.google.com/?sl=zh-TW&tl=en&text=經&op=translate"