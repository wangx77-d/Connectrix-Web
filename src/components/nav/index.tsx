import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '@/styles/nav.css';
import { Flex, Input, IconButton } from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import { useNavigate } from 'react-router-dom';

import { IoLogOutOutline } from 'react-icons/io5';
import logoImg from '../../assets/navLogo.svg';
import notificationSvg from '../../assets/notification.svg';

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
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const [avatarIcon, setAvatarIcon] =
        useState<React.ReactNode>(null);

    useEffect(() => {
        console.log('Current path:', currentPath);
        if (currentPath && currentPath.startsWith('/profile')) {
            setAvatarIcon(<IoLogOutOutline />);
        } else {
            setAvatarIcon(null);
        }
    }, [currentPath]);

    const handleAvatarClick = (
        e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
    ) => {
        console.log('Avatar clicked', e);
        if (currentPath && currentPath.startsWith('/profile')) {
            navigate('/');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="nav-container">
            <div className="nav-logo">
                <img src={logoImg} alt="Logo" />
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
            <div className="nav-profile">
                <Flex justify="center" align="center" gap={4}>
                    <Input
                        className="nav-search"
                        placeholder="Search anything..."
                        variant="outline"
                        size="md"
                        bg="#1f1f1f"
                        color="white"
                    />
                    <Avatar
                        size="md"
                        src={notificationSvg}
                        onClick={handleAvatarClick}
                        className="nav-notification"
                    />

                    {currentPath === '/profile' ? (
                        <IconButton
                            aria-label="Logout"
                            rounded="full"
                            variant="outline"
                            colorPalette="gray"
                            bg="gray.800"
                            onClick={handleAvatarClick}
                        >
                            {avatarIcon}
                        </IconButton>
                    ) : (
                        <Avatar
                            size="lg"
                            onClick={handleAvatarClick}
                            className="nav-login"
                        />
                    )}
                </Flex>
            </div>
        </div>
    );
};

export default Navbar;
