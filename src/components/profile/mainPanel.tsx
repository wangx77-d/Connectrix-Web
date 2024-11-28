import React from 'react';
import { Box } from '@chakra-ui/react';
import BioCard from './bioCard';
import RecentGamesCard from './recentGameCard';
import RecentActivitiesCard from './recentActivitiesCard';

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
      <RecentActivitiesCard />
    </Box>
  );
};

export default MainPanel;
