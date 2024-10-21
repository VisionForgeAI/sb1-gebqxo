import React, { useRef } from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      ref={ref}
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
      overflow="hidden"
    >
      <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial color="#0d97ff" wireframe />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      <VStack
        spacing={8}
        align="center"
        zIndex={1}
        textAlign="center"
        px={4}
      >
        <MotionHeading
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight="bold"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Innovate with AI
        </MotionHeading>
        <MotionText
          fontSize={{ base: 'xl', md: '2xl' }}
          maxW="600px"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Transforming businesses with cutting-edge artificial intelligence solutions
        </MotionText>
        <MotionButton
          size="lg"
          colorScheme="brand"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          _hover={{ bg: 'brand.600' }}
        >
          Explore Our Services
        </MotionButton>
      </VStack>
    </Box>
  );
};

export default Hero;