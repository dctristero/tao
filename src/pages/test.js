import React from "react";
import {Link} from "react-router-dom"
import {
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  chakra,
  Button
} from "@chakra-ui/react";

export default function Test() {
  // Function to generate an array of numbers from 1 to 81
  const makeLinks = () => {
    const numbers = [];
    for (let i = 1; i <= 81; i++) {
      numbers.push(
        <Button color={["primary.300"]} className="navbtn" variant="ghost">
          <Link to={`${i}`}>{i}</Link>
        </Button>);
    }
    return numbers;
  };

  return (
    <div>
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        p={7}
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
        //pos="absolute"
      >
        <Box p={2}>
          <SimpleGrid id="grid" columns={9} spacing={0}>
            {makeLinks().map((number) => (
              <Box
                key={number}
                borderColor={["primary.300"]}
                borderWidth="1px"
                p={4}
                textAlign="center"
              >
                {number}
              </Box>
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
