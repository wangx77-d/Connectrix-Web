import React from 'react';
import { Box } from '@chakra-ui/react';
import BioCard from './bioCard';
import RecentGamesCard from './recentGameCard';
import RecentOrdersCard from './recentOrdersCard';
import RecentListingCard from './recentListingCard';

const MainPanel: React.FC = () => {
  return (
    <Box
      w="full"
      minW={850}
      ml={4}
      p={4}
      boxShadow="lg"
      borderRadius="md"
    >
      <BioCard />
      <RecentGamesCard />
      <RecentOrdersCard />
      <RecentListingCard />
    </Box>
  );
};

export default MainPanel;
