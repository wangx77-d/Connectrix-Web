import React from 'react';
import TopItemsPanel from '@/components/item/topItems';
import FeatureListingPanel from '@/components/featureListing';
import TutorialPanel from '@/components/item/tutorialItems';
import AdsPlayerPanel from '@/components/adsPlayerPanel';
// import '@assets/styles/Home.css';

interface HomeProps {
  // Add any props if needed
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <AdsPlayerPanel />
      <TopItemsPanel />
      <TutorialPanel />
      <FeatureListingPanel />
    </div>
  );
};

export default Home;
