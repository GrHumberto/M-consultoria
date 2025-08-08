# M-C Consultoría en Protección Civil

## 📋 Descripción del Proyecto

Aplicación web moderna para M-C Consultoría, empresa chiapaneca especializada en protección civil, dictámenes técnicos, trámites administrativos y equipos de emergencia.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Routing**: React Router 6
- **Styling**: TailwindCSS + CSS Variables
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Netlify

## 📁 Estructura del Proyecto

```
client/
├── components/ui/          # Componentes reutilizables
│   ├── mc-button.tsx      # Botón personalizado
│   ├── mc-badge.tsx       # Badge/etiqueta personalizada
│   ├── navbar.tsx         # Barra de navegación
│   ├── service-card.tsx   # Tarjeta de servicio
│   ├── product-card.tsx   # Tarjeta de producto
│   ├── dictamen-card.tsx  # Tarjeta de dictamen
│   ├── tramite-card.tsx   # Tarjeta de trámite
│   ├── service-modal.tsx  # Modal de solicitud de servicios
│   └── product-details-modal.tsx # Modal de detalles de producto
├── hooks/                 # Custom React Hooks
│   ├── useModal.ts        # Hook para manejo de modales
│   ├── useForm.ts         # Hook para manejo de formularios
│   ├── useScrollToElement.ts # Hook para scroll suave
│   └── useLocalStorage.ts # Hook para localStorage
├── services/              # Servicios y lógica de negocio
│   ├── contactService.ts  # Servicio de contacto (WhatsApp/Email)
│   ├── validationService.ts # Servicio de validación
│   └── storageService.ts  # Servicio de almacenamiento
├── types/                 # Definiciones de tipos TypeScript
│   └── index.ts          # Tipos centralizados
├── constants/             # Constantes de la aplicación
│   └── index.ts          # Configuración y constantes
├── pages/                 # Páginas de la aplicación
│   ├── Index.tsx         # Página principal
│   ├── Catalogo.tsx      # Catálogo de productos
│   ├── Login.tsx         # Página de inicio de sesión
│   ├── Registro.tsx      # Página de registro
│   └── NotFound.tsx      # Página 404
├── lib/                   # Utilidades
│   └── utils.ts          # Funciones utilitarias
└── global.css            # Estilos globales
```

## 🚀 Funcionalidades Principales

### 📱 Páginas Principales
- **Homepage**: Información de la empresa, servicios y contacto
- **Catálogo**: Productos organizados por categorías
- **Login/Registro**: Autenticación de usuarios
- **Formularios de Solicitud**: Modales para dictámenes y trámites

### 🎯 Características Técnicas
- **Responsive Design**: Adaptado para móvil, tablet y desktop
- **Modales Interactivos**: Sistema de modales encadenados
- **Integración WhatsApp**: Enlaces directos para contacto
- **Google Maps**: Ubicación interactiva de la empresa
- **Formularios Validados**: Validación client-side completa
- **TypeScript**: Tipado estricto para mejor desarrollo

## 🎨 Sistema de Diseño

### Colores Principales
```css
--primary: #EC6901     /* Naranja principal */
--secondary: #4E8BEE   /* Azul secundario */
--background: #FFFBF8  /* Fondo crema */
--foreground: #281504  /* Texto oscuro */
--accent: #F4A86C      /* Naranja claro */
```

### Tipografía
- **Primaria**: Noto Sans HK
- **Secundaria**: Tajawal
- **Monospace**: Noto Sans

## 📞 Información de Contacto

### Especialistas
- **Ing. Vielet Castañeda**: 961 155-3538
- **Ing. Cindy Marumi**: 961 245-3558
- **Email**: mc.consultoría@gmail.com

### Ubicación
- **Ciudad**: Tuxtla Gutiérrez, Chiapas, México

## 🛡️ Servicios Ofrecidos

### Dictámenes Técnicos
- Dictamen Eléctrico
- Dictamen Estructural
- Dictamen de Sonido
- Dictamen de Gas
- Dictamen de Riesgo
- Dictamen Hidráulico

### Trámites Administrativos
- Factibilidad De Uso Y Destino De Suelo
- Licencia De Funcionamiento
- Aviso De Funcionamiento (COFEPRIS)
- Constancias DC-3 (STPS)
- Licencia De Anuncio
- Licencia De Construcción

### Productos
- Equipos de Protección Personal (EPP)
- Equipos de Emergencia
- Señalamientos de Seguridad
- Complementos para Protección Civil

## 🚀 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🔐 Sistema de Autenticación (Modo Demo)

La aplicación incluye un sistema de autenticación completo que funciona en **modo demo** sin necesidad de configurar Supabase.

### Credenciales de Prueba:

#### **👤 Usuario Administrador:**
- **Email**: `admin@mc.com`
- **Password**: `admin123`
- **Permisos**: Puede crear, editar y eliminar productos

#### **👤 Usuario Normal:**
- **Email**: Cualquier email válido
- **Password**: Cualquier contraseña
- **Permisos**: Solo puede ver productos

### Funcionalidades disponibles:
- ✅ **Login/Logout** funcional
- ✅ **Roles de usuario** (admin vs normal)
- ✅ **CRUD de productos** (solo admin)
- ✅ **Modal de administración**
- ✅ **Gestión de estado** persistente

## 🧪 Testing

```bash
# Ejecutar tests
npm test

# Tests en modo watch
npm run test:watch

# Coverage de tests
npm run test:coverage
```

## 📦 Deployment

El proyecto está configurado para deployment automático en Netlify:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: Configurar en Netlify dashboard

## 🔧 Configuración de Desarrollo

### Variables de Entorno
```env
VITE_WHATSAPP_NUMBER=5219611553538
VITE_COMPANY_EMAIL=mc.consultoria@gmail.com
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

### ESLint + Prettier
El proyecto incluye configuración de ESLint y Prettier para mantener código consistente.

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama feature (`git checkout -b feature/AmazingFeature`)
3. Commit los cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📝 Notas Técnicas

### Rendimiento
- Lazy loading de imágenes
- Code splitting automático con Vite
- Componentes optimizados con React.memo donde necesario

### SEO
- Meta tags optimizados
- Estructura semántica HTML
- Schema.org markup para business information

### Seguridad
- Validación client-side y server-side
- Sanitización de inputs
- Headers de seguridad configurados

## 📄 Licencia

Este proyecto es propiedad de M-C Consultoría en Protección Civil.

---

**Desarrollado con ❤️ para M-C Consultoría en Protección Civil**
