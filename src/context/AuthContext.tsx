// src/context/AuthContext.tsx
import React, { createContext, useEffect, useState } from 'react';
import { authService } from '../services/auth';

interface AuthContextType {
  isAuthenticated: boolean;
  user: { email: string; role: string } | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ email: string; role: string } | null>(null);

  useEffect(() => {
    const authData = authService.checkAuth();
    if (authData) {
      setIsAuthenticated(authData.isAuthenticated);
      setUser(authData.user);
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const authData = await authService.login({ email, password });
      setIsAuthenticated(authData.isAuthenticated);
      setUser(authData.user);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    authService.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};