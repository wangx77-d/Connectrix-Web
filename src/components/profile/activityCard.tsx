import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

type ActivityCardProps = {
  index: number;
  title: string;
  dateRange: string;
  imageUrl: string;
  buttonText: string;
  gradientBg?: string;
};

// Activity Card Component
const ActivityCard: React.FC<ActivityCardProps> = ({
  index,
  title,
  dateRange,
  imageUrl,
  buttonText,
  gradientBg = '#2d2d2d',
}) => {
  return (
    <Box
      width={{ base: '100%', sm: '200px' }}
      bg={gradientBg}
      borderRadius="lg"
      boxShadow="lg"
      p={4}
      textAlign="center"
      position="relative"
    >
      <Image
        src={imageUrl}
        alt={`${title} Thumbnail`}
        borderRadius="md"
        mb={4}
        width="80px"
        height="80px"
        mx="auto"
      />
      <Text color="white" mb={2} fontWeight="bold" fontSize="sm">
        {title}
      </Text>
      <Text color="gray.400" mb={2} fontSize="sm">
        {dateRange}
      </Text>
      <Button
        colorScheme="orange"
        variant="surface"
        rounded="full"
        size="sm"
      >
        <Text color="white" fontWeight="bold" fontSize="xs">
          {'Activity >'}
        </Text>
      </Button>
    </Box>
  );
};

export default ActivityCard;
