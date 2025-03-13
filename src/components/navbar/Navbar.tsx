import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Newspaper } from 'lucide-react';
import { NavLink } from './NavLink';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        isScrolled ? 'shadow-sm bg-white/90 backdrop-blur-sm' : 'white'
      }`}
    >
      <div className="container">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2 text-primary"
        >
          <Newspaper className="h-6 w-6" />
          <span className="font-bold">Anand Digital Blog</span>
        </Link>

        <button
          className="navbar-toggler border-0 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        <div
          className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <SearchBar />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
