// import React from "react";
// import { chakra, Flex, HStack, Button, Link } from "@chakra-ui/react";

// const Footer = () => {
//   return (
//     <chakra.footer
//       w="full"
//       bg={["primary.200"]}
//       _dark={{ bg: "#3e3e3e" }}
//       py={1}
//       alignItems="center"
//       justifyContent="center"
//       position="absolute"
//       bottom={0}
//     >
//       <Flex
//         w="full"
//         as="footer"
//         flexDir={{ base: "column", sm: "row" }}
//         align="center"
//         justify="right"
//         px="4"
//         py="0"
//         bg={["primary.200"]}
//         _dark={{
//           bg: "gray.800",
//         }}
//       >

//         <HStack
//           spacing={0}
//           display={{ base: "none", md: "inline-flex" }}
//         >
//               <Button as="a" href="/tao/" color={["primary.300"]} _hover={{ bg: "primary.500" }} variant="ghost">Home</Button>
//               <Button as="a" href="/tao/about" color={["primary.300"]} _hover={{ bg: "primary.500" }} variant="ghost">About</Button>
//               <Button as="a" href="/tao/contact" color={["primary.300"]} _hover={{ bg: "primary.500" }} variant="ghost">Contact</Button>
//         </HStack>

//       </Flex>
//     </chakra.footer>
//   );
// };
// export default Footer;

import React from "react";
import { chakra, Flex, HStack, Button, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <chakra.footer
      w="full"
      bg={["primary.200"]}
      _dark={{ bg: "#3e3e3e" }}
      py={0}
      alignItems="center"
      justifyContent="center"
      position="absolute"
      bottom={0}
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="right"
        px={4}
        py={0}
        bg={["primary.200"]}
        _dark={{
          bg: "gray.800",
        }}
      >
                <HStack
          spacing={3}
          mr={0}
          display={{ base: "none", md: "inline-flex" }}
        >
          <Button
            as="a"
            href="/tao/"
            color={["primary.300"]}
            _hover={{ bg: "primary.500" }}
            variant="ghost"
          >
            Home
          </Button>
          <Button
            as="a"
            href="/tao/about"
            color={["primary.300"]}
            _hover={{ bg: "primary.500" }}
            variant="ghost"
          >
            About
          </Button>
          <Button
            as="a"
            href="/tao/contact"
            color={["primary.300"]}
            _hover={{ bg: "primary.500" }}
            variant="ghost"
          >
            Contact
          </Button>
        </HStack>
      </Flex>
    </chakra.footer>
  );
};
export default Footer;
