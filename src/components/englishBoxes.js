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

import { trMcDonald } from "../assets/data/data";

const EnglishBoxes = ({ verseNumber }) => {
  const selectedVerse = trMcDonald.find((verse) => verse.id === verseNumber);

  const verseText = selectedVerse.text;

  return (
    <chakra.p key={selectedVerse.id} px={4} m={2} color={["primary.300"]}>
      {verseText}
    </chakra.p>
  );
};

export default EnglishBoxes;
