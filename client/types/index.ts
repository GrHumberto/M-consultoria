/**
 * @fileoverview Comprehensive type definitions for the M-C Consultoría application
 * @version 1.0.0
 * @author M-C Consultoría Development Team
 */

// ==========================================
// COMPONENT PROP TYPES
// ==========================================

/**
 * Button variant types for consistent styling across the application
 */
export type ButtonVariant = "orange" | "blue" | "outline-orange" | "outline-blue";

/**
 * Button size types for consistent sizing
 */
export type ButtonSize = "sm" | "md" | "lg";

/**
 * Badge variant types for status indicators
 */
export type BadgeVariant = "blue" | "orange" | "white";

// ==========================================
// BUSINESS LOGIC TYPES
// ==========================================

/**
 * Service types offered by M-C Consultoría
 */
export type ServiceType = "dictamen" | "tramite";

/**
 * Available dictamen (technical assessment) types
 */
export type DictamenType = 
  | "Dictamen Eléctrico"
  | "Dictamen Estructural" 
  | "Dictamen de Sonido"
  | "Dictamen de Gas"
  | "Dictamen de Riesgo"
  | "Dictamen Hidráulico";

/**
 * Available administrative procedure types
 */
export type TramiteType = 
  | "Factibilidad De Uso Y Destino De Suelo"
  | "Licencia De Funcionamiento"
  | "Aviso De Funcionamiento (COFEPRIS)"
  | "Constancias DC-3 (STPS)"
  | "Licencia De Anuncio"
  | "Licencia De Construcción";

// ==========================================
// DATA INTERFACES
// ==========================================

/**
 * Product information structure
 */
export interface Product {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  features?: string[];
  applications?: string[];
  specifications?: string[];
}

/**
 * Service card information structure
 */
export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

/**
 * Contact information structure
 */
export interface ContactInfo {
  name: string;
  position: string;
  phone: string;
  email: string;
}

// ==========================================
// FORM DATA INTERFACES
// ==========================================

/**
 * Service request form data structure
 */
export interface ServiceRequestForm {
  serviceType: ServiceType;
  serviceSubtype: string;
  email: string;
  name: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  phone: string;
  companyName: string;
  location: string;
  comments: string;
}

/**
 * User registration form data structure
 */
export interface RegistrationForm {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

/**
 * User login form data structure
 */
export interface LoginForm {
  email: string;
  password: string;
  rememberMe: boolean;
}

// ==========================================
// MODAL INTERFACES
// ==========================================

/**
 * Base modal props interface
 */
export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Service modal specific props
 */
export interface ServiceModalProps extends BaseModalProps {
  defaultServiceType?: ServiceType;
}

/**
 * Product details modal specific props
 */
export interface ProductDetailsModalProps extends BaseModalProps {
  product: Product;
}

/**
 * Product request modal specific props
 */
export interface ProductRequestModalProps extends BaseModalProps {
  productTitle: string;
}

// ==========================================
// UTILITY TYPES
// ==========================================

/**
 * Generic API response structure
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * Navigation item structure
 */
export interface NavigationItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

/**
 * Theme configuration
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
}
