import React, { useState } from 'react';
import { Box, Image } from '@chakra-ui/react';

const IMAGE_ARR: string[] = [
  '@/assets/ad1.png',
  '@/assets/ad2.png',
  '@/assets/ad3.png',
];

const AdsPanel: React.FC = () => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  return (
    <Box p={6} m={4}>
      <Image
        src={IMAGE_ARR[imageIndex]}
        // alt={`Ads${imageIndex} Thumbnail`}
        borderRadius="lg"
        height={40}
        mb={2}
      />
    </Box>
  );
};

export default AdsPanel;
