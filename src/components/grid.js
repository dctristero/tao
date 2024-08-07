import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  chakra,
  Button,
} from "@chakra-ui/react";

const Grid = () => {
  // generate number array
  const makeNum = () => {
    const numbers = [];
    for (let i = 1; i <= 81; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  useEffect(() => {
    const handleButtonClick = () => {
      window.scrollTo(0, 0);
    };

    // add event listener
    const buttons = document.querySelectorAll(".navbtn");
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });

    // remove event listener on unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleButtonClick);
      });
    };
  }, 
  // empty dependency array makes effect run only once
  []);

  return (
    <div>
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        w="full"
        mt={{base: "0vw", xl:"4"}}
        mb={{base: "5vw", md:"14", lg:"14", xl:"12"}}
        // ml={{ base: "0", xl: "3vw" }}
        // h="1000"
        justifyContent="center"
        alignItems="center"
        //pos="absolute"
      >
        <Box>

          <SimpleGrid
            id="grid"
            columns={9}
            spacing={0}
            borderColor={["primary.100"]}
            // borderWidth=".2vw"
          >
            {makeNum().map((number) => (
              <Button
                fontWeight={400}
                as={Link}
                to={`/${number}`}
                key={number}
                borderColor={["primary.100"]}
                borderWidth=".2vw"
                borderRadius="0"
                p={0}
                minWidth={["9.5vw", "8vw", "6vw", "4.5vw", "4vw"]}
                minHeight={["9.5vw", "8vw", "6vw", "4.5vw", "4vw"]}
                maxHeight={["9.5vw", "8vw", "6vw", "4.5vw", "4vw"]}
                fontSize={["1em", "1.2em", "1.4em", "1.5em"]}
                color={["primary.300"]}
                bg={["primary.200"]}
                _hover={{ bg: "primary.500" }}
                className="navbtn"
                variant="ghost"
                pos="inherit"
                rounded="md"
              >
                {number}
              </Button>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </div>
  );
}

export default Grid;