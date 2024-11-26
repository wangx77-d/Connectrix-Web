import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@/styles/nav.css';
import { Avatar } from '@/components/ui/avatar';
import { LoginForm } from './loginForm';
// import { Icon } from '@chakra-ui/react';
// import { IoNotificationsCircle } from 'react-icons/io5';

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
    const [showMenu, setShowMenu] = useState(false);

    const handleAvatarClick = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log('Avatar clicked', e);
        setShowMenu(!showMenu);
    };

    const handleClose = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav>
            <div className="nav-logo">
                <img src="/src/assets/navLogo.svg" alt="Logo" />
            </div>
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
            <div className="nav-profile">
                {/* <SearchBar /> */}
                {/* <IconButton size="sm"> */}
                {/* <Icon fontSize="25px">
                    <IoNotificationsCircle />
                </Icon> */}
                {/* </IconButton> */}
                <Avatar size="lg" onClick={handleAvatarClick} />
            </div>

            <LoginForm isOpen={showMenu} onClose={handleClose} />
        </nav>
    );
};

export default Navbar;
