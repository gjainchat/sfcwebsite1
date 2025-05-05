// Type definitions for React components
import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface HeroProps {
  title?: string;
  description?: string;
}

export interface CardProps {
  title: string;
  content: string;
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface AdminLoginFormData {
  email: string;
  password: string;
}