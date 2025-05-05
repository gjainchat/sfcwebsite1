// src/pages/ImpactPage.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ImpactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Impact</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <CardTitle>Economic Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Over 1000 artisans supported</li>
              <li>₹10M+ fair trade revenue generated</li>
              <li>50+ communities reached</li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Social Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>200+ women artisans empowered</li>
              <li>30+ craft traditions preserved</li>
              <li>15+ educational programs conducted</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImpactPage;