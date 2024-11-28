import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  IconButton,
  HStack,
  Circle,
  Image,
} from '@chakra-ui/react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const IMAGE_ARR: string[] = [
  '/src/assets/ad1.png',
  '/src//assets/ad2.jpg',
  '/src/assets/ad3.jpg',
  '/src/assets/ad4.webp',
  '/src/assets/ad5.jpeg',
  '/src/assets/ad6.jpg',
];

const AdsPlayerPanel: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      updateNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const updatePrevSlide = () => {
    setImageIndex((prev) =>
      prev === 0 ? IMAGE_ARR.length - 1 : prev - 1
    );
  };

  const updateNextSlide = () => {
    setImageIndex((prev) =>
      prev === IMAGE_ARR.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      w="full"
      maxW="800px"
      mx="auto"
      mt={6}
      p={4}
      borderRadius="md"
    >
      <Flex justify="center" align="center">
        <IconButton
          aria-label="Previous Slide"
          position="absolute"
          left="100px"
          onClick={updatePrevSlide}
          zIndex={1}
          colorPalette="purple"
          variant="ghost"
          rounded="full"
        >
          <FaAngleLeft />
        </IconButton>
        <Image
          src={IMAGE_ARR[imageIndex]}
          borderRadius="lg"
          maxH="300px"
          mb={2}
          fit="contain"
        />
        <IconButton
          aria-label="Next Slide"
          position="absolute"
          right="100px"
          onClick={updateNextSlide}
          zIndex={1}
          colorPalette="purple"
          variant="ghost"
          rounded="full"
        >
          <FaAngleRight />
        </IconButton>
      </Flex>
      <HStack justify="center" mt={4}>
        {IMAGE_ARR.map((_, index) => (
          <Circle
            key={index}
            size="10px"
            bg={index === imageIndex ? 'purple.600' : 'gray.800'}
            cursor="pointer"
            onClick={() => setImageIndex(index)}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default AdsPlayerPanel;
