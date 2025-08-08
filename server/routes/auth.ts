/**
 * @fileoverview Authentication API endpoints
 */

import { dbOperations } from '../db/postgres';

// Demo users fallback
const DEMO_USERS = {
  'admin@mc.com': {
    id: '1',
    email: 'admin@mc.com',
    password: 'admin123',
    nombre: 'Administrador',
    apellido_paterno: 'MC',
    apellido_materno: 'Sistema',
    role: 'admin'
  },
  'user@mc.com': {
    id: '2',
    email: 'user@mc.com',
    password: 'user123',
    nombre: 'Usuario',
    apellido_paterno: 'Demo',
    apellido_materno: null,
    role: 'user'
  },
  'grcarlos2005@gmail.com': {
    id: '3',
    email: 'grcarlos2005@gmail.com',
    password: 'Galletas',
    nombre: 'Carlos',
    apellido_paterno: 'García',
    apellido_materno: null,
    role: 'user'
  }
};

export const authHandlers = {
  // Test database connection
  async testDB() {
    const result = await dbOperations.testConnection();
    return {
      status: result.success ? 200 : 500,
      data: result
    };
  },

  // User login
  async login(email: string, password: string) {
    try {
      console.log('Attempting to login user:', email);

      // Try database first
      const dbResult = await dbOperations.verifyUser(email, password);

      if (dbResult.success && dbResult.data) {
        const userData = dbResult.data;
        console.log('User authenticated with database:', userData.email);
        return {
          status: 200,
          data: {
            success: true,
            user: {
              id: userData.id,
              email: userData.email,
              full_name: `${userData.nombre} ${userData.apellido_paterno}`,
              role: userData.role
            }
          }
        };
      }

      console.log('Database authentication failed, trying demo users');

      // Fallback to demo users if database fails or user not found
      const demoUser = DEMO_USERS[email as keyof typeof DEMO_USERS];
      if (demoUser && demoUser.password === password) {
        console.log('User authenticated with demo mode:', demoUser.email);
        return {
          status: 200,
          data: {
            success: true,
            user: {
              id: demoUser.id,
              email: demoUser.email,
              full_name: `${demoUser.nombre} ${demoUser.apellido_paterno}`,
              role: demoUser.role
            },
            demo: true // Indicate this is demo mode
          }
        };
      }

      console.log('Authentication failed for:', email);
      return {
        status: 401,
        data: {
          success: false,
          error: 'Credenciales incorrectas'
        }
      };
    } catch (error) {
      console.error('Login error:', error);
      return {
        status: 500,
        data: {
          success: false,
          error: 'Error interno del servidor'
        }
      };
    }
  },

  // User registration
  async register(userData: {
    email: string;
    password: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno?: string;
  }) {
    try {
      console.log('Attempting to register user:', userData.email);

      // Try database first
      const dbResult = await dbOperations.createUser(userData);

      if (dbResult.success && dbResult.data) {
        const newUser = dbResult.data;
        console.log('User created in database:', newUser.email);
        return {
          status: 201,
          data: {
            success: true,
            user: {
              id: newUser.id,
              email: newUser.email,
              full_name: `${newUser.nombre} ${newUser.apellido_paterno}`,
              role: newUser.role
            }
          }
        };
      }

      console.log('Database creation failed, falling back to demo mode');

      // Fallback: Create demo user when database fails
      if (DEMO_USERS[userData.email as keyof typeof DEMO_USERS]) {
        return {
          status: 400,
          data: {
            success: false,
            error: 'El email ya está registrado'
          }
        };
      }

      // Create demo user
      const demoUser = {
        id: Date.now().toString(),
        email: userData.email,
        nombre: userData.nombre,
        apellido_paterno: userData.apellido_paterno,
        apellido_materno: userData.apellido_materno,
        role: 'user'
      };

      console.log('Created demo user:', demoUser.email);

      return {
        status: 201,
        data: {
          success: true,
          user: {
            id: demoUser.id,
            email: demoUser.email,
            full_name: `${demoUser.nombre} ${demoUser.apellido_paterno}`,
            role: demoUser.role
          },
          demo: true // Indicate this is demo mode
        }
      };

    } catch (error) {
      console.error('Registration error:', error);
      return {
        status: 500,
        data: {
          success: false,
          error: 'Error interno del servidor'
        }
      };
    }
  }
};
