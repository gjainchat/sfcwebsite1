// src/services/localStorage.ts
const LOCAL_STORAGE_KEYS = {
  AUTH: 'shop_for_change_auth',
  FORMS: 'shop_for_change_forms',
  ANALYTICS: 'shop_for_change_analytics',
};

export interface StorageData {
  auth?: {
    isAuthenticated: boolean;
    user: {
      email: string;
      role: string;
    } | null;
  };
  forms?: Array<{
    id: string;
    type: string;
    data: Record<string, any>;
    createdAt: string;
  }>;
  analytics?: Array<{
    id: string;
    event: string;
    data: Record<string, any>;
    timestamp: string;
  }>;
}

export const storage = {
  get: <T>(key: keyof typeof LOCAL_STORAGE_KEYS): T | null => {
    const item = localStorage.getItem(LOCAL_STORAGE_KEYS[key]);
    return item ? JSON.parse(item) : null;
  },

  set: <T>(key: keyof typeof LOCAL_STORAGE_KEYS, value: T): void => {
    localStorage.setItem(LOCAL_STORAGE_KEYS[key], JSON.stringify(value));
  },

  remove: (key: keyof typeof LOCAL_STORAGE_KEYS): void => {
    localStorage.removeItem(LOCAL_STORAGE_KEYS[key]);
  },

  clear: (): void => {
    Object.values(LOCAL_STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  },
};