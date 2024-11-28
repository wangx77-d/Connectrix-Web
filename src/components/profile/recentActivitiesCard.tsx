import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import ActivityCard from './activityCard';

const RecentActivitiesCard: React.FC = () => {
  const activities = [
    {
      title: "Sand Ninja's",
      dateRange: '2024.11.9 - 2024.12.20',
      imageUrl: '/src/assets/activity1.png',
      gradientBg:
        'linear-gradient(300deg, #2d2d2d 60%,#D4A02F 100%, #646E6D 10%)',
    },
    {
      title: "Sand Ninja's",
      dateRange: '2024.11.9 - 2024.12.20',
      imageUrl: '/src/assets/activity2.png',
      gradientBg:
        'linear-gradient(300deg,#2d2d2d 60%, #F5A267 100%, #646E6D 10% )',
    },
    {
      title: "Sand Ninja's",
      dateRange: '2024.11.9 - 2024.12.20',
      imageUrl: '/src/assets/activity3.png',
      gradientBg:
        'linear-gradient(300deg,#2d2d2d 60%, #4D229E 100%, #646E6D 10% )',
    },
    {
      title: "Sand Ninja's",
      dateRange: '2024.11.9 - 2024.12.20',
      imageUrl: '/src/assets/activity4.png',
      gradientBg:
        'linear-gradient(300deg,#2d2d2d 60%, #067D71 100%, #646E6D 10% )',
    },
  ];

  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4} color="white">
        Recent Activities
      </Text>
      <Flex
        wrap="wrap"
        gap={6}
        justifyContent={{ base: 'center', md: 'flex-start' }}
      >
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            index={index}
            title={activity.title}
            dateRange={activity.dateRange}
            imageUrl={activity.imageUrl}
            buttonText={activity.buttonText}
            gradientBg={activity.gradientBg}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default RecentActivitiesCard;
