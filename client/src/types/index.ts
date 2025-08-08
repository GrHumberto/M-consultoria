/**
 * @fileoverview Definiciones de tipos TypeScript centralizadas
 * @version 1.0.0
 * @author M-C Consultoría Development Team
 *
 * Este archivo contiene todas las definiciones de tipos utilizadas
 * en la aplicación M-C Consultoría para mantener consistencia
 * y facilitar el mantenimiento del código.
 */

// ==========================================
// TIPOS BASE Y UTILITARIOS
// ==========================================

/**
 * ID único del sistema
 */
export type ID = string;

/**
 * Timestamp ISO 8601
 */
export type Timestamp = string;

/**
 * Roles de usuario en el sistema
 */
export type UserRole = "admin" | "user";

/**
 * Estados de solicitudes
 */
export type SolicitudStatus =
  | "pendiente"
  | "en_proceso"
  | "completado"
  | "cancelado";

/**
 * Tipos de servicios ofrecidos
 */
export type TipoServicio = "dictamen" | "tramite";

/**
 * Categorías de productos
 */
export type CategoriaProducto =
  | "Equipo de Protección Personal (EPP)"
  | "Equipos de Emergencia"
  | "Señalamientos"
  | "Complementos para Protección y Respuesta";

/**
 * Tipos de dictámenes disponibles
 */
export type TipoDictamen =
  | "Dictamen Eléctrico"
  | "Dictamen Estructural"
  | "Dictamen de Sonido"
  | "Dictamen de Gas"
  | "Dictamen de Riesgo"
  | "Dictamen Hidráulico";

/**
 * Tipos de trámites disponibles
 */
export type TipoTramite =
  | "Factibilidad De Uso Y Destino De Suelo"
  | "Licencia De Funcionamiento"
  | "Aviso De Funcionamiento (COFEPRIS)"
  | "Constancias DC-3 (STPS)"
  | "Licencia De Anuncio"
  | "Licencia De Construcción";

// ==========================================
// INTERFACES DE ENTIDADES PRINCIPALES
// ==========================================

/**
 * Usuario del sistema
 */
export interface Usuario {
  id: ID;
  email: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
  role: UserRole;
  is_active: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
}

/**
 * Producto del catálogo
 */
export interface Producto {
  id: ID;
  titulo: string;
  descripcion: string;
  categoria: CategoriaProducto;
  imagen_url: string;
  caracteristicas: string[];
  aplicaciones: string[];
  especificaciones: string[];
  is_active: boolean;
  created_at: Timestamp;
  updated_at: Timestamp;
  created_by: ID;
  creado_por?: Usuario; // Populate del usuario que lo creó
}

/**
 * Solicitud de servicio (dictamen o trámite)
 */
