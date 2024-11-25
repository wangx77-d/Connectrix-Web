import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Profile from '../components/Profile';
import ItemDetail from '../components/ItemDetail';
import ItemListing from '../components/ItemListing';
import Navbar from '../components/NavBar';

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
