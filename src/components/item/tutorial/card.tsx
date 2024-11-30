import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import ViewsLabel from '@/components/item/viewLabel';
import PlatformLabel from '@/components/item/platformLabel';

type TutorialSeller = {
    name: string;
    avatarUrl: string;
};

type TutorialCardProps = {
    index: number;
    imageUrl: string;
    title: string;
    sellers: TutorialSeller[];
    views: number;
    platforms: string[];
};

const TutorialCard: React.FC<TutorialCardProps> = ({
    index,
    imageUrl,
    title,
    sellers,
    views,
    platforms,
}) => {
    return (
        <Flex key={index} p={4} bg="#1f1f1f" borderRadius="md">
            <Image
                src={imageUrl}
                alt={`${title} Thumbnail`}
                borderRadius="lg"
                mb={4}
                width="150px"
                height="150px"
                fit="contain"
            />
            <Box
                key={index}
                ml={3}
                bg="#1f1f1f"
                borderRadius="lg"
                position="relative"
            >
                <Text
                    fontWeight="bold"
                    fontSize="xl"
                    mb={2}
                    color="white"
                    textAlign="center"
                >
                    {title}
                </Text>
                <Text fontSize="xs" mb={2} color="white">
                    Top Sellers
                </Text>
                <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    gap={1}
                >
                    {sellers.map((seller, index) => (
                        <Avatar
                            key={index}
                            name={seller.name}
                            src={seller.avatarUrl}
                            size="sm"
                        />
                    ))}
                </Flex>
                <Box mt={2}>
                    {platforms.map((platform, index) => (
                        <PlatformLabel
                            key={index}
                            platform={platform}
                            size={'xs'}
                        />
                    ))}
                </Box>

                <ViewsLabel
                    view={views}
                    style={{
                        position: 'absolute',
                        bottom: -20,
                        left: -200,
                    }}
                />
            </Box>
        </Flex>
    );
};

export default TutorialCard;
