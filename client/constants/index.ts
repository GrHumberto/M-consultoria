/**
 * @fileoverview Application constants and configuration
 * @version 1.0.0
 * @author M-C Consultoría Development Team
 */

import type { DictamenType, TramiteType, ContactInfo } from '@/types';

// ==========================================
// BUSINESS CONSTANTS
// ==========================================

/**
 * Available dictamen (technical assessment) options
 */
export const DICTAMEN_OPTIONS: DictamenType[] = [
  "Dictamen Eléctrico",
  "Dictamen Estructural", 
  "Dictamen de Sonido",
  "Dictamen de Gas",
  "Dictamen de Riesgo",
  "Dictamen Hidráulico"
];

/**
 * Available administrative procedure options
 */
export const TRAMITE_OPTIONS: TramiteType[] = [
  "Factibilidad De Uso Y Destino De Suelo",
  "Licencia De Funcionamiento",
  "Aviso De Funcionamiento (COFEPRIS)",
  "Constancias DC-3 (STPS)",
  "Licencia De Anuncio",
  "Licencia De Construcción"
];

// ==========================================
// CONTACT INFORMATION
// ==========================================

/**
 * Company contact information
 */
export const CONTACT_INFO: ContactInfo[] = [
  {
    name: "Ing. Vielet Castañeda",
    position: "Especialista en Protección Civil",
    phone: "961 155-3538",
    email: "mc.consultoría@gmail.com"
  },
  {
    name: "Ing. Cindy Marumi",
    position: "Especialista en Protección Civil",
    phone: "961 245-3558",
    email: "mc.consultoría@gmail.com"
  }
];

/**
 * WhatsApp contact number (formatted for links)
 */
export const WHATSAPP_NUMBER = "5219611553538";

/**
 * Main company email
 */
export const COMPANY_EMAIL = "mc.consultoria@gmail.com";

// ==========================================
// LOCATION CONSTANTS
// ==========================================

/**
 * Company location for Google Maps integration
 */
export const COMPANY_LOCATION = {
  city: "Tuxtla Gutiérrez",
  state: "Chiapas",
  country: "México",
  coordinates: {
    lat: 16.73599895,
    lng: -93.34934894624
  },
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244004.95347754987!2d-93.34934894624!3d16.73599895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8c8e6e6d823%3A0x66d84a0c2b2a0000!2sTuxtla%20Guti%C3%A9rrez%2C%20Chis.%2C%20Mexico!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s"
};

// ==========================================
// UI CONSTANTS
// ==========================================

/**
 * Color palette for the application
 */
export const COLORS = {
  primary: "#EC6901",      // Orange
  secondary: "#4E8BEE",    // Blue
  background: "#FFFBF8",   // Cream
  foreground: "#281504",   // Dark brown
  accent: "#F4A86C"        // Light orange
} as const;

/**
 * Font families used in the application
 */
export const FONTS = {
  primary: "'Noto Sans HK', sans-serif",
  secondary: "'Tajawal', sans-serif",
  mono: "'Noto Sans', sans-serif"
} as const;

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINTS = {
  mobile: "640px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1280px"
} as const;

// ==========================================
// ROUTING CONSTANTS
// ==========================================

/**
 * Application routes
 */
export const ROUTES = {
  HOME: "/",
  CATALOG: "/catalogo",
  LOGIN: "/login",
  REGISTER: "/registro",
  NOT_FOUND: "/404"
} as const;

/**
 * Navigation menu items
 */
export const NAVIGATION_ITEMS = [
  {
    label: "Inicio",
    href: ROUTES.HOME
  },
  {
    label: "Catálogo",
    href: ROUTES.CATALOG
  }
] as const;

// ==========================================
// API CONSTANTS
// ==========================================

/**
 * API endpoints (for future backend integration)
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout"
  },
  SERVICES: {
    REQUEST_DICTAMEN: "/api/services/dictamen",
    REQUEST_TRAMITE: "/api/services/tramite"
  },
  PRODUCTS: {
    GET_ALL: "/api/products",
    GET_BY_ID: "/api/products/:id",
    REQUEST_QUOTE: "/api/products/quote"
  }
} as const;

// ==========================================
// VALIDATION CONSTANTS
// ==========================================

/**
 * Form validation rules
 */
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\d{3}-\d{3}-\d{4}$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  COMPANY_NAME_MIN_LENGTH: 2
} as const;

// ==========================================
// SOCIAL MEDIA CONSTANTS
// ==========================================

/**
 * Social media links
 */
export const SOCIAL_MEDIA = {
  FACEBOOK: {
    url: "https://facebook.com/mc.consultoria",
    icon: "facebook"
  },
  WHATSAPP: {
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: "whatsapp"
  }
} as const;

// ==========================================
// SEO CONSTANTS
// ==========================================

/**
 * SEO metadata
 */
export const SEO = {
  SITE_NAME: "M-C Consultoría en Protección Civil",
  SITE_DESCRIPTION: "Empresa chiapaneca especializada en prevención de riesgos, capacitación empresarial, trámites oficiales y señalización para cumplir con la normativa de Protección Civil en México.",
  KEYWORDS: [
    "protección civil",
    "dictámenes técnicos",
    "licencias funcionamiento",
    "capacitación empresarial",
    "equipos emergencia",
    "chiapas",
    "tuxtla gutierrez"
  ]
} as const;
