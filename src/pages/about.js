import React from "react";
import "../App.css"
import { Link } from "react-router-dom";
import {
  Heading,
  ChakraProvider,
  Box,
  Flex,
  SimpleGrid,
  useColorModeValue,
  chakra,
  Button,
  VStack,
  Center
} from "@chakra-ui/react";
import Grid from "../components/grid"
import Footer from "../components/footer.js";

export default function About() {
  
  return (
    <div>
      {/* <Center> */}
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        // p={[".2vw"]}
        w="full"
        minHeight={{
          base: "calc(100vh - 50px)",
          sm: "calc(100vh - 60px)"
        }}
      >
        <VStack spacing='0px' alignItems="center" w="full" maxW="800px">

        <Box
          className="aboutbox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          bg={["primary.200"]}
        >
          <chakra.h2 fontSize={"lg"} fontWeight={600} color={"primary.300"}>What is the Tao Te Ching?</chakra.h2>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          The Tao Te Ching is an ancient Chinese spiritual text in 81 verses (also called chapters or sections), attributed to Lao Tzu. The date of its composition and the identity of its author are both debated among scholars. Some of it is in structured verse and some is prose, though many translations adapt it all to free verse. It is foundational to many areas of Chinese religion and philosophy, and in the last few centuries its influence has spread around the world. 
          </chakra.p>
        </Box>

        <Box
          className="aboutbox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          bg={["primary.200"]}
        >
          <chakra.h2 fontSize={"lg"} fontWeight={600} color={"primary.300"}>What is this site for?</chakra.h2>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          There is no “best” translation of the Tao Te Ching, but some are better than others. Even if you find a good one, it can be hard to develop a relationship with a text when that relationship is entirely mediated through one stranger’s interpretation.
          </chakra.p>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          By offering a curated selection of public domain translations, I have tried to give some sense of the scope of possible interpretations of a given verse. The Google Translate links for the Chinese characters give an opportunity to dig into the language a little more directly, to discover more nuance, to understand the translators’ decisions, and to form one’s own interpretation.
          </chakra.p>
        </Box>

        <Box
          className="aboutbox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          bg={["primary.200"]}
        >
          <chakra.h2 fontSize={"lg"} fontWeight={600} color={"primary.300"}>What are some other good translations?</chakra.h2>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          Gia-fu Feng and Jane English do a beautiful job communicating the poetic and mystical qualities of the work. Thomas Cleary is remarkable for its philosophical rigor and clarity. Ursula K. Le Guin gives it a wry and welcoming tone, striking a lovely balance between poetry and clarity.
          </chakra.p>
        </Box>

        <Box
          className="aboutbox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          bg={["primary.200"]}
        >
          <chakra.h2 fontSize={"lg"} fontWeight={600} color={"primary.300"}>What are some other good resources for understanding the Tao Te Ching?</chakra.h2>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          John Minford’s translation (which is quite good in its own right) accompanies each verse with a selection of commentaries dating back centuries. Red Pine’s translation does this as well. Both are fascinating, and there is little overlap between the two.
          </chakra.p>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          Jonathan Star’s <em>Tao Te Ching: The Definitive Edition</em> provides a variety of possible English translations for every character in every verse, laid out in order. It is an invaluable resource for those eager to dig into the language of the text
          </chakra.p>
        </Box>

        <Box
          className="aboutbox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          bg={["primary.200"]}
        >
          <chakra.h2 fontSize={"lg"} fontWeight={600} color={"primary.300"}>What are some other important texts in Taoist thought?</chakra.h2>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          Chuang Tzu, Lieh Tzu, and <em>The Secret of the Golden Flower</em> are all important and widely beloved.
          </chakra.p>
        </Box>

        <Box
          className="aboutbox"
          w={{ base: "90%", md: "70%", lg: "60%" }}
          bg={["primary.200"]}
        >
          <chakra.h2 fontSize={"lg"} fontWeight={600} color={"primary.300"}>What makes you an authority on this subject?</chakra.h2>
          <chakra.p
            mt={3}
            fontWeight={300}
            color={["primary.300"]}
            className="translation"
          >
          I am not an authority, and I only seek to give others more convenient access to knowledge I have found valuable. I study this text, but I am not fluent in the language. Take my opinions on translation quality with a grain of salt.
          </chakra.p>
        </Box>

        
        <Grid/>
        </VStack>
        <Footer/>
      </Flex>
      {/* </Center> */}
    </div>
  );
}


// make each set of characters an array
// link with template literal of variable in place of chinese character
// make value of clicked character into variable?
// link open in new tab


// "https://translate.google.com/?sl=zh-TW&tl=en&text=經&op=translate"