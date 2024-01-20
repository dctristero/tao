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

import { trMcDonald } from "../assets/data/tr-mcdonald";

const EnglishBoxes = ({ verseNumber }) => {
  const selectedVerse = trMcDonald.find((verse) => verse.id === verseNumber);

  const verseText = selectedVerse.text;

  return (
    <chakra.p
      key={selectedVerse.id}
      px={4}
      m={2}
      color={["primary.300"]}
      className="translation"
    >
      {verseText.split("\n").map((line, index) => (
        // <React.Fragment>
        <p className="line" key={index}>
          {line}
          <br />
        </p>
          // <br />
        // </React.Fragment>
      ))}
    </chakra.p>
  );
};

export default EnglishBoxes;
