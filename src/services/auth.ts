// src/services/auth.ts
import { storage } from './localStorage';

interface Credentials {
  email: string;
  password: string;
}

const ADMIN_CREDENTIALS = {
  email: 'admin@shopforchange.org',
  password: 'admin123', // In a real app, this would be hashed and stored securely
};

export const authService = {
  login: async ({ email, password }: Credentials) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
      const authData = {
        isAuthenticated: true,
        user: {
          email: ADMIN_CREDENTIALS.email,
          role: 'admin',
        },
      };
      storage.set('auth', authData);
      return authData;
    }

    throw new Error('Invalid credentials');
  },

  logout: () => {
    storage.remove('auth');
  },

  checkAuth: () => {
    return storage.get('auth');
  },
};