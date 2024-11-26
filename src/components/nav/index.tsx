import React from 'react';
import { NavLink } from 'react-router-dom';
import '@/styles/nav.css';
import { Avatar } from '@/components/ui/avatar';

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
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-profile">
        <Avatar size="lg" />
      </div>
    </nav>
  );
};

export default Navbar;
