// RecentGamesPanel.tsx
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import GameCard from '@/components/gameCard';

const RecentGamesCard: React.FC = () => {
  const recentGames = [
    {
      name: 'Black Myth: Wukong',
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b2737c06eed183de7869dd59a61d',
      platform: 'Playstation',
    },
    {
      name: 'It Takes Two',
      imageUrl:
        'https://image.api.playstation.com/vulcan/ap/rnd/202012/0815/0Xqi1LgRoEtJ5zlFprpd54Vu.png',
      platform: 'Xbox',
    },
    {
      name: 'Splatoon 3',
      imageUrl:
        'https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000046395/94a4095cda06c4d85c637d1af451979f9933302b6b17174d97c45de7a68584a2',
      platform: 'Nintendo',
    },
    {
      name: 'Death Stranding',
      imageUrl:
        'https://image.api.playstation.com/vulcan/ap/rnd/202106/2214/8qVSk5xrtDJ2eJ2sd67KcpPW.jpg',
      platform: 'PlayStation',
    },
    {
      name: 'The Legend of Zelda',
      imageUrl:
        'https://assets.nintendo.com/image/fetch/q_auto/f_auto/https://atum-img-lp1.cdn.nintendo.net/i/c/1de79a9ba2994e9b92cf177d00b3562d_1024',
      platform: 'Nintendo',
    },
    {
      name: 'Gran Turismo 7',
      imageUrl:
        'https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/3mjMyRiJaq8lw1EFWiTCUJRV.png',
      platform: 'Xbox',
    },
    {
      name: '2K25',
      imageUrl:
        'https://assets.2k.com/1a6ngf98576c/4J6ICvt6DPi4jnPvmc72MQ/9e64397d3459a717bea30b5e4d7772f2/N25-Announce-Homepage-Module_Two-Retail_Carousel-STD-425x535.jpg',
      platform: 'PlayStation',
    },

    {
      name: 'League of Legends',
      imageUrl:
        'https://i.scdn.co/image/ab6761610000e5ebe80d1ffb81aa6503ad41c574',
      platform: 'PC',
    },
    {
      name: 'Gran Turismo 7',
      imageUrl:
        'https://image.api.playstation.com/vulcan/ap/rnd/202109/1321/3mjMyRiJaq8lw1EFWiTCUJRV.png',
      platform: 'PC',
    },
  ];

  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4} color="white">
        Recent Games
      </Text>
      <Box
        pb="6"
        maxHeight="220px"
        width="80%"
        overflowX="scroll"
        overflowY="hidden"
      >
        <Flex direction="row" justifyContent="flex-start" gap={3}>
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
    </Box>
  );
};

export default RecentGamesCard;
