/**
 * @fileoverview Constantes centralizadas para M-C Consultoría
 * @version 1.0.0
 * @author M-C Consultoría Development Team
 *
 * Este archivo centraliza todas las constantes utilizadas en la aplicación
 * para facilitar el mantenimiento y evitar valores mágicos en el código.
 */

// ==========================================
// INFORMACIÓN DE LA EMPRESA
// ==========================================

/**
 * Información básica de la empresa
 */
export const EMPRESA = {
  NOMBRE: "M-C Consultoría en Protección Civil",
  NOMBRE_CORTO: "M-C Consultoría",
  ESLOGAN: "Seguridad, cumplimiento y prevención para tu empresa",
  DESCRIPCION:
    "Empresa chiapaneca especializada en prevención de riesgos, capacitación empresarial, trámites oficiales y señalización para cumplir con la normativa de Protección Civil en México.",

  // Información de contacto
  CONTACTO: {
    EMAIL_PRINCIPAL: "mc.consultoria@gmail.com",
    EMAIL_VENTAS: "ventas@mc-consultoria.com",
    EMAIL_SOPORTE: "soporte@mc-consultoria.com",
    TELEFONO_PRINCIPAL: "+52 961 155 3538",
    WHATSAPP: "5219611553538",

    // Especialistas
    ESPECIALISTAS: [
      {
        nombre: "Ing. Vielet Castañeda",
        cargo: "Especialista en Protección Civil",
        telefono: "961 155-3538",
        email: "mc.consultoría@gmail.com",
      },
      {
        nombre: "Ing. Cindy Marumi",
        cargo: "Especialista en Protección Civil",
        telefono: "961 245-3558",
        email: "mc.consultoría@gmail.com",
      },
    ],
  },

  // Ubicación
  UBICACION: {
    CIUDAD: "Tuxtla Gutiérrez",
    ESTADO: "Chiapas",
    PAIS: "México",
    DIRECCION_COMPLETA: "Tuxtla Gutiérrez, Chiapas, México",

    // Coordenadas para Google Maps
    COORDENADAS: {
      latitud: 16.73599895,
      longitud: -93.34934894624,
    },

    // URL de Google Maps embebido
    GOOGLE_MAPS_EMBED:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244004.95347754987!2d-93.34934894624!3d16.73599895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8c8e6e6d823%3A0x66d84a0c2b2a0000!2sTuxtla%20Guti%C3%A9rrez%2C%20Chis.%2C%20Mexico!5e0!3m2!1sen!2s!4v1635000000000!5m2!1sen!2s",
  },
} as const;

// ==========================================
// SERVICIOS OFRECIDOS
// ==========================================

/**
 * Tipos de dictámenes técnicos disponibles
 */
export const DICTAMENES = [
  "Dictamen Eléctrico",
  "Dictamen Estructural",
  "Dictamen de Sonido",
  "Dictamen de Gas",
  "Dictamen de Riesgo",
  "Dictamen Hidráulico",
] as const;

/**
 * Tipos de trámites administrativos disponibles
 */
export const TRAMITES = [
  "Factibilidad De Uso Y Destino De Suelo",
  "Licencia De Funcionamiento",
  "Aviso De Funcionamiento (COFEPRIS)",
  "Constancias DC-3 (STPS)",
  "Licencia De Anuncio",
  "Licencia De Construcción",
] as const;

/**
 * Categorías de productos del catálogo
 */
export const CATEGORIAS_PRODUCTOS = [
  "Equipo de Protección Personal (EPP)",
  "Equipos de Emergencia",
  "Señalamientos",
  "Complementos para Protección y Respuesta",
] as const;

// ==========================================
// CONFIGURACIÓN DE LA APLICACIÓN
// ==========================================

/**
 * Rutas de la aplicación
 */
export const RUTAS = {
  INICIO: "/",
  CATALOGO: "/catalogo",
  LOGIN: "/login",
  REGISTRO: "/registro",
  DASHBOARD: "/dashboard",
  ADMIN: "/admin",
  NO_ENCONTRADO: "/404",
} as const;

/**
 * Elementos de navegación principal
 */
export const NAVEGACION = [
  {
    etiqueta: "Inicio",
    ruta: RUTAS.INICIO,
    icono: "home",
  },
  {
    etiqueta: "Catálogo",
    ruta: RUTAS.CATALOGO,
    icono: "catalog",
  },
] as const;

/**
 * Configuración de API
 */
