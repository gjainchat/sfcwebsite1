// src/components/forms/ContactForm.jsx
import React, { useState } from 'react';
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { emailService } from '../../utils/emailService';
import { analyticsService } from '../../utils/analytics';

const ContactForm = ({ formType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email
      await emailService.sendEmail({
        to: 'sfcinfomail@gmail.com',
        subject: `New ${formType} Form Submission: ${formData.subject}`,
        formData
      });

      // Store locally
      const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString(),
        type: formType
      });
      localStorage.setItem('formSubmissions', JSON.stringify(submissions));

      // Track analytics
      analyticsService.trackFormSubmission(formType);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
        />
      </div>

      {submitStatus === 'success' && (
        <div className="text-green-600">
          Thank you for your message. We'll get back to you soon!
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="text-red-600">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;