import React from 'react';
import { Box, Heading, SimpleGrid, Text, VStack, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const MotionBox = motion(Box);

const services = [
  { icon: FaBrain, title: 'Machine Learning', description: 'Custom ML models tailored to your business needs' },
  { icon: FaRobot, title: 'Automation', description: 'Streamline processes with intelligent automation' },
  { icon: FaChartLine, title: 'Predictive Analytics', description: 'Data-driven insights for informed decision making' },
  { icon: FaShieldAlt, title: 'AI Security', description: 'Robust security measures for AI implementations' },
];

const Services = () => {
  return (
    <Box py={20} bg="gray.800">
      <VStack spacing={12} align="center" maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" size="2xl" textAlign="center">
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} w="full">
          {services.map((service, index) => (
            <MotionBox
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <VStack
                bg="gray.700"
                p={6}
                borderRadius="lg"
                align="center"
                spacing={4}
                height="full"
                _hover={{ bg: 'gray.600', transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                <Icon as={service.icon} w={10} h={10} color="brand.500" />
                <Heading as="h3" size="lg" textAlign="center">
                  {service.title}
                </Heading>
                <Text textAlign="center">{service.description}</Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Services;