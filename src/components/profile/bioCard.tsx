import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';

import { FaMapMarkerAlt } from 'react-icons/fa';

const BioCard: React.FC = () => {
  return (
    <Box p={4}>
      <Text fontSize="lg" fontWeight="bold" mb={4}>
        BIO
      </Text>
      <Flex align="center" mb={4}>
        <Avatar
          size="lg"
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
      </Flex>
      <Flex align="center">
        <Icon fontSize="sm" mr={2}>
          <FaMapMarkerAlt />
        </Icon>
        <Text>Canada</Text>
      </Flex>
    </Box>
  );
};

export default BioCard;
