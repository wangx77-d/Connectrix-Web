import React from 'react';
import { Box, Text, HStack } from '@chakra-ui/react';

import OrderThumbCard from '@/components/order/orderThumbnail';

const RecentOrdersCard: React.FC = () => {
    const orders = [
        {
            title: "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
            dateRange: 'October 20, 2024',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5l4dyz9rzEgW4UKnWJsmwmukE_jOc_x9aWG-jsWEpQ0USc2hq7PPmtMSvDuAR6mYAblG',
        },
        {
            title: "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
            dateRange: 'October 20, 2024',
            imageUrl:
                'https://m.media-amazon.com/images/I/81htlTqEckL.jpg',
        },
        {
            title: "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
            dateRange: 'October 20, 2024',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_TVgZHAlpP36pWtx2GQeiC1QplPMuIEukhg&s',
        },
        {
            title: "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
            dateRange: 'October 20, 2024',
            imageUrl:
                'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000025/7137262b5a64d921e193653f8aa0b722925abc5680380ca0e18a5cfd91697f58',
        },
        {
            title: "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
            dateRange: 'October 20, 2024',
            imageUrl:
                'https://image.api.playstation.com/vulcan/ap/rnd/202408/0817/6df82a22b2aaaafaf21ff1d93db80241b3a0c2058273e2b7.png',
        },
        {
            title: "Sand Ninja's three siblings make their debut. Probability Growth Balance Adjustment, take a look!",
            dateRange: 'October 20, 2024',
            imageUrl:
                'https://store-images.s-microsoft.com/image/apps.23625.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.e02f4ead-d89b-45cd-8eb5-5dcbf44ae91f?q=90&w=256&h=384&mode=crop&format=jpg&background=%23FFFFFF',
        },
    ];

    return (
        <Box p={4}>
            <Text
                fontSize="lg"
                fontWeight="bold"
                mb={4}
                color="white"
            >
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
