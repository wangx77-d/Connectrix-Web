import React from 'react';
import { Box, VStack, Text, Icon, Flex } from '@chakra-ui/react';
import { FaHome, FaInfo, FaList, FaGamepad } from 'react-icons/fa';
import {
  MdAccountCircle,
  MdOutlinePayment,
  MdBorderColor,
} from 'react-icons/md';

const SidebarPanel: React.FC = () => {
  return (
    <Box
      minW="220px"
      h="100vh"
      p={6}
      shadow="lg"
      color="#888888"
      mr={4}
    >
      <VStack gap={6} alignItems="flex-start" ml={5} cursor="pointer">
        <Flex alignItems="center">
          <Icon fontSize="lg" mr={2} mb={1}>
            <FaHome />
          </Icon>
          <Text fontSize="md">Home</Text>
        </Flex>

        <Flex alignItems="center">
          <Icon fontSize="md" mr={2}>
            <MdAccountCircle />
          </Icon>
          <Text fontSize="md">Accounts</Text>
        </Flex>

        <Flex alignItems="center">
          <Icon fontSize="md" mr={2} mb={1}>
            <FaInfo />
          </Icon>
          <Text fontSize="md">Personal Info</Text>
        </Flex>

        <Flex alignItems="center">
          <Icon fontSize="md" mr={2} mb={1}>
            <MdBorderColor />
          </Icon>
          <Text fontSize="md">Orders</Text>
        </Flex>

        <Flex alignItems="center">
          <Icon fontSize="md" mr={2}>
            <MdOutlinePayment />
          </Icon>
          <Text fontSize="md">Payments</Text>
        </Flex>

        <Box w="full" h="1px" bg="gray.700" />
        <Flex alignItems="center">
          <Icon fontSize="sm" mr={2}>
            <FaList />
          </Icon>
          <Text fontSize="md">My Listing</Text>
        </Flex>
        <Flex alignItems="center">
          <Icon fontSize="md" mr={2}>
            <FaGamepad />
          </Icon>
          <Text fontSize="md">My Games</Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default SidebarPanel;
