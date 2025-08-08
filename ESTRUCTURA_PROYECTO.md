# 📁 ESTRUCTURA DEL PROYECTO M-C CONSULTORÍA

## 🎯 **Arquitectura General**

```
M-Consultoria-Proteccion-Civil/
├── 📁 client/                          # Frontend - Aplicación React
│   ├── 📁 src/                         # Código fuente principal
│   │   ├── 📁 components/              # Componentes reutilizables
│   │   │   ├── 📁 ui/                  # Componentes básicos de UI
│   │   ��   │   ├── mc-button.tsx       # Botón personalizado
│   │   │   │   ├── mc-badge.tsx        # Etiquetas/badges
│   │   │   │   ├── navbar.tsx          # Barra de navegación
│   │   │   │   ├── footer.tsx          # Pie de página
│   │   │   │   └── ...                 # Otros componentes UI
│   │   │   ├── 📁 layout/              # Componentes de diseño
│   │   │   │   ├── PageLayout.tsx      # Layout base de páginas
│   │   │   │   ├── AuthLayout.tsx      # Layout para autenticación
│   │   │   │   └── AdminLayout.tsx     # Layout para administrador
│   │   │   ├── 📁 forms/               # Componentes de formularios
│   │   │   │   ├── ContactForm.tsx     # Formulario de contacto
│   │   │   │   ├── ServiceForm.tsx     # Formulario de servicios
│   │   │   │   └── ProductForm.tsx     # Formulario de productos
│   │   │   ├── 📁 modals/              # Componentes modales
│   │   │   │   ├── ServiceModal.tsx    # Modal de servicios
│   │   │   │   ├── ProductModal.tsx    # Modal de productos
│   │   │   │   └── ConfirmModal.tsx    # Modal de confirmación
│   │   │   └── 📁 cards/               # Componentes de tarjetas
│   │   │       ├── ServiceCard.tsx     # Tarjeta de servicio
│   │   │       ├── ProductCard.tsx     # Tarjeta de producto
│   │   │       └── DictamenCard.tsx    # Tarjeta de dictamen
│   │   ├── 📁 pages/                   # Páginas de la aplicación
│   │   │   ├── Index.tsx               # Página principal
│   │   │   ├── Catalogo.tsx            # Catálogo de productos
│   │   │   ├── Login.tsx               # Página de login
│   │   │   ├── Registro.tsx            # Página de registro
│   │   │   ├── Dashboard.tsx           # Panel de administrador
│   │   │   └── NotFound.tsx            # Página 404
│   │   ├── 📁 hooks/                   # Custom React Hooks
│   │   │   ├── useAuth.ts              # Hook de autenticación
│   │   │   ├── useProducts.ts          # Hook de productos
│   │   │   ├── useServices.ts          # Hook de servicios
│   │   │   ├── useModal.ts             # Hook de modales
│   │   │   └── useLocalStorage.ts      # Hook de localStorage
│   │   ├── 📁 services/                # Servicios y APIs
│   │   │   ├── 📁 api/                 # Clientes de API
│   │   │   │   ├── authApi.ts          # API de autenticación
│   │   │   │   ├── productsApi.ts      # API de productos
│   │   │   │   ├── servicesApi.ts      # API de servicios
│   │   │   │   └── baseApi.ts          # Cliente base de API
│   │   │   ├── contactService.ts       # Servicio de contacto
│   │   │   ├── validationService.ts    # Servicio de validación
│   │   │   └── storageService.ts       # Servicio de almacenamiento
│   │   ├── 📁 types/                   # Definiciones de tipos TypeScript
│   │   │   ├── index.ts                # Tipos principales
│   │   │   ├── auth.ts                 # Tipos de autenticación
│   │   │   ├── products.ts             # Tipos de productos
│   │   │   ├── services.ts             # Tipos de servicios
│   │   │   └── api.ts                  # Tipos de API
│   │   ├── 📁 constants/               # Constantes de la aplicación
│   │   │   ├── index.ts                # Constantes generales
│   │   │   ├── routes.ts               # Rutas de la aplicación
│   │   │   ├── colors.ts               # Paleta de colores
│   │   │   └── api.ts                  # URLs de API
│   │   ├── 📁 utils/                   # Funciones utilitarias
│   │   │   ├── index.ts                # Utilidades generales
│   │   │   ├── formatters.ts           # Formateadores
│   │   │   ├── validators.ts           # Validadores
│   │   │   └── helpers.ts              # Funciones helper
│   │   ├── 📁 contexts/                # Contextos de React
│   │   │   ├── AuthContext.tsx         # Contexto de autenticación
│   │   │   ├── ThemeContext.tsx        # Contexto de tema
│   │   │   └── NotificationContext.tsx # Contexto de notificaciones
│   │   ├── 📁 lib/                     # Configuraciones de librerías
│   │   │   ├── supabase.ts             # Configuración Supabase
│   │   │   ├── axios.ts                # Configuración Axios
│   │   │   └── utils.ts                # Utilidades de lib
│   │   ├── 📁 assets/                  # Recursos estáticos
│   │   │   ├── 📁 images/              # Imágenes
│   │   │   ├── 📁 icons/               # Iconos
│   │   │   └── 📁 fonts/               # Fuentes
│   │   ├── App.tsx                     # Componente principal
│   │   ├── main.tsx                    # Punto de entrada
│   │   ├── global.css                  # Estilos globales
│   │   └── vite-env.d.ts               # Tipos de Vite
│   ├── 📁 public/                      # Archivos públicos
│   │   ├── favicon.ico                 # Favicon
│   │   ├── robots.txt                  # Robots.txt
│   │   └── manifest.json               # Manifest PWA
│   └── 📁 docs/                        # Documentación del frontend
│       ├── COMPONENTES.md              # Documentación de componentes
│       ├── HOOKS.md                    # Documentación de hooks
│       └── DEPLOYMENT.md               # Guía de deployment
├── 📁 server/                          # Backend (opcional)
│   ├── 📁 src/                         # Código fuente del servidor
│   │   ├── 📁 controllers/             # Controladores
│   │   ├── 📁 models/                  # Modelos de datos
│   │   ├── 📁 routes/                  # Rutas de API
│   │   ├── 📁 middleware/              # Middleware
│   │   ├── 📁 services/                # Servicios del backend
│   │   └── 📁 utils/                   # Utilidades del backend
│   └── 📁 docs/                        # Documentación del backend
├── 📁 shared/                          # Código compartido
│   ├── 📁 types/                       # Tipos compartidos
│   ├── 📁 constants/                   # Constantes compartidas
│   └── 📁 utils/                       # Utilidades compartidas
├── 📁 docs/                            # Documentación del proyecto
│   ├── README.md                       # Documentación principal
│   ├── INSTALACION.md                  # Guía de instalación
│   ├── API.md                          # Documentación de API
│   ├── BASE_DATOS.md                   # Documentación de BD
│   ├── DEPLOYMENT.md                   # Guía de deployment
│   └── CONTRIBUCION.md                 # Guía de contribución
├── 📁 database/                        # Scripts de base de datos
│   ├── schema.sql                      # Esquema de la BD
│   ├── seeds.sql                       # Datos iniciales
│   └── migrations/                     # Migraciones
├── 📁 config/                          # Archivos de configuración
│   ├── .env.example                    # Variables de entorno ejemplo
│   ├── docker-compose.yml              # Configuración Docker
│   └── nginx.conf                      # Configuración Nginx
├── package.json                        # Dependencias del proyecto
├── tsconfig.json                       # Configuración TypeScript
├── tailwind.config.ts                  # Configuración Tailwind
├── vite.config.ts                      # Configuración Vite
└── .gitignore                          # Archivos ignorados por Git
```

