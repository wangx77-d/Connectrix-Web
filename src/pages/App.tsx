import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Layout from '@/components/layout';

import Home from '@/pages/home';
import Profile from '@/pages/profile';
import ItemListing from '@/pages/items';
// import ItemDetail from '@components/ItemDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/items" element={<ItemListing />} />
          {/* <Route path="/item/:id" element={<ItemDetail />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
