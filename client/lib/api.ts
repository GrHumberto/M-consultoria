/**
 * @fileoverview API client for authentication and database operations
 * Frontend-side API client
 */

// API base URL
const API_BASE = '/api';

// API client interface
export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// User data interfaces
export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'user';
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
}

// API client
export const apiClient = {
  // Test database connection
  async testDatabase(): Promise<APIResponse> {
    try {
      const response = await fetch(`${API_BASE}/test-db`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Database test error:', error);
      return {
        success: false,
        error: 'Error al conectar con el servidor'
      };
    }
  },

  // User login
  async login(loginData: LoginData): Promise<APIResponse<{ user: User }>> {
    try {
      console.log('[CLIENT] Attempting login for:', loginData.email);

      const response = await fetch(`${API_BASE}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData)
      });

      console.log('[CLIENT] Response status:', response.status);

      const data = await response.json();
      console.log('[CLIENT] Response data:', data);

      // Return the data as is - the server handles success/error properly
      return data;
    } catch (error) {
      console.error('Login API error:', error);
      return {
        success: false,
        error: 'Error al conectar con el servidor'
      };
    }
  },

  // User registration
  async register(registerData: RegisterData): Promise<APIResponse<{ user: User }>> {
    try {
      const response = await fetch(`${API_BASE}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData)
      });

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Register API error:', error);
      return {
        success: false,
        error: 'Error al conectar con el servidor'
      };
    }
  }
};

// Demo users fallback (for offline development)
export const DEMO_USERS = {
  'admin@mc.com': {
    id: '1',
    email: 'admin@mc.com',
    password: 'admin123',
    profile: {
      id: '1',
      email: 'admin@mc.com',
      full_name: 'Administrador MC',
      role: 'admin' as const
    }
  },
  'user@mc.com': {
    id: '2',
    email: 'user@mc.com',
    password: 'user123',
    profile: {
      id: '2',
      email: 'user@mc.com',
      full_name: 'Usuario Demo',
      role: 'user' as const
    }
  }
};
