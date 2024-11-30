import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';

import Layout from '@/components/layout';

import Home from '@/pages/home';
import Market from '@/pages/market';
import News from '@/pages/news';
import About from '@/pages/about';
import Profile from '@/pages/profile';
import ItemListing from '@/pages/items';
// import ItemDetail from '@components/ItemDetail';
import Login from '@/pages/loginPage';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/market"
                    element={
                        <Layout>
                            <Market />
                        </Layout>
                    }
                />
                <Route
                    path="/news"
                    element={
                        <Layout>
                            <News />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Layout>
                            <Profile />
                        </Layout>
                    }
                />
                <Route
                    path="/items"
                    element={
                        <Layout>
                            <ItemListing />
                        </Layout>
                    }
                />
                {/* <Route path="/item/:id" element={<Layout><ItemDetail /></Layout>} /> */}
            </Routes>
        </Router>
    );
};

export default App;
