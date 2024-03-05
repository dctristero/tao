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
  Center
} from "@chakra-ui/react";
import Grid from "../components/grid"
import TranslateBtns from "../components/translate-btns"
import EnglishBoxes from "../components/english-boxes"

const VersePage = () => {


  const { verseNumber } = useParams();
  const parsedVerseNumber = parseInt(verseNumber, 10) || 1;

  return (
    <div>
      <Center>
        <Flex
          bg={["primary.100"]}
          color={["primary.300"]}
          // p={[".2vw"]}
          w="full"
          h="full"
        >
          <VStack spacing='0px' alignItems="center" w="full" maxW="800px"> {/* Set width and max-width */}
          
          <Box
              mt={4}
              py={2}
              px={4}
              bg={["primary.200"]}
              rounded="md"
              justifyContent="center"
              alignItems="center"
            >
            <h1>Verse {parsedVerseNumber}</h1>
            </Box>

            <EnglishBoxes verseNumber={parsedVerseNumber} />

            <Box
              w="md"
              mt={4}
              py={4}
              px={6}
              bg={["primary.200"]}
              rounded="md"
              justifyContent="center"
              alignItems="center"
            >
              <TranslateBtns verseNumber={parsedVerseNumber} />
            </Box>
            <Grid />
          </VStack>
        </Flex>
      </Center>
    </div>
  );
};

export default VersePage;
