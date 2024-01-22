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
  const [selectedBox, setSelectedBox] = useState(null);

  const boxes = [
    {
      id: "trCTK",
      title: "Ch'u Ta-Kao",
      data: trCTK,
    },
    {
      id: "trSuzukiCarus",
      title: "D.T. Suzuki & Paul Carus",
      data: trSuzukiCarus,
    },
    {
      id: "trMears",
      title: "Isabella Mears",
      data: trMears,
    },
    {
      id: "trMcDonald",
      title: "John McDonald",
      data: trMcDonald,
    },
  ];

  const handleClick = (boxId) => {
    setSelectedBox(boxId);
  };

  const sortedBoxes = [...boxes].sort(
    (a, b) => (selectedBox === a.id ? -1 : 1) - (selectedBox === b.id ? -1 : 1)
  );

  return (
    <div>
      <Flex direction="row">
        {boxes.map((box) => (
          <Button
            key={box.id}
            onClick={() => handleClick(box.id)}
            colorScheme={selectedBox === box.id ? "primary" : "gray"}
            m={2}
          >
            {box.title}
          </Button>
        ))}
      </Flex>

      {sortedBoxes.map((box) => (
        <Box
          key={box.id}
          className="trbox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          mt={4}
          py={4}
          px={6}
          bg={["primary.200"]}
          rounded="md"
          display="flex"
          flexDirection="column"
          mx="auto"
          style={{ order: selectedBox === box.id ? -1 : 0 }}
        >
          <chakra.p
            key={box.data.find((verse) => verse.id === verseNumber).id}
            px={4}
            m={2}
            color={["primary.300"]}
            className="translation"
          >
            {box.data.find((verse) => verse.id === verseNumber).text.split("\n").map((line, index) => (
              <p className="line" key={index}>
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
            <chakra.h2>({box.title})</chakra.h2>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default EnglishBoxes;

