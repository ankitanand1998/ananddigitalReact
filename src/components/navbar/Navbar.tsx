import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Newspaper } from "lucide-react";
import { NavLink } from "./NavLink";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSeoPopupOpen, setIsSeoPopupOpen] = useState(false); // Fixed: Re-added this state

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
              <NavLink to="/category/Latest">Latest</NavLink>
            </li>
            <li
              className="nav-item position-relative"
              onMouseEnter={() => setIsSeoPopupOpen(true)}
              onMouseLeave={() => setIsSeoPopupOpen(false)}
            >
              <NavLink to="#">SEO</NavLink>
              {isSeoPopupOpen && (
                <div className={`w-100 vh-90 bg-white shadow-lg p-4 d-flex flex-column flex-lg-row z-index-1000 overflow-auto ${isMobileMenuOpen ? 'position-static' : 'position-fixed top-15 start-0'}`}>
                  {/* Left Side Menu */}
                  <div className="w-100 w-lg-50 p-3">
                    <h4>SEO Categories</h4>
                    <ul className="list-unstyled">
                      <li><NavLink to="/category/Onpage SEO">On-Page SEO</NavLink></li>
                      <li><NavLink to="/category/Offpage SEO">Off-Page SEO</NavLink></li>
                      <li><NavLink to="/category/Technical SEO">Technical SEO</NavLink></li>
                      <li><NavLink to="/category/SEO Tools">SEO Tools</NavLink></li>
                    </ul>
                  </div>

                  {/* Right Side Banner */}
                  <div className="w-100 w-lg-50 p-3 text-center bg-light">
                    <h3>Improve Your SEO</h3>
                    <p>Discover the latest SEO techniques to rank higher in search engines.</p>
                   <img src="https://img.freepik.com/free-vector/seo-concept-illustration_24908-61531.jpg?t=st=1742970432~exp=1742974032~hmac=734fa646a613552f0f95e72865eb47f906aad9ab7ca4e4fad975b9dbe57886ad" 
     alt="best SEO Services Agency" 
     className="img-fluid rounded" 
     style={{ height: "200px", width: "400px" }} />

                   
                  </div>
                </div>
              )}
            </li>
            <li className="nav-item">
              <NavLink to="/category/Digital">Digital</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Web">Web</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Advertise">Advertise</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/Guides">Guides</NavLink>
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
