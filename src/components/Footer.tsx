import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Anand Digital PR</h3>
            <p className="text-gray-400">
              Your trusted partner for innovative digital PR solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://www.ananddigitalpr.com/services" className="hover:text-white transition">
                  Public Relations
                </a>
              </li>
              <li>
                <a href="https://www.ananddigitalpr.com/services" className="hover:text-white transition">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="https://www.ananddigitalpr.com/services" className="hover:text-white transition">
                  SEO & Analytics
                </a>
              </li>
              <li>
                <a href="https://www.ananddigitalpr.com/services" className="hover:text-white transition">
                  Website Design & Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="https://www.ananddigitalpr.com/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.ananddigitalpr.com/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.ananddigitalpr.com/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition">Facebook</a></li>
              <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Anand Digital PR. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
