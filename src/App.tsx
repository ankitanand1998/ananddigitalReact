import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Digitailmarketing from './pages/Digitailmarketing';
import Digitailmarketinganand from './pages/Digitailmarketinginanand';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/noida/delhi-ncr/digital-marketing-company-india" element={<Digitailmarketing/>} />
            <Route path="/india/gujarat/digital-marketing-company-anand" element={<Digitailmarketinganand/>} />
            
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
