import React from 'react';
import { Box, Flex, Button, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="header" position="fixed" w="100%" zIndex="docked" bg="rgba(26, 32, 44, 0.8)" backdropFilter="blur(10px)">
      <Flex justify="space-between" align="center" maxW="1200px" mx="auto" p={4}>
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box as="span" fontSize="2xl" fontWeight="bold" color="brand.500">
            AI Agency
          </Box>
        </MotionBox>
        <Flex display={{ base: 'none', md: 'flex' }}>
          {['Services', 'Case Studies', 'Team', 'Contact'].map((item) => (
            <Button key={item} variant="ghost" mx={2} _hover={{ color: 'brand.500' }}>
              {item}
            </Button>
          ))}
        </Flex>
        <Button
          display={{ base: 'block', md: 'none' }}
          onClick={onToggle}
          variant="outline"
          _hover={{ bg: 'brand.500' }}
        >
          Menu
        </Button>
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <VStack as="nav" spacing={4}>
            {['Services', 'Case Studies', 'Team', 'Contact'].map((item) => (
              <Button key={item} w="full" variant="ghost" _hover={{ bg: 'brand.500' }}>
                {item}
              </Button>
            ))}
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;