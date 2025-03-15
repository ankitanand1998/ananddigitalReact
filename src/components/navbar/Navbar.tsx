import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Newspaper } from "lucide-react";
import { NavLink } from "./NavLink";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSeoPopupOpen, setIsSeoPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "shadow-sm bg-white/90 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-primary">
          <Newspaper className="h-6 w-6" />
          <span className="font-bold">Anand Digital Blog</span>
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button className="navbar-toggler border-0 p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Navigation Links */}
        <div className={`navbar-collapse ${isMobileMenuOpen ? "d-block" : "d-none d-lg-flex"}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 list-unstyled text-center">
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/">Latest</NavLink>
            </li>
            <li
              className="nav-item position-relative"
              onMouseEnter={() => setIsSeoPopupOpen(true)}
              onMouseLeave={() => setIsSeoPopupOpen(false)}
            >
              <NavLink to="#">SEO</NavLink>
              {isSeoPopupOpen && (
                <div className="position-fixed top-15 start-0 w-100 vh-90 bg-white shadow-lg p-4 d-flex flex-column flex-lg-row z-index-1000 overflow-auto">
                  {/* Left Side Menu */}
                  <div className="w-100 w-lg-50 p-3">
                    <h4>SEO Categories</h4>
                    <ul className="list-unstyled">
                      <li><NavLink to="/seo-onpage">On-Page SEO</NavLink></li>
                      <li><NavLink to="/seo-offpage">Off-Page SEO</NavLink></li>
                      <li><NavLink to="/seo-technical">Technical SEO</NavLink></li>
                      <li><NavLink to="/seo-tools">SEO Tools</NavLink></li>
                    </ul>
                  </div>

                  {/* Right Side Banner */}
                  <div className="w-100 w-lg-50 p-3 text-center bg-light">
                    <h3>Improve Your SEO</h3>
                    <p>Discover the latest SEO techniques to rank higher in search engines.</p>
                    <img src="/assets/seo-banner.jpg" alt="SEO Banner" className="img-fluid rounded" />
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <NavLink to="/content">Content</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/digital">Digital</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/web">Web</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/advertise">Advertise</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/guides">Guides</NavLink>
            </li>
          </ul>

          {/* Search and Theme Toggle */}
          <div className="d-flex align-items-center gap-3">
            <SearchBar />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
