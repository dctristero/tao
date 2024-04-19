import React from "react";
import "../App.css"
import {Link} from "react-router-dom"
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const bg = useColorModeValue("#1c5858", "#1c5858");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={["primary.200"]}
        color={["primary.300"]}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={0}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            {/* <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a> */}
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            <Link to="/tao/">The Public Tao Te Ching</Link>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1} >
            <HStack
              spacing={0}
              mr={-1}
              display={{ base: "none", md: "inline-flex" }}
            >
              <Button as="a" href="/tao/" color={["primary.300"]} className="navbtn" variant="ghost">Home</Button>
              <Button as="a" href="/tao/about" color={["primary.300"]} className="navbtn" variant="ghost">About</Button>
              <Button as="a" href="/tao/contact" color={["primary.300"]} className="navbtn" variant="ghost">Contact</Button>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={["primary.300"]}
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button className="navbtn" w="full" variant="ghost">
                  <Link to="/portfolio">Features</Link>
                </Button>
                <Button className="navbtn" w="full" variant="ghost">
                  <Link to="/">Home</Link>
                </Button>
                <Button className="navbtn" w="full" variant="ghost">
                  <Link to="/portfolio">Portfolio</Link>
                </Button>
                <Button className="navbtn" w="full" variant="ghost">
                  <Link to="/about">About</Link>
                </Button>
                <Button className="navbtn" w="full" variant="ghost">
                  <Link to="/contact">Contact</Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
export default Navbar;