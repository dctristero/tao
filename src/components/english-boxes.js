import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  chakra,
  Button,
  Center,
} from "@chakra-ui/react";
import { trMcDonald } from "../assets/data/tr-mcdonald";
import { trMears } from "../assets/data/tr-mears";
import { trCTK } from "../assets/data/tr-ctk";
import { trSuzukiCarus } from "../assets/data/tr-suzuki-carus";

const EnglishBoxes = ({ verseNumber }) => {
  const boxes = [
    {
      id: "trCTK",
      author: "Ch'u Ta-Kao",
      data: trCTK,
    },
    {
      id: "trSuzukiCarus",
      author: "D.T. Suzuki & Paul Carus",
      data: trSuzukiCarus,
    },
    {
      id: "trMears",
      author: "Isabella Mears",
      data: trMears,
    },
    {
      id: "trMcDonald",
      author: "John McDonald",
      data: trMcDonald,
    },
  ];

  return (
    <div>
      {boxes.map((box) => (
        <Box
          key={box.id}
          className="trbox"
          maxW={{ base: "90vw", md: "80vw" }}
          mt={{ base: "4", md: "9" }}
          pt={{ base: "3", lg: "5" }}
          pb={4}
          pl={{ base: "6", lg: "12" }}
          pr={{ base: "3", lg: "8" }}
          bg={["primary.200"]}
          rounded="md"
          display="flex"
          flexDirection="column"
          mx="auto"
        >
          <chakra.p
            textIndent={{ base: "-.7em", lg: "-1em" }}
            fontSize={{ base: "16", lg: "18" }}
            fontWeight={300}
            key={box.data.find((verse) => verse.id === verseNumber).id}
            // px={4}
            m={2}
            color={["primary.300"]}
            className="translation"
            // px={6}
          >
            {box.data
              .find((verse) => verse.id === verseNumber)
              .text.split("\n")
              .map((line, index) => (
                <p 
                className="line" 
                key={index}
                // pl={6}
                >
                  {index === 0 && box.id === "trSuzukiCarus" ? (
                    <em>{line}</em>
                  ) : (
                    line
                  )}
                  <br />
                </p>
              ))}
          </chakra.p>
          <Box mt="auto" color={["primary.300"]} alignSelf="flex-end">
            <chakra.h3 fontSize={{ base: "16", lg: "18" }} fontWeight={300}>
              ({box.author})
            </chakra.h3>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default EnglishBoxes;
