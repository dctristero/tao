import React from "react";
import "../App.css";
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
  Stack,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import Grid from "../components/grid";
import Footer from "../components/footer.js";

export default function Home() {
  return (
    <div>
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        w="full"
        minHeight={{
          base: "calc(100vh - 50px)",
          sm: "calc(100vh - 60px)",
        }}
        justifyContent="center"
        alignItems={{ base: "start", xl: "center" }}
      >
        <Flex
          direction={{ base: "column", xl: "row" }}
          alignItems="center"
          w="full"
          justifyContent="center"
          maxW="1200px"
          // bg={["primary.300"]}
        >
          <Box
            maxWidth={{ base: "90vw", md: "80vw", xl: "50vw" }}
            minWidth={{ base: "90vw", md: "80vw", xl: "50vw" }}
            display="flex"
            justifyContent={{ base: "center", xl: "right" }}
            alignItems="center"
            pr={{ base: "0", xl: "3vw" }}
            mb={{ base: "2.5vw", lg: "0", xl: "3vw" }}
            // bg={["primary.300"]}
          >
            <Box
              className="homebox"
              w={{ base: "90vw", md: "80vw",  xl: "37.8vw" }}
              py={4}
              px={3}
              // mr="2vw"
              bg={["primary.200"]}
              rounded="md"
              display="flex"
              mb="1vw"
              mt={{ base: "3vw", lg:"2vw", xl: "1vw" }}
            >
              <chakra.p
                fontSize={{ base: "16", lg: "20", xl: "24" }}
                fontWeight={300}
                px={1}
                m={2}
                color={["primary.300"]}
                className="translation"
              >
                This is a resource for learning about the <em>Tao Te Ching</em>. Click
                any number in the grid below to see four public domain
                translations of that verse, plus the original Chinese text.
                Click any character of the Chinese text to open a new tab with
                Google Translate results showing various possible English
                translations of that character. Dive in now, or visit{" "}
                <chakra.span color="primary.300" _hover={{ color: "teal.500" }}>
                  <Link to="/tao/about/">the about page</Link>
                </chakra.span>{" "}
                to learn more.
              </chakra.p>
            </Box>
          </Box>

          <Box
            maxWidth={{ base: "90vw", md: "80vw", lg: "60vw", xl: "50vw" }}
            minWidth={{ base: "90vw", md: "80vw", lg: "60vw", xl: "50vw" }}
            // mt={4}
            pl={{ base: "0", xl: "3vw" }}
            display="flex"
            justifyContent={{ base: "center", xl: "left" }}
            alignItems="center"
          >
            <Grid />
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </div>
  );
}
