import React from "react";
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  chakra,
  Button,
} from "@chakra-ui/react";

import { chineseTexts } from "../assets/data/chinese";

const TanslateBtns = ({ verseNumber }) => {
  const selectedVerse = chineseTexts.find((verse) => verse.id === verseNumber);

  const verseText = selectedVerse.text;

  return (
    <chakra.p className={'chinese'} key={selectedVerse.id} fontWeight={200} px={4} m={2} color={["primary.300"]}>
      {verseText.split("").map((char, index) =>
        char === "，" || char === "。" || char === "；" || char === "！" || char === "："? (
          char
        ) : (
          <Button
            className={'chinese'}
            as={Link}
            fontWeight={500}
            key={index}
            to={`https://translate.google.com/?sl=zh-TW&tl=en&text=${encodeURIComponent(
              char
            )}&op=translate`}
            target="_blank"
            rel="noopener noreferrer"
            p={0}
            m={0}
            bg={["primary.200"]}
            color={["primary.300"]}
            _hover={{ bg: "primary.500" }}
          >
            {char}
          </Button>
        )
      )}
    </chakra.p>
  );
};

export default TanslateBtns;
