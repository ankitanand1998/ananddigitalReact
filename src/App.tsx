import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Navbar } from "./components/navbar/Navbar";
import { HomePage } from './pages/HomePage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { AboutPage } from './pages/AboutPage';
import { Sitemap } from "./pages/Sitemap";
import { RobotsTxt } from "./pages/RobotsTxt";
import {CategoryPage} from "./pages/CategoryPage";



function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/:url" element={<BlogDetailPage />} />
            <Route path="/sitemap.xml" element={<Sitemap />} /> 
            <Route path="/robots.txt" element={<RobotsTxt />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
           
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