## 🎯 **Principios de la Arquitectura**

### **1. Separación de Responsabilidades**

- **Components**: Solo lógica de presentación
- **Hooks**: Lógica de estado y efectos
- **Services**: Lógica de negocio y APIs
- **Utils**: Funciones puras sin estado

### **2. Escalabilidad**

- Estructura modular y extensible
- Componentes reutilizables
- Tipos TypeScript bien definidos
- Patrones consistentes

### **3. Mantenibilidad**

- Documentación completa en español
- Nombres descriptivos y consistentes
- Código limpio y comentado
- Tests unitarios e integración

### **4. Performance**

- Lazy loading de componentes
- Optimización de renderizado
- Cache de datos
- Bundle optimization

## 📋 **Convenciones de Nomenclatura**

### **Archivos y Carpetas**

- **Componentes**: PascalCase (ej: `ServiceCard.tsx`)
- **Hooks**: camelCase con prefijo use (ej: `useAuth.ts`)
- **Servicios**: camelCase con sufijo Service (ej: `authService.ts`)
- **Types**: PascalCase (ej: `User.ts`)
- **Constants**: UPPER_SNAKE_CASE (ej: `API_ENDPOINTS`)

### **Variables y Funciones**

- **Variables**: camelCase (ej: `userName`)
- **Funciones**: camelCase (ej: `handleSubmit`)
- **Constantes**: UPPER_SNAKE_CASE (ej: `MAX_ITEMS`)
- **Interfaces**: PascalCase con prefijo I (ej: `IUser`)

### **CSS Classes**

- **Tailwind**: Siguiendo convenciones de Tailwind
- **Custom**: kebab-case (ej: `custom-button`)
- **BEM**: Para componentes complejos

## 🔄 **Flujo de Datos**

```
Usuario → Componente → Hook → Service → API → Database
                    ↓
               Estado Local ← Respuesta ← Transformación
```

## 🧪 **Testing Strategy**

- **Unit Tests**: Funciones puras y hooks
- **Component Tests**: Componentes aislados
- **Integration Tests**: Flujos completos
- **E2E Tests**: Escenarios de usuario

## 📦 **Deployment**

- **Desarrollo**: Vite dev server
- **Staging**: Netlify preview
- **Producción**: Netlify con CI/CD
- **Base de datos**: Supabase/PostgreSQL
