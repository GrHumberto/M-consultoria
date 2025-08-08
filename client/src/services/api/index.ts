/**
 * @fileoverview Cliente de API centralizado para M-C Consultoría
 * @version 1.0.0
 * @author M-C Consultoría Development Team
 *
 * Este archivo configura el cliente HTTP principal y centraliza
 * todas las llamadas a la API del backend.
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// ==========================================
// CONFIGURACIÓN BASE
// ==========================================

/**
 * Configuración base del cliente API
 */
const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_URL || "/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Cliente HTTP principal usando Axios
 */
const apiClient: AxiosInstance = axios.create(API_CONFIG);

// ==========================================
// INTERCEPTORES
// ==========================================

/**
 * Interceptor de peticiones - Añade token de autenticación
 */
apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("mc_auth_token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Añadir timestamp para debugging
    if (import.meta.env.DEV) {
      console.log(
        `[API REQUEST] ${config.method?.toUpperCase()} ${config.url}`,
        {
          data: config.data,
          params: config.params,
        },
      );
    }

    return config;
  },
  (error) => {
    console.error("[API REQUEST ERROR]", error);
    return Promise.reject(error);
  },
);

/**
 * Interceptor de respuestas - Maneja errores globales
 */
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log de respuestas en desarrollo
    if (import.meta.env.DEV) {
      console.log(
        `[API RESPONSE] ${response.config.method?.toUpperCase()} ${response.config.url}`,
        {
          status: response.status,
          data: response.data,
        },
      );
    }

    return response.data; // Retorna directamente los datos
  },
  (error) => {
    console.error("[API RESPONSE ERROR]", error);

    // Manejo específico de errores
    if (error.response) {
      const status = error.response.status;
      const data = error.response.data;

      switch (status) {
        case 401:
          // Token expirado o inválido
          localStorage.removeItem("mc_auth_token");
          localStorage.removeItem("mc_auth_user");
          window.location.href = "/login";
          break;

        case 403:
          // Sin permisos
          console.warn("Acceso denegado:", data.error);
          break;

        case 404:
          // Recurso no encontrado
          console.warn("Recurso no encontrado:", data.error);
          break;

        case 422:
          // Errores de validación
          console.warn("Errores de validación:", data.details?.validation);
          break;

        case 500:
          // Error del servidor
          console.error("Error del servidor:", data.error);
          break;
      }

      return Promise.reject(data);
    } else if (error.request) {
      // Error de red
      const networkError = {
        success: false,
        error: "Error de conexión. Verifica tu conexión a internet.",
        code: "NETWORK_ERROR",
      };
      return Promise.reject(networkError);
    } else {
      // Otro tipo de error
      return Promise.reject({
        success: false,
        error: error.message || "Error desconocido",
        code: "UNKNOWN_ERROR",
      });
    }
  },
);

// ==========================================
// TIPOS DE RESPUESTA
// ==========================================

/**
 * Estructura estándar de respuesta de la API
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp?: string;
}

/**
 * Respuesta paginada
 */
export interface PaginatedResponse<T> {
  items: T[];
  pagination: {
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
  };
}

// ==========================================
// MÉTODOS DE CONVENIENCIA
// ==========================================

/**
 * Métodos HTTP simplificados
 */
export const api = {
  /**
   * Petición GET
   */
  get: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> => apiClient.get(url, config),

  /**
   * Petición POST
   */
  post: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> => apiClient.post(url, data, config),

  /**
   * Petición PUT
   */
  put: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> => apiClient.put(url, data, config),

  /**
   * Petición DELETE
   */
  delete: <T = any>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> => apiClient.delete(url, config),

  /**
   * Petición PATCH
   */
  patch: <T = any>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<ApiResponse<T>> => apiClient.patch(url, data, config),
};

// ==========================================
// SERVICIOS ESPECÍFICOS
// ==========================================

/**
 * Servicio de autenticación
 */
export const authApi = {
  login: (email: string, password: string) =>
    api.post("/auth/login", { email, password }),

  register: (userData: {
    email: string;
    password: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno?: string;
  }) => api.post("/auth/register", userData),

  logout: () => api.post("/auth/logout"),

  refreshToken: (refreshToken: string) =>
    api.post("/auth/refresh", { refreshToken }),

  getProfile: () => api.get("/users/profile"),
};

/**
 * Servicio de productos
 */
export const productsApi = {
  getAll: (params?: {
    page?: number;
    limit?: number;
    categoria?: string;
    search?: string;
  }) => api.get("/products", { params }),

  getById: (id: string) => api.get(`/products/${id}`),

  create: (productData: {
    titulo: string;
    descripcion: string;
    categoria: string;
    imagen_url: string;
    caracteristicas?: string[];
    aplicaciones?: string[];
    especificaciones?: string[];
  }) => api.post("/products", productData),

  update: (id: string, productData: any) =>
    api.put(`/products/${id}`, productData),

  delete: (id: string) => api.delete(`/products/${id}`),
};

/**
 * Servicio de servicios/solicitudes
 */
export const servicesApi = {
  getDictamenes: () => api.get("/services/dictamenes"),

  getTramites: () => api.get("/services/tramites"),

  solicitar: (solicitudData: {
    tipo_servicio: "dictamen" | "tramite";
    subtipo_servicio: string;
    email: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno?: string;
    telefono: string;
    nombre_empresa: string;
    ubicacion: string;
    comentarios?: string;
  }) => api.post("/services/solicitar", solicitudData),
};

/**
 * Servicio de solicitudes (admin)
 */
export const solicitudesApi = {
  getAll: (params?: {
    page?: number;
    limit?: number;
    tipo?: string;
    status?: string;
    fecha_desde?: string;
    fecha_hasta?: string;
  }) => api.get("/solicitudes", { params }),

  getById: (id: string) => api.get(`/solicitudes/${id}`),

  updateStatus: (id: string, status: string, comentario_admin?: string) =>
    api.put(`/solicitudes/${id}/status`, { status, comentario_admin }),
};

// ==========================================
// UTILIDADES
// ==========================================

/**
 * Verifica si una respuesta fue exitosa
 */
export const isApiSuccess = (response: any): boolean => {
  return response && response.success === true;
};

/**
 * Extrae el mensaje de error de una respuesta
 */
export const getApiError = (error: any): string => {
  if (typeof error === "string") return error;
  if (error?.error) return error.error;
  if (error?.message) return error.message;
  return "Error desconocido";
};

/**
 * Configura el token de autenticación
 */
export const setAuthToken = (token: string): void => {
  localStorage.setItem("mc_auth_token", token);
};

/**
 * Elimina el token de autenticación
 */
export const clearAuthToken = (): void => {
  localStorage.removeItem("mc_auth_token");
  localStorage.removeItem("mc_auth_user");
};

// Exportar cliente por defecto
export default apiClient;
