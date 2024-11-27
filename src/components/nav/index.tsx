import React, { useEffect, useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '@/styles/nav.css';
import ProfileSection from '../profileNav';
import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  HStack,
} from '@chakra-ui/react';
import { Avatar } from '@/components/ui/avatar';
import { LoginForm } from '../profileNav/loginForm';

import ProfilePanel from '@/pages/profile/panel';

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

  const [showMenu, setShowMenu] = useState(false);

  const [rightSideComponent, setRightSideComponent] =
    useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (currentPath && currentPath.startsWith('/profile')) {
      setRightSideComponent(<ProfilePanel />);
    }
  }, [currentPath]);

  const handleAvatarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('Avatar clicked', e);
    setShowMenu(!showMenu);
  };

  const handleClose = () => {
    setShowMenu(!showMenu);
  };

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
            src="/src/assets/notification.svg"
            onClick={handleAvatarClick}
          />
          <Avatar size="lg" onClick={handleAvatarClick} />
        </Flex>
      </div>

      <LoginForm isOpen={showMenu} onClose={handleClose} />
      {/* <ProfileSection contentComponent={rightSideComponent} /> */}
    </div>
  );
};

export default Navbar;
