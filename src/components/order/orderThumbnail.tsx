import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';

type OrderThumbCardProps = {
  title: string;
  dateRange: string;
  imageUrl: string;
};

const OrderThumbCard: React.FC<OrderThumbCardProps> = ({
  title,
  dateRange,
  imageUrl,
}) => {
  return (
    <Flex
      bg="#2d2d2d"
      borderRadius="lg"
      boxShadow="lg"
      p={4}
      alignItems="center"
      width="100%"
    >
      <Image
        src={imageUrl}
        alt={`${title} Thumbnail`}
        borderRadius="md"
        width="80px"
        height="80px"
        mr={4}
      />
      <Box flex="1">
        <Text color="white" fontWeight="bold" mb={1}>
          {title}
        </Text>
        <Text color="gray.400" fontSize="sm">
          {dateRange}
        </Text>
      </Box>
      <Button
        colorPalette="purple"
        variant="subtle"
        rounded="full"
        color="white"
      >
        View Order Detail
      </Button>
    </Flex>
  );
};

export default OrderThumbCard;
