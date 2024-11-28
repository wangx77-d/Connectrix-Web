import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';

import { FaMapMarkerAlt } from 'react-icons/fa';

const BioCard: React.FC = () => {
  return (
    <Box p={4}>
      <Flex align="center" mb={4}>
        <Avatar
          size="2xl"
          name="Marcella Aurelia"
          src="https://img.freepik.com/premium-vector/gamer-streamer-mascot-logo-vector-illustration_382438-609.jpg"
          mr={4}
        />
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            Marcella Aurelia
          </Text>
          <Text fontSize="sm" color="#c20bf2">
            He/Him/His
          </Text>
        </Box>
        <Icon fontSize="sm" ml={6}>
          <FaMapMarkerAlt />
        </Icon>
        <Text ml={2}>Canada</Text>
      </Flex>
      <Flex align="center">
        <Text fontSize="sm" color="gray.400">
          ...He did not choose the gamer life, the gamer life chose
          him.
        </Text>
      </Flex>
    </Box>
  );
};

export default BioCard;
