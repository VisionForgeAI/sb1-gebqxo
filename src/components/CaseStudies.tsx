import React from 'react';
import { Box, Heading, SimpleGrid, Text, Image, VStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const caseStudies = [
  {
    title: 'AI-Driven Supply Chain Optimization',
    description: 'Reduced costs by 30% for a global logistics company',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Predictive Maintenance for Manufacturing',
    description: 'Increased equipment uptime by 25% for an automotive manufacturer',
    image: 'https://images.unsplash.com/photo-1565514020179-026b92b2d0b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'AI-Powered Customer Service Chatbot',
    description: 'Improved response times by 80% for a telecom provider',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

const CaseStudies = () => {
  return (
    <Box py={20} bg="gray.900">
      <VStack spacing={12} align="center" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center">
          Case Studies
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          {caseStudies.map((study, index) => (
            <MotionBox
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack
                bg="gray.800"
                borderRadius="lg"
                overflow="hidden"
                align="stretch"
                height="full"
                _hover={{ transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                <Image src={study.image} alt={study.title} objectFit="cover" h="200px" />
                <VStack p={6} spacing={4} align="start">
                  <Heading as="h3" size="lg">
                    {study.title}
                  </Heading>
                  <Text>{study.description}</Text>
                </VStack>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default CaseStudies;