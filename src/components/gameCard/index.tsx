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
      minWidth="120px"
      maxWidth="140px"
      bg="#1f1f1f"
      borderRadius="md"
      boxShadow="md"
      p={4}
      textAlign="center"
      position="relative"
    >
      <Image
        src={imageUrl}
        alt={`${name} Thumbnail`}
        borderRadius="sm"
        mb={4}
        width="90px"
        height="90px"
      />
      <Text color="white" mb={4} textStyle="xs">
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
        size="xs"
        style={{ position: 'absolute', bottom: 3, left: -3 }}
      />
    </Box>
  );
};

export default GameCard;
