import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import ListingCard from '@/components/listing/ListingCard';

import activity1 from '../../assets/activity1.png';
import activity2 from '../../assets/activity2.png';
import activity3 from '../../assets/activity3.png';
import activity4 from '../../assets/activity4.png';

const RecentListingCard: React.FC = () => {
    const listings = [
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity1,
            gradientBg:
                'linear-gradient(300deg, #2d2d2d 60%,#D4A02F 100%, #646E6D 10%)',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity2,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #F5A267 100%, #646E6D 10% )',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity3,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #4D229E 100%, #646E6D 10% )',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity4,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #067D71 100%, #646E6D 10% )',
        },

        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity2,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #F5A267 100%, #646E6D 10% )',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity3,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #4D229E 100%, #646E6D 10% )',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity4,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #067D71 100%, #646E6D 10% )',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity1,
            gradientBg:
                'linear-gradient(300deg, #2d2d2d 60%,#D4A02F 100%, #646E6D 10%)',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity2,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #F5A267 100%, #646E6D 10% )',
        },
        {
            title: "Sand Ninja's",
            dateRange: '2024.11.9 - 2024.12.20',
            imageUrl: activity3,
            gradientBg:
                'linear-gradient(300deg,#2d2d2d 60%, #4D229E 100%, #646E6D 10% )',
        },
    ];

    return (
        <Box p={4} width="85%">
            <Text
                fontSize="lg"
                fontWeight="bold"
                mb={4}
                color="white"
            >
                Recent Listing
            </Text>
            <Flex
                wrap="wrap"
                gap={6}
                justifyContent={{ base: 'center', md: 'flex-start' }}
            >
                {listings.map((item, index) => (
                    <ListingCard
                        key={index}
                        index={index}
                        title={item.title}
                        dateRange={item.dateRange}
                        imageUrl={item.imageUrl}
                        gradientBg={item.gradientBg}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default RecentListingCard;
