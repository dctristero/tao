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
        p={[".2vw"]}
        w="full"
        mt={4}
        mb={4}
        // h="1000"
        justifyContent="center"
        alignItems="center"
        //pos="absolute"
      >
        <Box p=".2vw">
          <SimpleGrid
            id="grid"
            columns={9}
            spacing={0}
            borderColor={["primary.100"]}
            borderWidth=".2vw"
          >
            {makeNum().map((number) => (
              <Button
                fontWeight={400}
                as={Link}
                to={`/tao/${number}`}
                key={number}
                borderColor={["primary.100"]}
                borderWidth=".2vw"
                borderRadius="0"
                p={0}
                m={0}
                minWidth={["10vw", "10vw", "6vw", "4vw"]}
                minHeight={["10vw", "10vw", "6vw", "4vw"]}
                fontSize={["1em", "1.2em", "1.2em", "1.4em", "1.5em"]}
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