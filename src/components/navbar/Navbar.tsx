// src/components/navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/assets/images/logo.jpg" 
              alt="Shop For Change Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary">About</Link>
            <Link to="/programs" className="text-gray-700 hover:text-primary">Programs</Link>
            <Link to="/impact" className="text-gray-700 hover:text-primary">Impact</Link>
            <Link to="/get-involved" className="text-gray-700 hover:text-primary">Get Involved</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="default">
              <Link to="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;