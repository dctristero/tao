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
        p={[".2vw"]}
        w="full"
        h="full"
      >
        <VStack spacing="0px" alignItems="center" w="full" maxW="800px">
          <Box
            className="aboutbox"
            w={{ base: "90%", md: "70%", lg: "60%" }}
            bg={["primary.200"]}
            py={5}
          >
            <Center>
              <chakra.h2 fontSize={"xl"} fontWeight={600} color={"primary.300"} pb={0} mb={2}> 
                Contact Me
              </chakra.h2>
            </Center>
            <chakra.p
              pt={0}
              mt={0}
              pl={5}
              fontWeight={500}
              color={["primary.300"]}
              className="translation"
            >
                            LinkedIn:&nbsp;
              <chakra.a
                href="https://www.linkedin.com/in/daniel-cohen-46aa31284/"
                target="_blank"
                rel="noreferrer"
                color={["primary.300"]}
                fontWeight="300"
                _hover={{ textDecoration:"underline" }}
                
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
                _hover={{ textDecoration:"underline" }}
                
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
                _hover={{ textDecoration:"underline" }}
                
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
                _hover={{ textDecoration:"underline" }}
                
              >
                https://github.com/dctristero
              </chakra.a>
            </chakra.p>
          </Box>

          <Grid />
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
