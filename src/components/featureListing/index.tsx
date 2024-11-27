import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';

const FeatureListingPanel: React.FC = () => {
  const logos = [
    {
      name: 'PlayStation',
      src: 'https://www.svgrepo.com/show/331538/playstation.svg',
    },
    {
      name: 'Steam',
      src: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
    },
    {
      name: 'Nintendo',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Nintendo_Switch_logo.svg/512px-Nintendo_Switch_logo.svg.png',
    },
    {
      name: 'Xbox',
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/XBOX_logo_2012.svg/1200px-XBOX_logo_2012.svg.png',
    },
  ];

  return (
    <Box
      p={6}
      m={4}
      height="280px"
      // width="100%"
      overflowX="auto"
      overflowY="hidden"
    >
      <Text fontSize="xl" fontWeight="bold" mb={6} color="white">
        Platform Support
      </Text>
      <Flex direction="row" justifyContent="center" gap={6}>
        {logos.map((logo, index) => (
          <Box key={index} p={4}>
            <Image
              src={logo.src}
              alt={`${logo.name} Logo`}
              boxSize="80px"
              objectFit="contain"
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default FeatureListingPanel;
