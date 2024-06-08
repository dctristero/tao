import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import {
  Heading,
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  chakra,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import Grid from "../components/grid";
import Footer from "../components/footer.js";

export default function Contact() {
  return (
    <div>
      {/* <Center> */}
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        // p={[".2vw"]}
        w="full"
        minHeight={{
          base: "calc(100vh - 50px)",
          sm: "calc(100vh - 60px)",
        }}
        justifyContent="center"
      >
        <VStack spacing="0px" w="full" maxW="800px">

        <Box
            bg={["primary.200"]}
            maxWidth={{ base: "90vw", md: "80vw" }}
            className="heading-box"
          >
            <chakra.h2
              fontSize={{ base: "20", lg: "24" }}
              fontWeight={600}
              color={"primary.300"}
              textAlign="center"
            >
              Contact Me
            </chakra.h2>
          </Box>
          <Box
            className="paragraph-box"
            maxWidth={{ base: "90vw", md: "80vw" }}
            bg={["primary.200"]}
          >
            <chakra.p
              fontWeight={300}
              fontSize={{ base: "16", lg: "18" }}
              color={["primary.300"]}
              className="translation"
              lineHeight= '200%'
              
            >
                            LinkedIn:&nbsp;
              <chakra.a
                href="https://www.linkedin.com/in/daniel-cohen-46aa31284/"
                target="_blank"
                rel="noreferrer"
                color={["primary.300"]}
                fontWeight="300"
                _hover={{ color: "teal.500" }}
                
              >
                Daniel Cohen
              </chakra.a>
              <br />
              Email:&nbsp;
              <chakra.a
                href="mailto:dctristero@gmail.com"
                target="_blank"
                rel="noreferrer"
                color={["primary.300"]}
                fontWeight="300"
                _hover={{ color: "teal.500" }}
                
              >
                dctristero@gmail.com
              </chakra.a>
              <br />

              Portfolio:&nbsp;
              <chakra.a
                href="https://dctristero.github.io/daniel-cohen-portfolio/"
                target="_blank"
                rel="noreferrer"
                color={["primary.300"]}
                fontWeight="300"
                _hover={{ color: "teal.500" }}
                
              >
                https://dctristero.github.io/daniel-cohen-portfolio/
              </chakra.a>
              <br />
              GitHub:&nbsp;
              <chakra.a
                href="https://github.com/dctristero"
                target="_blank"
                rel="noreferrer"
                color={["primary.300"]}
                fontWeight="300"
                _hover={{ color: "teal.500" }}
                
              >
                https://github.com/dctristero
              </chakra.a>
            </chakra.p>
          </Box>

        </VStack>
        <Footer />
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
