// src/utils/emailService.js
class EmailService {
  async sendEmail({ to, subject, formData }) {
    // For now, we'll just log the email data
    // In production, implement your email service (e.g., SendGrid, AWS SES)
    console.log('Sending email:', {
      to,
      subject,
      formData
    });

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
}

export const emailService = new EmailService();