import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';

import TutorialCard from '@/components/item/tutorial/card';

const TutorialPanel: React.FC = () => {
  const tutorialList = [
    {
      title: 'Fortnite',
      sellers: [
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/free-vector/cute-ninja-gaming-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-flat_138676-8079.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
        },
      ],
      buyers: 110,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3sKEKp14Tja61f6Xs2OE17qkwZvH0cQpaKmrtUDx0hlUIW-_yT4iZHvhwDdE_Uj_1wg&usqp=CAU',
      platforms: ['PlayStation', 'Steam', 'Xbox'],
    },
    {
      title: 'Black Myth: Wukong',
      sellers: [
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/free-vector/cute-ninja-gaming-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-flat_138676-8079.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
        },
      ],
      buyers: 1100,
      imageUrl:
        'https://assets-prd.ignimgs.com/2024/08/18/blackmyth-1723969364570.jpg',
      platforms: ['PlayStation', 'Steam'],
    },
    {
      title: 'Splatoon 3',
      sellers: [
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/free-vector/cute-ninja-gaming-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-flat_138676-8079.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
        },
      ],
      buyers: 110,
      imageUrl:
        'https://i.ytimg.com/vi/cJQRBlnoKHE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCb-XjLF0PwNIFDkUfQ3sNrVTXsIw',
      platforms: ['Nintendo'],
    },
    {
      title: 'CS:GO',
      sellers: [
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/free-vector/cute-ninja-gaming-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-flat_138676-8079.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
        },
      ],
      buyers: 110,
      imageUrl:
        'https://www.logicalincrements.com/assets/img/articles/csgo/csgowallpaper4.jpg',
      platforms: ['Steam', 'Xbox'],
    },
    {
      title: 'Fortnite',
      sellers: [
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/free-vector/cute-ninja-gaming-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-flat_138676-8079.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
        },
      ],
      buyers: 110,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3sKEKp14Tja61f6Xs2OE17qkwZvH0cQpaKmrtUDx0hlUIW-_yT4iZHvhwDdE_Uj_1wg&usqp=CAU',
      platforms: ['PlayStation', 'Steam', 'Xbox'],
    },
    {
      title: 'Fortnite',
      sellers: [
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/premium-vector/logo-kid-gamer_573604-742.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://img.freepik.com/free-vector/cute-ninja-gaming-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-flat_138676-8079.jpg',
        },
        {
          name: 'Warrior Inc.',
          avatarUrl:
            'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
        },
      ],
      buyers: 110,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj3sKEKp14Tja61f6Xs2OE17qkwZvH0cQpaKmrtUDx0hlUIW-_yT4iZHvhwDdE_Uj_1wg&usqp=CAU',
      platforms: ['PlayStation', 'Steam', 'Xbox'],
    },
  ];

  return (
    <Box p={6} m={4} position="relative">
      <Text fontSize="xl" fontWeight="bold" mb={4} color="white">
        Available Tutorials
      </Text>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
        {tutorialList.map((activity, index) => (
          <TutorialCard
            index={index}
            imageUrl={activity.imageUrl}
            title={activity.title}
            sellers={activity.sellers}
            views={activity.buyers}
            platforms={activity.platforms}
          />
        ))}
      </SimpleGrid>
      <Box position="absolute" top="25px" right="20px">
        <Text
          fontSize="sm"
          color="#c20bf2"
          fontWeight="bold"
          p={1}
          mt={2}
          borderRadius="md"
          cursor="pointer"
        >
          Explore more
        </Text>
      </Box>
    </Box>
  );
};

export default TutorialPanel;
