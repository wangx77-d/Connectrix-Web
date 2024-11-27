// RecentGamesPanel.tsx
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import GameCard from '@/components/gameCard';

const RecentGamesPanel: React.FC = () => {
    const recentGames = [
        {
            name: 'Black Myth -  Wukong',
            imageUrl:
                'https://i.scdn.co/image/ab67616d0000b2737c06eed183de7869dd59a61d',
            platform: 'Playstation',
        },
        {
            name: '这是游戏名',
            imageUrl: '/path/to/game-image-2.png',
            platform: 'PlayStation,PC',
        },
        {
            name: '这是游戏名',
            imageUrl: '/path/to/game-image-3.png',
            platform: 'Nintendo',
        },
        {
            name: '这是游戏名',
            imageUrl: '/path/to/game-image-4.png',
            platform: 'PC',
        },
        {
            name: '这是游戏名',
            imageUrl: '/path/to/game-image-4.png',
            platform: 'Xbox',
        },
    ];

    return (
        <Box p={6} width="300px">
            <Text fontSize="2xl" fontWeight="bold" mb={4} color="white">
                Quick View Panel
            </Text>
            <Flex
                wrap="wrap"
                justifyContent="flex-start"
                overflowX="auto"
                flexWrap="nowrap"
                gap={3}
            >
                {recentGames.map((game, index) => (
                    <GameCard
                        key={index}
                        name={game.name}
                        imageUrl={game.imageUrl}
                        platform={game.platform}
                    />
                ))}
            </Flex>
        </Box>
    );
};

export default RecentGamesPanel;
