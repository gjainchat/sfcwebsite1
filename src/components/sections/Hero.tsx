// src/components/sections/Hero.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div 
      className="relative h-[600px] bg-cover bg-center"
      style={{
        backgroundImage: 'url(/assets/images/hero-bg.png)'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Empowering Artisans Through Fair Trade
          </h1>
          <p className="text-xl mb-8">
            Join us in creating sustainable livelihoods and preserving traditional crafts
            through fair trade practices.
          </p>
          <div className="flex space-x-4">
            <Button asChild size="lg">
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;