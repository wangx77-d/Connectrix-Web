// GameCard.tsx
import React from 'react';
import { Box, Image, Text, Flex, Badge } from '@chakra-ui/react';
import { FaFire } from 'react-icons/fa';

import { Rating } from '@/components/ui/rating';
import { Avatar } from '@/components/ui/avatar';
import CategoryLabel from '@/components/item/categoryLabel';
import StatusLabel from '@/components/item/statusLabel';
import { ItemCategory, Status } from '@/types/item';

type ItemCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  category: ItemCategory;
  rating: number;
  sellerName: string;
  sellerAvatarUrl: string;
  status: Status;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  isHotItem?: boolean;
};

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  rating,
  sellerName,
  sellerAvatarUrl,
  status,
  size = 'md',
  isHotItem = false,
}) => {
  return (
    <Box
      position="relative"
      bg="#1f1f1f"
      borderRadius="md"
      p={2}
      minWidth="150px"
      maxWidth="200px"
    >
      {isHotItem ? (
        <Badge
          position="absolute"
          variant="solid"
          colorPalette="purple"
          px={2}
          py={1}
          borderRadius="xs"
          size="xs"
          top="-10px"
          left="-10px"
        >
          <FaFire />
        </Badge>
      ) : null}

      <Box borderRadius="lg" mb={2}>
        <Flex wrap="wrap" justify="center">
          <Image
            src={imageUrl}
            alt={`${title} Thumbnail`}
            borderRadius="lg"
            height={40}
            mb={2}
          />
          <Rating
            value={rating}
            size="xs"
            colorPalette="teal"
            allowHalf={true}
            disabled
          />
          <Text
            fontWeight="bold"
            fontSize={size}
            mt={2}
            textAlign="center"
          >
            {title}
          </Text>
          <Text color="gray.400" fontSize={size} mb={2}>
            {description}
          </Text>
        </Flex>
      </Box>
      <Avatar
        name={sellerName}
        src={sellerAvatarUrl}
        size="md"
        position="absolute"
        bottom={-5}
        left={0}
        borderWidth={3}
        borderColor="#c20bf2"
      />

      <StatusLabel
        status={status}
        size="sm"
        style={{ position: 'absolute', bottom: '0px', right: '0px' }}
      />
      <CategoryLabel
        category={category}
        size="xs"
        style={{ position: 'absolute', top: '160px', left: '0px' }}
      />
    </Box>
  );
};

export default ItemCard;
