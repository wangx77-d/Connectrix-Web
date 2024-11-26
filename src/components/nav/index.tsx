import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '@/styles/nav.css';
import ProfileSection from '../profileNav';

// Define a type for navigation items
type NavItem = {
    to: string;
    label: string;
};

// Create an array of navigation items
const navItems: NavItem[] = [
    { to: '/', label: 'Home' },
    { to: '/market', label: 'Market' },
    { to: '/news', label: 'News' },
    { to: '/about', label: 'About' },
];

const Navbar: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    if (currentPath && currentPath.startsWith('/profile')) {
        console.log(currentPath);
    }
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img src="/src/assets/navLogo.svg" alt="Logo" />
            </div>
            <nav>
                <ul>
                    {navItems.map((item) => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <ProfileSection contentComponent={null} />
        </div>
    );
};

export default Navbar;

{
    /* */
}
