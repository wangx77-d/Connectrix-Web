import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ItemThumbCard from '@/components/item/thumbnail';
import { ItemCategory, Status } from '@/types/item';

const TopItemsPanel: React.FC = () => {
  const topItemsList = [
    {
      title: 'Battle of Legends',
      description:
        'An epic battle game where you can fight legendary warriors.',
      imageUrl: 'https://cdn.turbosmurfs.gg/image5_b7502b13dd.png',
      category: ItemCategory.GOODS,
      rating: 4,
      sellerName: 'Warrior Inc.',
      sellerAvatarUrl:
        'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
      status: Status.SOLD,
    },
    {
      title: 'Space Conquerors',
      description:
        'Conquer different planets in this thrilling space strategy game.',
      imageUrl:
        'https://techbuzzireland.com/wp-content/uploads/2023/11/ncs.png',
      category: ItemCategory.GOODS,
      rating: 4.7,
      sellerName: 'Galaxy Games',
      sellerAvatarUrl:
        'https://img.freepik.com/free-vector/cute-ninja-gaming-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-flat_138676-8079.jpg',
      status: Status.SOLD,
    },
    {
      title: 'Mystery of the Ancients',
      description:
        'Solve ancient puzzles and discover hidden secrets.',
      imageUrl:
        'https://image.api.playstation.com/vulcan/ap/rnd/202405/2117/bd406f42e9352fdb398efcf21a4ffe575b2306ac40089d21.png',
      category: ItemCategory.TUTORIAL,
      rating: 4.9,
      sellerName: 'Puzzle Masters',
      sellerAvatarUrl:
        'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
      status: Status.ACTIVE,
    },
    {
      title: 'Racing Rivals',
      description:
        'Compete with your friends in the most thrilling racing game.',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/5/55/F1_24_cover_art.jpg',
      category: ItemCategory.TUTORIAL,
      rating: 4.6,
      sellerName: 'Speedster Games',
      sellerAvatarUrl:
        'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
      status: Status.ACTIVE,
    },
    {
      title: 'Zombie Apocalypse',
      description: 'Survive the zombie apocalypse and save humanity.',
      imageUrl:
        'https://app.skin.land/blogfiles/9pt5dQLdaS8Tvup4n0wLl0udqZOR1BwkY1iK5EpR.png',
      category: ItemCategory.GOODS,
      rating: 4.7,
      sellerName: 'Survival Studios',
      sellerAvatarUrl: '/path/to/avatar5.png',
      status: Status.ACTIVE,
    },
    {
      title: 'Fantasy Kingdom',
      description:
        'Build and manage your kingdom in this fantasy simulation game.',
      imageUrl: '/path/to/image6.png',
      category: ItemCategory.GOODS,
      rating: 4.8,
      sellerName: 'Kingdom Builders',
      sellerAvatarUrl: '/path/to/avatar6.png',
      status: Status.ACTIVE,
    },
    {
      title: 'Warriors Quest',
      description: 'Embark on an adventurous journey as a warrior.',
      imageUrl: '/path/to/image7.png',
      category: ItemCategory.TUTORIAL,
      rating: 4.9,
      sellerName: 'Adventure Seekers',
      sellerAvatarUrl: '/path/to/avatar7.png',
      status: Status.INACTIVE,
    },
    {
      title: 'Alien Invasion',
      description: 'Defend Earth from invading alien forces.',
      imageUrl: '/path/to/image8.png',
      category: ItemCategory.GOODS,
      rating: 4.5,
      sellerName: 'Defender Games',
      sellerAvatarUrl: '/path/to/avatar8.png',
      status: Status.INACTIVE,
    },
  ];

  return (
    <Box p={6} m={4}>
      <Text fontSize="xl" fontWeight="bold" color="white">
        Top Items Panel
      </Text>
      <Box
        p={6}
        maxHeight="450px"
        overflowX="auto"
        overflowY="hidden"
      >
        <Flex direction="row" justifyContent="flex-start" gap={6}>
          {topItemsList.map((item, index) => (
            <ItemThumbCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              category={item.category}
              rating={item.rating}
              sellerName={item.sellerName}
              sellerAvatarUrl={item.sellerAvatarUrl}
              status={item.status}
              isHotItem={index < 3}
              size="xs"
            />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default TopItemsPanel;
