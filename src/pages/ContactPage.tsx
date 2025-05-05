// src/pages/ContactPage.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input type="text" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="Your email" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <Textarea placeholder="Your message" rows={4} />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              123 Fair Trade Street<br />
              New Delhi, India
            </p>
            <p>
              <strong>Email:</strong><br />
              info@shopforchange.org
            </p>
            <p>
              <strong>Phone:</strong><br />
              +91 123-456-7890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;