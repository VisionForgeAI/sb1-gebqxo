import React from 'react';
import { Box, Flex, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW="1200px"
        mx="auto"
        px={4}
        justify="space-between"
        align="center"
      >
        <VStack align={{ base: 'center', md: 'start' }} mb={{ base: 6, md: 0 }}>
          <Text fontSize="2xl" fontWeight="bold" color="brand.500">
            AI Agency
          </Text>
          <Text fontSize="sm" color="gray.400">
            Innovating the future with AI
          </Text>
        </VStack>
        <HStack spacing={4}>
          <Icon as={FaTwitter} w={6} h={6} color="brand.500" cursor="pointer" />
          <Icon as={FaLinkedin} w={6} h={6} color="brand.500" cursor="pointer" />
          <Icon as={FaGithub} w={6} h={6} color="brand.500" cursor="pointer" />
        </HStack>
      </Flex>
      <Text textAlign="center" fontSize="sm" color="gray.500" mt={8}>
        © 2024 AI Agency. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;