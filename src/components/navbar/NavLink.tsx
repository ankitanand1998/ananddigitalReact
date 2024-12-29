import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `nav-link position-relative px-3 py-2 ${
          isActive ? 'text-primary' : 'text-dark'
        } hover:text-primary transition-colors duration-200`
      }
    >
      {children}
    </RouterNavLink>
  );
};