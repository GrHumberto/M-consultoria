/**
 * @fileoverview Authentication hook with API client
 * @version 3.0.0
 */

import { useState, useEffect, useCallback } from 'react';
import { apiClient, DEMO_USERS, type User } from '../lib/api';

interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  role: 'admin' | 'user';
}

interface AuthState {
  user: { id: string; email: string } | null;
  profile: UserProfile | null;
  loading: boolean;
  isAdmin: boolean;
}

/**
 * Custom hook for authentication with API client
 */
export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    profile: null,
    loading: true,
    isAdmin: false
  });

  // Initialize auth state from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('mc_auth_user');
    const savedProfile = localStorage.getItem('mc_auth_profile');
    
    if (savedUser && savedProfile) {
      try {
        const user = JSON.parse(savedUser);
        const profile = JSON.parse(savedProfile);
        
        setAuthState({
          user,
          profile,
          loading: false,
          isAdmin: profile.role === 'admin'
        });
      } catch (error) {
        console.error('Error parsing saved auth data:', error);
        localStorage.removeItem('mc_auth_user');
        localStorage.removeItem('mc_auth_profile');
        setAuthState(prev => ({ ...prev, loading: false }));
      }
    } else {
      setAuthState(prev => ({ ...prev, loading: false }));
    }
  }, []);

  // Sign in function
  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true }));

      // Try API first
      const apiResult = await apiClient.login({ email, password });
      console.log('[useAuth] API result:', apiResult);

      if (apiResult.success && apiResult.user) {
        const userData = apiResult.user;
        
        const user = {
          id: userData.id,
          email: userData.email
        };

        const profile = {
          id: userData.id,
          email: userData.email,
          full_name: userData.full_name,
          role: userData.role
        };

        // Save to localStorage
        localStorage.setItem('mc_auth_user', JSON.stringify(user));
        localStorage.setItem('mc_auth_profile', JSON.stringify(profile));

        setAuthState({
          user,
          profile,
          loading: false,
          isAdmin: profile.role === 'admin'
        });

        return { success: true, data: { user, profile } };
      }

      // Fallback to demo users if API fails
      console.warn('API failed, trying demo users');
      
      const demoUser = DEMO_USERS[email as keyof typeof DEMO_USERS];
      
      if (demoUser && demoUser.password === password) {
        const user = {
          id: demoUser.id,
          email: demoUser.email
        };
        
        const profile = demoUser.profile;

        // Save to localStorage
        localStorage.setItem('mc_auth_user', JSON.stringify(user));
        localStorage.setItem('mc_auth_profile', JSON.stringify(profile));

        setAuthState({
          user,
          profile,
          loading: false,
          isAdmin: profile.role === 'admin'
        });

        return { success: true, data: { user, profile } };
      }

      throw new Error(apiResult.error || 'Credenciales incorrectas');

    } catch (error: any) {
      console.error('Sign in error:', error);
      setAuthState(prev => ({ ...prev, loading: false }));
      return { 
        success: false, 
        error: error.message || 'Error al iniciar sesión' 
      };
    }
  }, []);

  // Sign up function
  const signUp = useCallback(async (
    email: string, 
    password: string, 
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno?: string
  ) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true }));

      // Try API first
      const apiResult = await apiClient.register({
        email,
        password,
        nombre,
        apellido_paterno: apellidoPaterno,
        apellido_materno: apellidoMaterno
      });
      
      if (apiResult.success && apiResult.data?.user) {
        const userData = apiResult.data.user;
        
        const user = {
          id: userData.id,
          email: userData.email
        };

        const profile = {
          id: userData.id,
          email: userData.email,
          full_name: userData.full_name,
          role: userData.role
        };

        // Save to localStorage
        localStorage.setItem('mc_auth_user', JSON.stringify(user));
        localStorage.setItem('mc_auth_profile', JSON.stringify(profile));

        setAuthState({
          user,
          profile,
          loading: false,
          isAdmin: false
        });

        return { success: true, data: { user, profile } };
      }

      // If API fails, try demo mode
      console.warn('API failed, trying demo mode');
      
      // Check if email already exists in demo users
      if (DEMO_USERS[email as keyof typeof DEMO_USERS]) {
        throw new Error('El email ya está registrado');
      }

      // Create demo user
      const newUser = {
        id: Date.now().toString(),
        email
      };

      const newProfile = {
        id: newUser.id,
        email,
        full_name: `${nombre} ${apellidoPaterno}`,
        role: 'user' as const
      };

      // Save to localStorage
      localStorage.setItem('mc_auth_user', JSON.stringify(newUser));
      localStorage.setItem('mc_auth_profile', JSON.stringify(newProfile));

      setAuthState({
        user: newUser,
        profile: newProfile,
        loading: false,
        isAdmin: false
      });

      return { success: true, data: { user: newUser, profile: newProfile } };

    } catch (error: any) {
      console.error('Sign up error:', error);
      setAuthState(prev => ({ ...prev, loading: false }));
      return { 
        success: false, 
        error: error.message || 'Error al registrarse' 
      };
    }
  }, []);

  // Sign out function
  const signOut = useCallback(async () => {
    try {
      setAuthState(prev => ({ ...prev, loading: true }));

      // Clear localStorage
      localStorage.removeItem('mc_auth_user');
      localStorage.removeItem('mc_auth_profile');

      // Reset state
      setAuthState({
        user: null,
        profile: null,
        loading: false,
        isAdmin: false
      });

      return { success: true };
    } catch (error: any) {
      console.error('Sign out error:', error);
      setAuthState(prev => ({ ...prev, loading: false }));
      return { 
        success: false, 
        error: error.message || 'Error al cerrar sesión' 
      };
    }
  }, []);

  return {
    ...authState,
    signIn,
    signUp,
    signOut
  };
}
