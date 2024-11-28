// GameCard.tsx
import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import PlatformLabel from '../item/platformLabel';

type GameCardProps = {
  name: string;
  imageUrl: string;
  platform: string;
};

const GameCard: React.FC<GameCardProps> = ({
  name,
  imageUrl,
  platform,
}) => {
  return (
    <Box
      width="130px"
      bg="#1f1f1f"
      borderRadius="md"
      boxShadow="md"
      p={4}
      textAlign="center"
    >
      <Image
        src={imageUrl}
        alt={`${name} Thumbnail`}
        borderRadius="sm"
        mb={4}
      />
      <Text color="white" mb={2} textStyle="sm">
        {name}
      </Text>
      <PlatformLabel
        platform={
          platform as
            | 'PlayStation'
            | 'Steam'
            | 'Nintendo'
            | 'Xbox'
            | 'PC'
        }
      />
    </Box>
  );
};

export default GameCard;
