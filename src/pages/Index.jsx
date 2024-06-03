import { Container, Text, VStack, Box, Flex, Spacer, Button, useBreakpointValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="nav" bg="blue.500" color="white" p={4} align="center">
        <Box p="2">
          <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" colorScheme="whiteAlpha" mr={4}>
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" colorScheme="whiteAlpha">
            About
          </Button>
        </Box>
      </Flex>
      <Flex direction="column" align="center" justify="center" height="calc(100vh - 64px)">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;