export interface SolicitudServicio {
  id: ID;
  tipo_servicio: TipoServicio;
  subtipo_servicio: string;
  email: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
  telefono: string;
  nombre_empresa: string;
  ubicacion: string;
  comentarios?: string;
  status: SolicitudStatus;
  comentario_admin?: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

/**
 * Solicitud de producto
 */
export interface SolicitudProducto {
  id: ID;
  producto_id: ID;
  email: string;
  nombre: string;
  telefono?: string;
  mensaje?: string;
  metodo_contacto: "email" | "whatsapp";
  status: "pendiente" | "contactado" | "cerrado";
  created_at: Timestamp;
  producto?: Producto; // Populate del producto
}

// ==========================================
// INTERFACES DE FORMULARIOS
// ==========================================

/**
 * Datos de inicio de sesión
 */
export interface LoginForm {
  email: string;
  password: string;
  remember_me?: boolean;
}

/**
 * Datos de registro
 */
export interface RegistroForm {
  email: string;
  password: string;
  confirm_password: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
  accept_terms: boolean;
}

/**
 * Datos para crear/editar producto
 */
export interface ProductoForm {
  titulo: string;
  descripcion: string;
  categoria: CategoriaProducto;
  imagen_url: string;
  caracteristicas: string[];
  aplicaciones: string[];
  especificaciones: string[];
}

/**
 * Datos de solicitud de servicio
 */
export interface SolicitudServicioForm {
  tipo_servicio: TipoServicio;
  subtipo_servicio: string;
  email: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
  telefono: string;
  nombre_empresa: string;
  ubicacion: string;
  comentarios?: string;
}

// ==========================================
// INTERFACES DE COMPONENTES
// ==========================================

/**
 * Props base para componentes
 */
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Props para botones
 */
export interface ButtonProps extends BaseComponentProps {
  variant?: "orange" | "blue" | "outline-orange" | "outline-blue";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

/**
 * Props para badges/etiquetas
 */
export interface BadgeProps extends BaseComponentProps {
  variant?: "blue" | "orange" | "white";
  size?: "sm" | "md" | "lg";
}

/**
 * Props para tarjetas de servicio
 */
export interface ServiceCardProps extends BaseComponentProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

/**
 * Props para tarjetas de producto
 */
export interface ProductCardProps extends BaseComponentProps {
  producto: Producto;
  onSolicitar?: (producto: Producto) => void;
  onEdit?: (producto: Producto) => void;
  onDelete?: (id: ID) => void;
  isAdmin?: boolean;
}

/**
 * Props para modales
 */
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

// ==========================================
// INTERFACES DE API
// ==========================================

/**
 * Respuesta estándar de la API
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp?: Timestamp;
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

/**
 * Parámetros de paginación
 */
export interface PaginationParams {
  page?: number;
  limit?: number;
}

/**
 * Parámetros de búsqueda para productos
 */
export interface ProductSearchParams extends PaginationParams {
  categoria?: CategoriaProducto;
  search?: string;
}

/**
 * Parámetros de búsqueda para solicitudes
 */
export interface SolicitudSearchParams extends PaginationParams {
  tipo?: TipoServicio;
  status?: SolicitudStatus;
  fecha_desde?: string;
  fecha_hasta?: string;
}

// ==========================================
// INTERFACES DE ESTADO
// ==========================================

/**
 * Estado de autenticación
 */
export interface AuthState {
  user: Usuario | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  loading: boolean;
}

/**
 * Estado de productos
 */
export interface ProductsState {
  items: Producto[];
  loading: boolean;
  error: string | null;
  pagination: {
    current_page: number;
    total_pages: number;
    total_items: number;
  };
}

/**
 * Estado de modal
 */
export interface ModalState {
  isOpen: boolean;
  data?: any;
  loading?: boolean;
  error?: string | null;
}

// ==========================================
// INTERFACES DE CONFIGURACIÓN
// ==========================================

/**
 * Configuración de la aplicación
 */
export interface AppConfig {
  api: {
    baseUrl: string;
    timeout: number;
  };
  auth: {
    tokenKey: string;
    refreshTokenKey: string;
  };
  company: {
    name: string;
    email: string;
    phone: string;
    whatsapp: string;
    address: string;
  };
  features: {
    enableRegistration: boolean;
    enableProductRequests: boolean;
    enableServiceRequests: boolean;
  };
}

/**
 * Configuración de tema
 */
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

// ==========================================
// TIPOS DE EVENTOS
// ==========================================

/**
 * Eventos de autenticación
 */
export type AuthEvent =
  | { type: "LOGIN_SUCCESS"; user: Usuario; token: string }
  | { type: "LOGIN_ERROR"; error: string }
  | { type: "LOGOUT" }
  | { type: "TOKEN_REFRESH"; token: string };

/**
 * Eventos de productos
 */
export type ProductEvent =
  | { type: "PRODUCT_CREATED"; product: Producto }
  | { type: "PRODUCT_UPDATED"; product: Producto }
  | { type: "PRODUCT_DELETED"; id: ID };

/**
 * Eventos de solicitudes
 */
export type SolicitudEvent =
  | { type: "SOLICITUD_CREATED"; solicitud: SolicitudServicio }
  | { type: "SOLICITUD_STATUS_UPDATED"; id: ID; status: SolicitudStatus };

// ==========================================
// TIPOS DE UTILIDAD
// ==========================================

/**
 * Hace todas las propiedades opcionales excepto las especificadas
 */
export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/**
 * Hace todas las propiedades requeridas excepto las especificadas
 */
export type RequiredExcept<T, K extends keyof T> = Required<T> &
  Partial<Pick<T, K>>;

/**
 * Extrae el tipo de datos de una respuesta de API
 */
export type ExtractApiData<T> = T extends ApiResponse<infer U> ? U : never;

/**
 * Función que no retorna nada
 */
export type VoidFunction = () => void;

/**
 * Función asíncrona que no retorna nada
 */
export type AsyncVoidFunction = () => Promise<void>;

/**
 * Función de callback con error
 */
export type ErrorCallback = (error: string | null) => void;

/**
 * Función de callback con datos
 */
export type DataCallback<T> = (data: T) => void;

// ==========================================
// EXPORTACIONES POR DEFECTO
// ==========================================

export default {
  // Exportar tipos principales para fácil acceso
  Usuario,
  Producto,
  SolicitudServicio,
  ApiResponse,
  AuthState,
  ProductsState,
};
