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

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
           
            </div>
            <b className="text-4xl font-bold text-gray-900 mb-4">AnandDigitalBlog</b>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">© 2024 Digital Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
