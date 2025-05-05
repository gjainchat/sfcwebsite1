// src/pages/GetInvolvedPage.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const GetInvolvedPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Get Involved</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Donate</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Support our mission by making a donation to help artisans and their communities.</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Donate Now</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Volunteer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Join our volunteer program and contribute your skills to make a difference.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Partner</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Become a corporate partner and support sustainable fair trade practices.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Contact Us</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default GetInvolvedPage;