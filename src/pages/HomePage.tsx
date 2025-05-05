// src/pages/HomePage.jsx
import React from 'react';
import Hero from '@/components/sections/Hero';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>1000+</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Artisans Supported</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Communities Reached</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>₹10M+</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Fair Trade Revenue Generated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;