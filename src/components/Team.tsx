import React from 'react';
import { Box, Heading, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Scientist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Lead ML Engineer',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    name: 'Emily Nakamura',
    role: 'Data Science Director',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    name: 'Alex Thompson',
    role: 'AI Ethics Specialist',
    image: 'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const Team = () => {
  return (
    <Box py={20} bg="gray.800">
      <VStack spacing={12} align="center" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center">
          Our Team
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} w="full">
          {teamMembers.map((member, index) => (
            <MotionBox
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack
                bg="gray.700"
                borderRadius="lg"
                overflow="hidden"
                align="center"
                spacing={4}
                height="full"
                _hover={{ bg: 'gray.600', transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                <Image src={member.image} alt={member.name} objectFit="cover" h="250px" w="full" />
                <VStack p={6} spacing={2}>
                  <Heading as="h3" size="md" textAlign="center">
                    {member.name}
                  </Heading>
                  <Text textAlign="center" color="brand.500">
                    {member.role}
                  </Text>
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Team;