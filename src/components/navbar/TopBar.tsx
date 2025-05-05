// src/components/navbar/TopBar.jsx
import React from 'react';
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-primary text-white py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2" />
          <a href="mailto:info@shopforchange.org" className="text-sm">
            info@shopforchange.org
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-4 w-4" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;