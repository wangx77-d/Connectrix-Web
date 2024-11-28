import React from 'react';
import { Box, Flex, Text, HStack, Icon } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';

import { FaMapMarkerAlt } from 'react-icons/fa';

const BioCardPanel: React.FC = () => {
  return (
    <Box
      w="full"
      maxW="600px"
      mx="auto"
      m={4}
      p={4}
      // boxShadow="lg"
      borderRadius="md"
      // bg="gray.800"
      color="white"
    >
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        BIO
      </Text>
      <Flex align="center" mb={4}>
        <Avatar
          size="lg"
          name="Marcella Aurelia"
          src="https://via.placeholder.com/100"
          mr={4}
        />
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            Marcella Aurelia
          </Text>
          <Text fontSize="sm" color="gray.400">
            woman
          </Text>
        </Box>
      </Flex>
      <Text mb={4}>
        I have a strong sense of responsibility and the concept of
        time, lively and cheerful character; serious and responsible
        for the work, and...
      </Text>
      <HStack gap={4} mt={4}>
        <Flex align="center">
          {/* <Icon as={FaMapMarkerAlt} mr={2} /> */}
          <Text>Indonesia</Text>
        </Flex>
        {/*<Flex align="center">
          <AtSignIcon mr={2} />
          <Text
            as="a"
            href="mailto:marcylin02@gmail.com"
            color="blue.300"
          >
            marcylin02@gmail.com
          </Text>
        </Flex>*/}
      </HStack>
    </Box>
  );
};

export default BioCardPanel;
