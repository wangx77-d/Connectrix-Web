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
            imageUrl:
                'https://cdn.turbosmurfs.gg/image5_b7502b13dd.png',
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
            rating: 3.7,
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
            rating: 1.9,
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
            rating: 2.6,
            sellerName: 'Speedster Games',
            sellerAvatarUrl:
                'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-playing-guitar-and-listening-to-music-with-headset-in-cartoon-style-youth-day-or-music-day-concept-by-ai-generated-free-photo.jpg',
            status: Status.ACTIVE,
        },
        {
            title: 'Zombie Apocalypse',
            description:
                'Survive the zombie apocalypse and save humanity.',
            imageUrl:
                'data:image/jpeg;base64,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',
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
            imageUrl:
                'https://images.nightcafe.studio/jobs/yUuqM0LhRK9gd73VOPX2/yUuqM0LhRK9gd73VOPX2--2--ymeiw_5.9524x.jpg?tr=w-1600,c-at_max',
            category: ItemCategory.GOODS,
            rating: 4.8,
            sellerName: 'Kingdom Builders',
            sellerAvatarUrl: '/path/to/avatar6.png',
            status: Status.ACTIVE,
        },
        {
            title: 'Warriors Quest',
            description:
                'Embark on an adventurous journey as a warrior.',
            imageUrl:
                'https://i.ytimg.com/vi/_3-8NDn8yW8/maxresdefault.jpg',
            category: ItemCategory.TUTORIAL,
            rating: 4.9,
            sellerName: 'Adventure Seekers',
            sellerAvatarUrl: '/path/to/avatar7.png',
            status: Status.INACTIVE,
        },
        {
            title: 'Alien Invasion',
            description: 'Defend Earth from invading alien forces.',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHKctbeVqhud3o-8ZYwd1Pg_Nv_VC5PSaD5A&s',
            category: ItemCategory.GOODS,
            rating: 4.5,
            sellerName: 'Defender Games',
            sellerAvatarUrl: '/path/to/avatar8.png',
            status: Status.INACTIVE,
        },
        {
            title: 'Cyber Ninja',
            description:
                'Become a cyber ninja in this futuristic stealth action game.',
            imageUrl:
                'https://www.guilfordian.com/wp-content/uploads/2020/11/ghostrunner-900x506.png',
            category: ItemCategory.GOODS,
            rating: 4.8,
            sellerName: 'Tech Warriors',
            sellerAvatarUrl:
                'https://static.vecteezy.com/system/resources/previews/031/347/067/non_2x/cute-boy-gamer.jpg',
            status: Status.ACTIVE,
        },
        {
            title: 'Dragon Tamer',
            description:
                'Tame and train dragons to compete in epic battles.',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSosNvDQ9oHu_STfmGNKPp1DNq27Joqinfs2A&s',
            category: ItemCategory.GOODS,
            rating: 4.6,
            sellerName: 'Mythic Studios',
            sellerAvatarUrl: 'https://i.imgur.com/QrKFY8Q.png',
            status: Status.SOLD,
        },
        {
            title: 'Steampunk Adventures',
            description:
                'Explore a steampunk world filled with unique machines.',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUK-HqD_tIRLR34OtzxN43ve7c0vYwqzx4UA&s',
            category: ItemCategory.TUTORIAL,
            rating: 4.7,
            sellerName: 'Steampunk Studios',
            sellerAvatarUrl:
                'https://img.icons8.com/color/48/steampunk.png',
            status: Status.ACTIVE,
        },
        {
            title: 'Mystic Forest',
            description:
                'Discover hidden treasures and secrets in the mystical forest.',
            imageUrl:
                'https://lh3.googleusercontent.com/svoWD1V67lJONkYFxB7dl-5m4r3Leq89MqumJ_zGvmb1xM_6sALf3hsTpNOrNR7j9nAKTsQGA7_eSGsx_3Zh5osZrQ=s1280-w1280-h800',
            category: ItemCategory.GOODS,
            rating: 4.9,
            sellerName: 'Fantasy Explorers',
            sellerAvatarUrl:
                'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
            status: Status.ACTIVE,
        },
        {
            title: 'Space Pioneers',
            description:
                'Travel through space and establish colonies on new planets.',
            imageUrl:
                'https://i.ytimg.com/vi/eCLax7Xvzz4/maxresdefault.jpg',
            category: ItemCategory.GOODS,
            rating: 4.4,
            sellerName: 'Cosmic Developers',
            sellerAvatarUrl:
                'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
            status: Status.INACTIVE,
        },
        {
            title: 'Pixel Hero',
            description: 'An old-school pixelated RPG adventure.',
            imageUrl:
                'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_CA/games/switch/p/pixel-heroes-mega-byte-and-magic-switch/hero',
            category: ItemCategory.GOODS,
            rating: 4.5,
            sellerName: 'Retro Gaming',
            sellerAvatarUrl: 'https://i.imgur.com/JcYgh7Q.png',
            status: Status.SOLD,
        },

        {
            title: 'Knight’s Tale',
            description:
                'Live the life of a knight in a medieval kingdom.',
            imageUrl:
                'https://image.api.playstation.com/vulcan/ap/rnd/202311/2209/7b0b5c28c6102e63a54df7d0b1aa01887b2661e27f96785e.png',
            category: ItemCategory.GOODS,
            rating: 4.6,
            sellerName: 'Medieval Studios',
            sellerAvatarUrl:
                'https://img.icons8.com/color/48/medieval.png',
            status: Status.ACTIVE,
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
                <Flex
                    direction="row"
                    justifyContent="flex-start"
                    gap={6}
                >
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
