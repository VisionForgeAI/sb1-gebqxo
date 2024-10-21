import React, { useState } from 'react';
import { Box, Button, VStack, Text, Input, IconButton } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes } from 'react-icons/fa';

const MotionBox = motion(Box);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      // Simulate AI response (replace with actual AI integration)
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "Thanks for your message! Our AI is processing your request.", sender: 'ai' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <>
      <IconButton
        icon={<FaRobot />}
        aria-label="Open Chatbot"
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="brand"
        size="lg"
        isRound
        onClick={() => setIsOpen(true)}
      />
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            position="fixed"
            bottom="80px"
            right="20px"
            w="300px"
            h="400px"
            bg="gray.800"
            borderRadius="md"
            boxShadow="xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
          >
            <VStack h="full" p={4}>
              <Flex justify="space-between" w="full">
                <Text fontWeight="bold">AI Assistant</Text>
                <IconButton
                  icon={<FaTimes />}
                  aria-label="Close Chatbot"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                />
              </Flex>
              <VStack flex={1} w="full" overflowY="auto" spacing={2}>
                {messages.map((msg, index) => (
                  <Box
                    key={index}
                    alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                    bg={msg.sender === 'user' ? 'brand.500' : 'gray.600'}
                    color="white"
                    borderRadius="md"
                    p={2}
                    maxW="80%"
                  >
                    <Text fontSize="sm">{msg.text}</Text>
                  </Box>
                ))}
              </VStack>
              <Flex w="full">
                <Input
                  placeholder="Type a message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleSend} ml={2} colorScheme="brand">
                  Send
                </Button>
              </Flex>
            </VStack>
          </MotionBox>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;