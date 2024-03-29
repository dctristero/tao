const VersePage = () => {
  const { verseNumber } = useParams();
  const parsedVerseNumber = parseInt(verseNumber, 10) || 1;

  return (
    <div>
      <Flex
        bg={["primary.100"]}
        color={["primary.300"]}
        p={[".2vw"]}
        w="full"
        h="full"
      >
        <VStack spacing='0px'>
          <Box
            w="md"
            mt={4}
            py={4}
            px={6}
            bg={["primary.200"]}
            rounded="md"
            justifyContent="center"
            alignItems="center"
          >
            <TranslateBtns verseNumber={parsedVerseNumber} />
          </Box>
          <Grid />
        </VStack>
      </Flex>
    </div>
  );
};

export default VersePage;