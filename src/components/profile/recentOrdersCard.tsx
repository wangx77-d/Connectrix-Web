import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';

import OrderThumbCard from '@/components/order/orderThumbnail';

const RecentOrdersCard: React.FC = () => {
  const orders = [
    {
      title:
        "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
      dateRange: 'October 19 to October 20, 2024',
      imageUrl: 'https://via.placeholder.com/80',
    },
    {
      title:
        "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
      dateRange: 'October 19 to October 20, 2024',
      imageUrl: 'https://via.placeholder.com/80',
    },
    {
      title:
        "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
      dateRange: 'October 19 to October 20, 2024',
      imageUrl: 'https://via.placeholder.com/80',
    },
    {
      title:
        "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
      dateRange: 'October 19 to October 20, 2024',
      imageUrl: 'https://via.placeholder.com/80',
    },
    {
      title:
        "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
      dateRange: 'October 19 to October 20, 2024',
      imageUrl: 'https://via.placeholder.com/80',
    },
    {
      title:
        "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
      dateRange: 'October 19 to October 20, 2024',
      imageUrl: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4} color="white">
        Recent Orders
      </Text>
      <HStack gap={4} flexDirection="column" width="80%">
        {orders.map((order, index) => (
          <OrderThumbCard
            key={index}
            title={order.title}
            dateRange={order.dateRange}
            imageUrl={order.imageUrl}
          />
        ))}
      </HStack>
    </Box>
  );
};

export default RecentOrdersCard;
