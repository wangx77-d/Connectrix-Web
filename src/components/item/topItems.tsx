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