export const API = {
  BASE_URL: import.meta.env.VITE_API_URL || "/api",
  TIMEOUT: 10000,
  VERSION: "v1",

  // Endpoints principales
  ENDPOINTS: {
    // Autenticación
    AUTH: {
      LOGIN: "/auth/login",
      REGISTER: "/auth/register",
      LOGOUT: "/auth/logout",
      REFRESH: "/auth/refresh",
      PROFILE: "/users/profile",
    },

    // Productos
    PRODUCTOS: {
      BASE: "/products",
      BY_ID: (id: string) => `/products/${id}`,
      CREAR: "/products",
      ACTUALIZAR: (id: string) => `/products/${id}`,
      ELIMINAR: (id: string) => `/products/${id}`,
    },

    // Servicios
    SERVICIOS: {
      DICTAMENES: "/services/dictamenes",
      TRAMITES: "/services/tramites",
      SOLICITAR: "/services/solicitar",
    },

    // Solicitudes (Admin)
    SOLICITUDES: {
      BASE: "/solicitudes",
      BY_ID: (id: string) => `/solicitudes/${id}`,
      ACTUALIZAR_ESTADO: (id: string) => `/solicitudes/${id}/status`,
    },
  },
} as const;

// ==========================================
// CONFIGURACIÓN DE UI/UX
// ==========================================

/**
 * Paleta de colores de la marca
 */
export const COLORES = {
  // Colores principales
  PRIMARIO: "#EC6901", // Naranja principal
  SECUNDARIO: "#4E8BEE", // Azul secundario
  FONDO: "#FFFBF8", // Crema de fondo
  TEXTO: "#281504", // Marrón oscuro para texto
  ACENTO: "#F4A86C", // Naranja claro

  // Estados
  EXITO: "#10B981", // Verde para éxito
  ERROR: "#EF4444", // Rojo para errores
  ADVERTENCIA: "#F59E0B", // Amarillo para advertencias
  INFO: "#3B82F6", // Azul para información

  // Grises
  GRIS_CLARO: "#F3F4F6",
  GRIS_MEDIO: "#6B7280",
  GRIS_OSCURO: "#374151",

  // Transparencias
  OVERLAY: "rgba(0, 0, 0, 0.5)",
  SOMBRA: "rgba(0, 0, 0, 0.1)",
} as const;

/**
 * Tipografías utilizadas
 */
export const TIPOGRAFIA = {
  PRIMARIA: "'Noto Sans HK', sans-serif",
  SECUNDARIA: "'Tajawal', sans-serif",
  MONOESPACIADA: "'Noto Sans', monospace",

  // Tamaños
  TAMAÑOS: {
    XS: "12px",
    SM: "14px",
    BASE: "16px",
    LG: "18px",
    XL: "20px",
    "2XL": "24px",
    "3XL": "30px",
    "4XL": "36px",
    "5XL": "48px",
  },
} as const;

/**
 * Breakpoints para diseño responsivo
 */
export const BREAKPOINTS = {
  MOBILE: "640px",
  TABLET: "768px",
  DESKTOP: "1024px",
  WIDE: "1280px",
  ULTRAWIDE: "1536px",
} as const;

/**
 * Configuración de animaciones
 */
