/**
 * @fileoverview Supabase client configuration for M-C Consultoría
 * @version 1.0.0
 */

import { createClient } from '@supabase/supabase-js';

// Supabase configuration - Using environment variables with fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key';

// Create mock client if no real credentials provided
const createMockClient = () => ({
  auth: {
    getSession: () => Promise.resolve({ data: { session: null }, error: null }),
    signInWithPassword: () => Promise.resolve({
      data: { user: null, session: null },
      error: { message: 'Demo mode - Supabase not configured' }
    }),
    signUp: () => Promise.resolve({
      data: { user: null, session: null },
      error: { message: 'Demo mode - Supabase not configured' }
    }),
    signOut: () => Promise.resolve({ error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } })
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: { message: 'Demo mode' } }),
        order: () => Promise.resolve({ data: [], error: null })
      })
    }),
    insert: () => ({
      select: () => ({
        single: () => Promise.resolve({ data: null, error: { message: 'Demo mode' } })
      })
    }),
    update: () => ({
      eq: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: null, error: { message: 'Demo mode' } })
        })
      })
    })
  })
});

export const supabase = (supabaseUrl === 'https://demo.supabase.co')
  ? createMockClient()
  : createClient(supabaseUrl, supabaseAnonKey);

// Database Types (basadas en database.sql)
export interface Database {
  public: {
    Tables: {
      usuarios: {
        Row: {
          id: string;
          email: string;
          password_hash: string;
          nombre: string;
          apellido_paterno: string;
          apellido_materno: string | null;
          role: 'admin' | 'user';
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          password_hash: string;
          nombre: string;
          apellido_paterno: string;
          apellido_materno?: string | null;
          role?: 'admin' | 'user';
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          password_hash?: string;
          nombre?: string;
          apellido_paterno?: string;
          apellido_materno?: string | null;
          role?: 'admin' | 'user';
          is_active?: boolean;
          updated_at?: string;
        };
      };
      productos: {
        Row: {
          id: string;
          titulo: string;
          descripcion: string;
          categoria: string;
          imagen_url: string;
          caracteristicas: string[];
          aplicaciones: string[];
          especificaciones: string[];
          is_active: boolean;
          created_at: string;
          updated_at: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          titulo: string;
          descripcion: string;
          categoria: string;
          imagen_url: string;
          caracteristicas?: string[];
          aplicaciones?: string[];
          especificaciones?: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
          created_by?: string | null;
        };
        Update: {
          id?: string;
          titulo?: string;
          descripcion?: string;
          categoria?: string;
          imagen_url?: string;
          caracteristicas?: string[];
          aplicaciones?: string[];
          especificaciones?: string[];
          is_active?: boolean;
          updated_at?: string;
        };
      };
      solicitudes_servicio: {
        Row: {
          id: string;
          tipo_servicio: 'dictamen' | 'tramite';
          subtipo_servicio: string;
          email: string;
          nombre: string;
          apellido_paterno: string;
          apellido_materno: string | null;
          telefono: string;
          nombre_empresa: string;
          ubicacion: string;
          comentarios: string | null;
          status: 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          tipo_servicio: 'dictamen' | 'tramite';
          subtipo_servicio: string;
          email: string;
          nombre: string;
          apellido_paterno: string;
          apellido_materno?: string | null;
          telefono: string;
          nombre_empresa: string;
          ubicacion: string;
          comentarios?: string | null;
          status?: 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          status?: 'pendiente' | 'en_proceso' | 'completado' | 'cancelado';
          updated_at?: string;
        };
      };
      solicitudes_producto: {
        Row: {
          id: string;
          producto_id: string;
          email: string;
          nombre: string;
          telefono: string | null;
          mensaje: string | null;
          metodo_contacto: 'email' | 'whatsapp';
          status: 'pendiente' | 'contactado' | 'cerrado';
          created_at: string;
        };
        Insert: {
          id?: string;
          producto_id: string;
          email: string;
          nombre: string;
          telefono?: string | null;
          mensaje?: string | null;
          metodo_contacto?: 'email' | 'whatsapp';
          status?: 'pendiente' | 'contactado' | 'cerrado';
          created_at?: string;
        };
        Update: {
          status?: 'pendiente' | 'contactado' | 'cerrado';
        };
      };
    };
  };
}
