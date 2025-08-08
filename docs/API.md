# 🔌 API DOCUMENTACIÓN - M-C CONSULTORÍA

## 📋 **Índice**

1. [Información General](#información-general)
2. [Autenticación](#autenticación)
3. [Endpoints de Usuarios](#endpoints-de-usuarios)
4. [Endpoints de Productos](#endpoints-de-productos)
5. [Endpoints de Servicios](#endpoints-de-servicios)
6. [Endpoints de Solicitudes](#endpoints-de-solicitudes)
7. [Códigos de Error](#códigos-de-error)
8. [Ejemplos de Uso](#ejemplos-de-uso)

---

## 🌐 **Información General**

### **Base URL**

```
Desarrollo: http://localhost:3000/api
Producción: https://mc-consultoria.com/api
```

### **Formato de Respuestas**

Todas las respuestas siguen el siguiente formato:

```typescript
{
  success: boolean;        // Indica si la operación fue exitosa
  data?: any;             // Datos de la respuesta (opcional)
  message?: string;       // Mensaje descriptivo (opcional)
  error?: string;         // Mensaje de error (opcional)
  timestamp: string;      // Timestamp ISO de la respuesta
}
```

### **Headers Requeridos**

```
Content-Type: application/json
Authorization: Bearer <token> // Para endpoints protegidos
```

---

## 🔐 **Autenticación**

### **POST** `/auth/login`

Inicia sesión de usuario

**Cuerpo de la Petición:**

```typescript
{
  email: string; // Email del usuario
  password: string; // Contraseña
}
```

**Respuesta Exitosa (200):**

```typescript
{
  success: true,
  data: {
    user: {
      id: string;
      email: string;
      nombre: string;
      apellido_paterno: string;
      apellido_materno?: string;
      role: "admin" | "user";
    },
    token: string;        // JWT token
    refreshToken: string; // Token de renovación
  },
  message: "Inicio de sesión exitoso"
}
```

### **POST** `/auth/register`

Registra un nuevo usuario

**Cuerpo de la Petición:**

```typescript
{
  email: string;
  password: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno?: string;
}
```

**Respuesta Exitosa (201):**

```typescript
{
  success: true,
  data: {
    user: {
      id: string;
      email: string;
      nombre: string;
      apellido_paterno: string;
      role: "user";
    }
  },
  message: "Usuario registrado exitosamente"
}
```

### **POST** `/auth/logout`

Cierra sesión del usuario

**Headers Requeridos:**

```
Authorization: Bearer <token>
```

**Respuesta Exitosa (200):**

```typescript
{
  success: true,
  message: "Sesión cerrada exitosamente"
}
```

### **POST** `/auth/refresh`

Renueva el token de acceso

**Cuerpo de la Petición:**

```typescript
{
  refreshToken: string;
}
```

---

## 👥 **Endpoints de Usuarios**

### **GET** `/users/profile`

Obtiene el perfil del usuario autenticado

**Headers Requeridos:**

```
Authorization: Bearer <token>
```

**Respuesta Exitosa (200):**

```typescript
{
  success: true,
  data: {
    id: string;
    email: string;
    nombre: string;
    apellido_paterno: string;
    apellido_materno?: string;
    role: "admin" | "user";
    created_at: string;
    updated_at: string;
  }
}
```

### **PUT** `/users/profile`

Actualiza el perfil del usuario

**Headers Requeridos:**

```
Authorization: Bearer <token>
```

**Cuerpo de la Petición:**

```typescript
{
  nombre?: string;
  apellido_paterno?: string;
  apellido_materno?: string;
}
```

### **GET** `/users` 🔒 **Admin Only**

Lista todos los usuarios (solo administradores)

**Query Parameters:**

```
page?: number     // Página (default: 1)
limit?: number    // Elementos por página (default: 10)
role?: string     // Filtrar por rol
search?: string   // Buscar por nombre o email
```

---

## 📦 **Endpoints de Productos**

### **GET** `/products`

Obtiene lista de productos activos

**Query Parameters:**

```
page?: number       // Página (default: 1)
limit?: number      // Elementos por página (default: 10)
categoria?: string  // Filtrar por categoría
search?: string     // Buscar en título y descripción
```

**Respuesta Exitosa (200):**

```typescript
{
  success: true,
  data: {
    productos: [
      {
        id: string;
        titulo: string;
        descripcion: string;
        categoria: string;
        imagen_url: string;
        caracteristicas: string[];
        aplicaciones: string[];
        especificaciones: string[];
        created_at: string;
        updated_at: string;
      }
    ],
    pagination: {
      current_page: number;
      total_pages: number;
      total_items: number;
      items_per_page: number;
    }
  }
}
```

### **GET** `/products/:id`

Obtiene un producto específico

**Parámetros de Ruta:**

- `id`: ID del producto

### **POST** `/products` 🔒 **Admin Only**

Crea un nuevo producto

**Headers Requeridos:**

```
Authorization: Bearer <token>
```

**Cuerpo de la Petición:**

```typescript
{
  titulo: string;
  descripcion: string;
  categoria: string;
  imagen_url: string;
  caracteristicas?: string[];
  aplicaciones?: string[];
  especificaciones?: string[];
}
```

### **PUT** `/products/:id` 🔒 **Admin Only**

Actualiza un producto existente

### **DELETE** `/products/:id` 🔒 **Admin Only**

Elimina un producto (soft delete)

---

## 🛠️ **Endpoints de Servicios**

### **GET** `/services/dictamenes`

Obtiene tipos de dictámenes disponibles

**Respuesta Exitosa (200):**

```typescript
{
  success: true,
  data: [
    "Dictamen Eléctrico",
    "Dictamen Estructural",
    "Dictamen de Sonido",
    "Dictamen de Gas",
    "Dictamen de Riesgo",
    "Dictamen Hidráulico"
  ]
}
```

### **GET** `/services/tramites`

Obtiene tipos de trámites disponibles

### **POST** `/services/solicitar`

Envía una solicitud de servicio

**Cuerpo de la Petición:**

```typescript
{
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
}
```

---

## 📋 **Endpoints de Solicitudes**

### **GET** `/solicitudes` 🔒 **Admin Only**

Lista todas las solicitudes (solo administradores)

**Query Parameters:**

```
page?: number           // Página
limit?: number          // Elementos por página
tipo?: string          // Filtrar por tipo
status?: string        // Filtrar por estado
fecha_desde?: string   // Filtrar desde fecha (ISO)
fecha_hasta?: string   // Filtrar hasta fecha (ISO)
```

### **GET** `/solicitudes/:id` 🔒 **Admin Only**

Obtiene una solicitud específica

### **PUT** `/solicitudes/:id/status` 🔒 **Admin Only**

Actualiza el estado de una solicitud

**Cuerpo de la Petición:**

```typescript
{
  status: "pendiente" | "en_proceso" | "completado" | "cancelado";
  comentario_admin?: string;
}
```

---

## ⚠️ **Códigos de Error**

### **Códigos HTTP**

- `200` - OK: Operación exitosa
- `201` - Created: Recurso creado exitosamente
- `400` - Bad Request: Datos inválidos
- `401` - Unauthorized: No autenticado
- `403` - Forbidden: Sin permisos
- `404` - Not Found: Recurso no encontrado
- `409` - Conflict: Conflicto (ej: email ya existe)
- `422` - Unprocessable Entity: Validación fallida
- `500` - Internal Server Error: Error del servidor

### **Estructura de Errores**

```typescript
{
  success: false,
  error: string,           // Mensaje de error
  details?: {              // Detalles adicionales (opcional)
    field?: string;        // Campo que causó el error
    code?: string;         // Código específico del error
    validation?: object;   // Errores de validación
  },
  timestamp: string
}
```

### **Errores Comunes**

#### **Validación (422)**

```typescript
{
  success: false,
  error: "Errores de validación",
  details: {
    validation: {
      email: "El email es requerido",
      password: "La contraseña debe tener al menos 8 caracteres"
    }
  }
}
```

#### **No Autorizado (401)**

```typescript
{
  success: false,
  error: "Token inválido o expirado",
  details: {
    code: "TOKEN_EXPIRED"
  }
}
```

#### **Recurso No Encontrado (404)**

```typescript
{
  success: false,
  error: "Producto no encontrado",
  details: {
    code: "PRODUCT_NOT_FOUND"
  }
}
```

---

## 🔧 **Ejemplos de Uso**

### **JavaScript/TypeScript con Fetch**

```typescript
// Login
const login = async (email: string, password: string) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (data.success) {
    localStorage.setItem("token", data.data.token);
    return data.data.user;
  } else {
    throw new Error(data.error);
  }
};

// Obtener productos
const getProducts = async (page = 1, categoria?: string) => {
  const params = new URLSearchParams({
    page: page.toString(),
    ...(categoria && { categoria }),
  });

  const response = await fetch(`/api/products?${params}`);
  const data = await response.json();

  return data.data;
};

// Crear producto (admin)
const createProduct = async (productData: any) => {
  const token = localStorage.getItem("token");

  const response = await fetch("/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(productData),
  });

  return response.json();
};
```

### **Axios (Recomendado)**

```typescript
import axios from "axios";

// Configuración base
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor para manejar errores
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error.response?.data || error);
  },
);

// Uso
const authService = {
  login: (email: string, password: string) =>
    api.post("/auth/login", { email, password }),

  register: (userData: any) => api.post("/auth/register", userData),

  logout: () => api.post("/auth/logout"),
};

const productsService = {
  getAll: (params?: any) => api.get("/products", { params }),

  getById: (id: string) => api.get(`/products/${id}`),

  create: (data: any) => api.post("/products", data),

  update: (id: string, data: any) => api.put(`/products/${id}`, data),

  delete: (id: string) => api.delete(`/products/${id}`),
};
```

---

## 🔄 **Rate Limiting**

Para proteger la API, se implementan límites de velocidad:

- **Autenticación**: 5 intentos por minuto por IP
- **Endpoints públicos**: 100 requests por minuto por IP
- **Endpoints protegidos**: 200 requests por minuto por usuario
- **Admin endpoints**: 500 requests por minuto

### **Headers de Rate Limiting**

```
X-RateLimit-Limit: 100        // Límite total
X-RateLimit-Remaining: 99     // Requests restantes
X-RateLimit-Reset: 1640995200 // Timestamp de reset
```

---

## 📄 **Versionado**

La API sigue versionado semántico:

- **v1.0.0**: Versión inicial
- **v1.1.0**: Nuevas funcionalidades sin breaking changes
- **v2.0.0**: Breaking changes

### **Headers de Versión**

```
API-Version: 1.0.0
```

---

## 🔒 **Seguridad**

### **Autenticación JWT**

- **Tiempo de vida**: 15 minutos (access token)
- **Refresh token**: 30 días
- **Algoritmo**: HS256

### **Validación de Datos**

- Todos los inputs son validados y sanitizados
- Protección contra inyección SQL
- Validación de tipos TypeScript

### **CORS**

```
Access-Control-Allow-Origin: https://mc-consultoria.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## 📞 **Soporte**

Para soporte técnico de la API:

- **Email**: dev@mc-consultoria.com
- **Documentación**: https://docs.mc-consultoria.com
- **GitHub Issues**: https://github.com/mc-consultoria/api/issues
