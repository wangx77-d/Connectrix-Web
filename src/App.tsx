import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ItemDetail from './pages/ItemDetail';
import ItemListing from './pages/ItemListing';
import Navbar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list-item" element={<ItemListing />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
