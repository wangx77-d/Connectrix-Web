import React from 'react';
import Nav from './nav'; // Import the NavBar
import Footer from './footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Nav />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
