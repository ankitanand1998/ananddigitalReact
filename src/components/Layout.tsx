import React from 'react';
import { Navbar } from './navbar/Navbar';
import '../styles/navbar.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-light">
      <Navbar />
      <div className="pt-5 mt-4">
        {children}
      </div>

      <footer className="bg-gray-800 text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2024 Anand Digital Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
