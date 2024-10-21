import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box bg="gray.900" color="white" minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="2xl">Hello, AI Agency!</Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;