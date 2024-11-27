import React from 'react';
import TopItemsPanel from '@/components/item/topItems';
// import '@assets/styles/Home.css';

interface HomeProps {
  // Add any props if needed
}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="home">
      <TopItemsPanel />
    </div>
  );
};

export default Home;
