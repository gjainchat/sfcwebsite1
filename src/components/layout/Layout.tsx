// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from '../navbar/Navbar';
import TopBar from '../navbar/TopBar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;