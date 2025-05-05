// src/components/footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shop For Change</h3>
            <p className="text-gray-400">
              Empowering artisans and promoting fair trade practices for a sustainable future.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white">Programs</Link></li>
              <li><Link to="/impact" className="text-gray-400 hover:text-white">Impact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Fair Trade Street</li>
              <li>New Delhi, India</li>
              <li>Phone: +91 123-456-7890</li>
              <li>Email: info@shopforchange.org</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 bg-gray-800 rounded"
            />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Shop For Change. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;