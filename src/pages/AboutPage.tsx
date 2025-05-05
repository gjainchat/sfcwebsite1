// src/pages/AboutPage.jsx
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Shop For Change</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-lg text-gray-700 mb-6">
          Shop For Change is a fair trade organization dedicated to empowering artisans
          and promoting sustainable livelihoods through fair trade practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To create sustainable economic opportunities for artisans through fair trade
              partnerships and market access.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              A world where traditional artisans thrive through fair trade, preserving
              cultural heritage while building sustainable livelihoods.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;