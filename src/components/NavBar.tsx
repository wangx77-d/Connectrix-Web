import React from 'react';
import { Link } from 'react-router-dom';

// Define a type for navigation items
type NavItem = {
  to: string;
  label: string;
};

// Create an array of navigation items
const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/profile', label: 'Profile' },
  { to: '/list-item', label: 'List Item' },
];

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
