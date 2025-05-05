// src/pages/ProgramsPage.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ProgramsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Programs</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Artisan Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Training and capacity building programs for artisans to enhance their skills
               and product quality.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Market Access</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Connecting artisans with national and international markets through our
               fair trade network.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Community Support</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Supporting artisan communities through healthcare, education, and
               social development initiatives.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramsPage;