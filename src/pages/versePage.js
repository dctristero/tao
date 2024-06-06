import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  chakra,
  Button,
  VStack,
  Center,
} from "@chakra-ui/react";
import Grid from "../components/grid";
import TranslateBtns from "../components/translate-btns";
import EnglishBoxes from "../components/english-boxes";
import Footer from "../components/footer.js";

const VersePage = () => {
  const { verseNumber } = useParams();
  const parsedVerseNumber = parseInt(verseNumber, 10) || 1;

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
        <VStack spacing="0px" alignItems="center" w="full" maxW="900px">
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
              Verse {parsedVerseNumber}
            </chakra.h2>
          </Box>

          <EnglishBoxes verseNumber={parsedVerseNumber} />

          <Box
            w={{ base: "90%", md: "70%", lg: "60%" }}
            my={{ base: "4", md: "9" }}
            py={0}
            px={{ base: "0", md: "1" }}
            bg={["primary.200"]}
            rounded="md"
            justifyContent="center"
            alignItems="center"
          >
            <TranslateBtns verseNumber={parsedVerseNumber} />
          </Box>
          <Grid />
        </VStack>
        <Footer />
      </Flex>
      {/* </Center> */}
    </div>
  );
};

export default VersePage;
