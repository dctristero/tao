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

export default function Test() {
  // Function to generate an array of numbers from 1 to 81
  const makeNum = () => {
    const numbers = [];
    for (let i = 1; i <= 81; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div>
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        p={[".2vw"]}
        w="full"
        h="1000"
        justifyContent="center"
        alignItems="center"
        //pos="absolute"
      >
        <Box p=".2vw">
          <SimpleGrid
            id="grid"
            columns={9}
            spacing={0}
            borderColor={["primary.300"]}
            borderWidth=".2vw"
          >
            {makeNum().map((number) => (
                <Button
                  as={Link}
                  to={`${number}`}
                  key={number}
                  borderColor={["primary.300"]}
                  borderWidth=".2vw"
                  borderRadius="0"
                  p={0}
                  m={0}
                  w={["10vw", "10vw", "6vw", "4vw"]}
                  h={["10vw", "10vw", "6vw", "4vw"]}
                  fontSize={["1em", "1.2em", "1.2em", "1.4em", "1.5em"]}
                  // textAlign="center"
                  // verticalAlign="center"
                  // justifyContent="center"
                  color={["primary.300"]}
                  _hover={{ bg: "primary.200" }}
                  className="navbtn"
                  variant="ghost"
                  pos="inherit"
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

// const GridWithNumbers = () => {
//   // Function to generate an array of numbers from 1 to 81
//   const generateNumbers = () => {
//     const numbers = [];
//     for (let i = 1; i <= 81; i++) {
//       numbers.push(i);
//     }
//     return numbers;
//   };

//   return (
//     <ChakraProvider>
//       <Box p={4}>
//         <SimpleGrid columns={9} spacing={0}>
//           {generateNumbers().map((number) => (
//             <Box
//               key={number}
//               borderColor={["primary.300"]}
//               borderWidth="2px"
//               p={4}
//               textAlign="center"
//             >
//               {number}
//             </Box>
//           ))}
//         </SimpleGrid>
//       </Box>
//     </ChakraProvider>
//   );
// };

// export default GridWithNumbers;