export const ANIMACIONES = {
  DURACION: {
    RAPIDA: "150ms",
    NORMAL: "300ms",
    LENTA: "500ms",
  },
  EASING: {
    EASE_IN: "cubic-bezier(0.4, 0, 1, 1)",
    EASE_OUT: "cubic-bezier(0, 0, 0.2, 1)",
    EASE_IN_OUT: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

// ==========================================
// CONFIGURACIÓN DE ALMACENAMIENTO
// ==========================================

/**
 * Claves para localStorage
 */
export const STORAGE_KEYS = {
  AUTH_TOKEN: "mc_auth_token",
  AUTH_USER: "mc_auth_user",
  REFRESH_TOKEN: "mc_refresh_token",
  THEME: "mc_theme",
  LANGUAGE: "mc_language",
  PREFERENCES: "mc_user_preferences",
} as const;

// ==========================================
// VALIDACIONES Y LÍMITES
// ==========================================

/**
 * Reglas de validación
 */
export const VALIDACIONES = {
  EMAIL: {
    REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    MENSAJE: "Ingresa un email válido",
  },
  TELEFONO: {
    REGEX: /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/,
    MENSAJE: "Formato: 000-000-0000",
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    REGEX: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    MENSAJE: "Mínimo 8 caracteres, una mayúscula, una minúscula y un número",
  },
  NOMBRE: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    REGEX: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    MENSAJE: "Solo letras y espacios, entre 2 y 50 caracteres",
  },
} as const;

/**
 * Límites de la aplicación
 */
export const LIMITES = {
  PRODUCTOS: {
    POR_PAGINA: 12,
    MAX_CARACTERISTICAS: 10,
    MAX_APLICACIONES: 10,
    MAX_ESPECIFICACIONES: 10,
  },
  SOLICITUDES: {
    POR_PAGINA: 20,
    MAX_COMENTARIOS: 500,
  },
  ARCHIVOS: {
    MAX_SIZE_MB: 5,
    TIPOS_PERMITIDOS: ["jpg", "jpeg", "png", "webp"],
    MAX_IMAGENES: 5,
  },
} as const;

// ==========================================
// CONFIGURACIÓN DE TERCEROS
// ==========================================

/**
 * Configuración de servicios externos
 */
export const SERVICIOS_EXTERNOS = {
  GOOGLE_MAPS: {
    API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
    ZOOM_DEFAULT: 13,
    TIPO_MAPA: "roadmap",
  },

  WHATSAPP: {
    NUMERO: EMPRESA.CONTACTO.WHATSAPP,
    BASE_URL: "https://wa.me/",
    MENSAJE_DEFAULT:
      "Hola, me interesa obtener información sobre sus servicios de protección civil.",
  },

  EMAIL: {
    ASUNTO_CONTACTO: "Consulta desde sitio web - M-C Consultoría",
    ASUNTO_PRODUCTO: "Solicitud de información de producto",
    ASUNTO_SERVICIO: "Solicitud de servicio",
  },
} as const;

// ==========================================
// MENSAJES DEL SISTEMA
// ==========================================

/**
 * Mensajes de la aplicación
 */
export const MENSAJES = {
  EXITO: {
    LOGIN: "Inicio de sesión exitoso",
    REGISTRO: "Cuenta creada exitosamente",
    PRODUCTO_CREADO: "Producto creado exitosamente",
    PRODUCTO_ACTUALIZADO: "Producto actualizado exitosamente",
    PRODUCTO_ELIMINADO: "Producto eliminado exitosamente",
    SOLICITUD_ENVIADA: "Solicitud enviada exitosamente",
  },

  ERROR: {
    GENERAL: "Ha ocurrido un error inesperado",
    RED: "Error de conexión. Verifica tu internet.",
    LOGIN: "Credenciales incorrectas",
    PERMISOS: "No tienes permisos para esta acción",
    NO_ENCONTRADO: "Recurso no encontrado",
    VALIDACION: "Por favor corrige los errores en el formulario",
  },

  CONFIRMACION: {
    ELIMINAR_PRODUCTO: "¿Estás seguro de eliminar este producto?",
    CERRAR_SESION: "¿Deseas cerrar sesión?",
    CANCELAR_CAMBIOS: "¿Deseas cancelar los cambios?",
  },

  CARGA: {
    GENERAL: "Cargando...",
    LOGIN: "Iniciando sesión...",
    REGISTRO: "Creando cuenta...",
    GUARDANDO: "Guardando...",
    ELIMINANDO: "Eliminando...",
    ENVIANDO: "Enviando...",
  },
} as const;

// ==========================================
// CONFIGURACIÓN SEO
// ==========================================

/**
 * Metadatos para SEO
 */
export const SEO = {
  TITULO_BASE: EMPRESA.NOMBRE,
  DESCRIPCION: EMPRESA.DESCRIPCION,
  PALABRAS_CLAVE: [
    "protección civil",
    "dictámenes técnicos",
    "licencias funcionamiento",
    "capacitación empresarial",
    "equipos emergencia",
    "chiapas",
    "tuxtla gutierrez",
    "consultoría",
    "seguridad industrial",
    "prevención riesgos",
  ],

  // Open Graph
  OG: {
    TIPO: "website",
    SITIO: EMPRESA.NOMBRE,
    IMAGEN: "/og-image.jpg",
    URL: "https://mc-consultoria.com",
  },

  // Twitter Card
  TWITTER: {
    CARD: "summary_large_image",
    SITIO: "@mc_consultoria",
    CREADOR: "@mc_consultoria",
  },
} as const;

// ==========================================
// CONFIGURACIÓN DE DESARROLLO
// ==========================================

/**
 * Configuración para diferentes entornos
 */
export const ENTORNO = {
  ES_DESARROLLO: import.meta.env.DEV,
  ES_PRODUCCION: import.meta.env.PROD,
  ES_TEST: import.meta.env.MODE === "test",

  // Flags de características
  CARACTERISTICAS: {
    REGISTRO_HABILITADO: true,
    MODO_MANTENIMIENTO: false,
    ANALYTICS_HABILITADO: import.meta.env.PROD,
    LOGS_DETALLADOS: import.meta.env.DEV,
  },
} as const;

// ==========================================
// EXPORTACIÓN POR DEFECTO
// ==========================================

export default {
  EMPRESA,
  DICTAMENES,
  TRAMITES,
  RUTAS,
  API,
  COLORES,
  MENSAJES,
  VALIDACIONES,
};
