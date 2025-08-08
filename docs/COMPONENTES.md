# 🧩 DOCUMENTACIÓN DE COMPONENTES

## 📋 **Índice**

1. [Componentes UI Básicos](#componentes-ui-básicos)
2. [Componentes de Layout](#componentes-de-layout)
3. [Componentes de Formularios](#componentes-de-formularios)
4. [Componentes de Tarjetas](#componentes-de-tarjetas)
5. [Componentes Modales](#componentes-modales)
6. [Guías de Uso](#guías-de-uso)
7. [Patrones y Mejores Prácticas](#patrones-y-mejores-prácticas)

---

## 🎨 **Componentes UI Básicos**

### **McButton**

Botón personalizado con variantes de estilo para M-C Consultoría.

**Ubicación:** `client/src/components/ui/mc-button.tsx`

**Props:**

```typescript
interface McButtonProps {
  variant?: "orange" | "blue" | "outline-orange" | "outline-blue";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
}
```

**Ejemplos de Uso:**

```tsx
// Botón principal naranja
<McButton variant="orange" size="md" onClick={handleClick}>
  Enviar Solicitud
</McButton>

// Botón secundario azul con loading
<McButton variant="blue" size="lg" loading={isLoading}>
  Procesar
</McButton>

// Botón outline
<McButton variant="outline-orange" size="sm">
  Cancelar
</McButton>
```

**Variantes Disponibles:**

- **orange**: Botón sólido naranja (primario)
- **blue**: Botón sólido azul (secundario)
- **outline-orange**: Botón con borde naranja
- **outline-blue**: Botón con borde azul

---

### **McBadge**

Etiqueta o insignia para mostrar información contextual.

**Ubicación:** `client/src/components/ui/mc-badge.tsx`

**Props:**

```typescript
interface McBadgeProps {
  variant?: "blue" | "orange" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}
```

**Ejemplos de Uso:**

```tsx
// Badge para secciones
<McBadge variant="blue">SERVICIOS INTERNOS</McBadge>

// Badge de estado
<McBadge variant="orange" size="sm">NUEVO</McBadge>

// Badge personalizado
<McBadge variant="white" className="border-2">
  Destacado
</McBadge>
```

---

## 🏗️ **Componentes de Layout**

### **Navbar**

Barra de navegación principal con autenticación dinámica.

**Ubicación:** `client/src/components/ui/navbar.tsx`

**Características:**

- Muestra diferentes elementos según estado de autenticación
- Responsive (mobile-first)
- Indica rol de administrador
- Navegación entre páginas principales

**Estados:**

```tsx
// Usuario no autenticado
<Navbar /> // Muestra botones "Regístrate" e "Iniciar Sesión"

// Usuario normal autenticado
<Navbar /> // Muestra nombre del usuario y "Cerrar Sesión"

// Usuario administrador
<Navbar /> // Muestra nombre, "Administrador" y "Cerrar Sesión"
```

---

## 📝 **Componentes de Formularios**

### **ServiceModal**

Modal para solicitudes de servicios (dictámenes y trámites).

**Ubicación:** `client/src/components/ui/service-modal.tsx`

**Props:**

```typescript
interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceType?: "dictamen" | "tramite";
}
```

**Funcionalidades:**

- Formulario dinámico según tipo de servicio
- Validación client-side
- Envío por email o WhatsApp
- Campos responsivos y accesibles

**Ejemplo de Uso:**

```tsx
const [isModalOpen, setIsModalOpen] = useState(false);
const [serviceType, setServiceType] = useState<"dictamen" | "tramite">(
  "dictamen",
);

<ServiceModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  defaultServiceType={serviceType}
/>;
```

---

## 🃏 **Componentes de Tarjetas**

### **ServiceCard**

Tarjeta para mostrar servicios ofrecidos.

**Ubicación:** `client/src/components/ui/service-card.tsx`

**Props:**

```typescript
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  className?: string;
}
```

**Ejemplo de Uso:**

```tsx
<ServiceCard
  icon={<ShieldIcon />}
  title="Consultoría en Seguridad"
  description="Asesoría especializada en protección civil y prevención de riesgos"
  link="/servicios/consultoria"
/>
```

---

### **ProductCard**

Tarjeta para productos del catálogo con funcionalidades admin.

**Ubicación:** `client/src/components/ui/product-card.tsx`

**Props:**

```typescript
interface ProductCardProps {
  producto: Producto;
  onSolicitar?: (producto: Producto) => void;
  onEdit?: (producto: Producto) => void;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
  className?: string;
}
```

**Características:**

- Vista diferente para administradores
- Modal de detalles integrado
- Solicitud por WhatsApp/Email
- Botones de edición/eliminación (admin)

**Ejemplo de Uso:**

```tsx
<ProductCard
  producto={producto}
  isAdmin={isAdmin}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

---

### **DictamenCard**

Tarjeta específica para tipos de dictámenes.

**Ubicación:** `client/src/components/ui/dictamen-card.tsx`

**Props:**

```typescript
interface DictamenCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}
```

---

### **TramiteCard**

Tarjeta para tipos de trámites administrativos.

**Ubicación:** `client/src/components/ui/tramite-card.tsx`

**Props:**

```typescript
interface TramiteCardProps {
  title: string;
  description: string;
  className?: string;
}
```

---

## 🖼️ **Componentes Modales**

### **ProductDetailsModal**

Modal que muestra detalles completos del producto.

**Ubicación:** `client/src/components/ui/product-details-modal.tsx`

**Props:**

```typescript
interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Producto;
}
```

**Funcionalidades:**

- Imagen del producto
- Características detalladas
- Aplicaciones sugeridas
- Especificaciones técnicas
- Botón de solicitud

---

### **AdminProductModal**

Modal para crear y editar productos (solo administradores).

**Ubicación:** `client/src/components/ui/admin-product-modal.tsx`

**Props:**

```typescript
interface AdminProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (
    productData: ProductoForm,
  ) => Promise<{ success: boolean; error?: string }>;
  product?: Producto | null;
  loading?: boolean;
}
```

**Características:**

- Formulario completo de producto
- Validación avanzada
- Campos dinámicos (características, aplicaciones)
- Soporte para creación y edición

---

## 📖 **Guías de Uso**

### **1. Importación de Componentes**

```tsx
// Importación individual
import { McButton } from "@/components/ui/mc-button";
import { ServiceCard } from "@/components/ui/service-card";

// Importación múltiple desde index
import { McButton, McBadge, ServiceCard } from "@/components/ui";
```

### **2. Composición de Componentes**

```tsx
// Ejemplo de página usando múltiples componentes
function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <McBadge variant="blue" className="mb-4">
        NUESTROS SERVICIOS
      </McBadge>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<ShieldIcon />}
          title="Dictámenes Técnicos"
          description="Evaluaciones especializadas para cumplimiento normativo"
        />

        <ServiceCard
          icon={<DocumentIcon />}
          title="Trámites Administrativos"
          description="Gestión de licencias y permisos oficiales"
        />
      </div>

      <McButton
        variant="orange"
        size="lg"
        onClick={() => setIsModalOpen(true)}
        className="mt-8"
      >
        Solicitar Servicio
      </McButton>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
```

### **3. Uso con Hooks**

```tsx
// Ejemplo usando hooks personalizados
function ProductCatalog() {
  const { products, loading, createProduct } = useProducts();
  const { isAdmin } = useAuth();
  const { isOpen, open, close } = useModal();

  return (
    <div>
      {isAdmin && (
        <McButton variant="orange" onClick={open}>
          Agregar Producto
        </McButton>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} producto={product} isAdmin={isAdmin} />
        ))}
      </div>

      <AdminProductModal
        isOpen={isOpen}
        onClose={close}
        onSave={createProduct}
        loading={loading}
      />
    </div>
  );
}
```

---

## ✨ **Patrones y Mejores Prácticas**

### **1. Nomenclatura**

- **Componentes**: PascalCase (`ServiceCard`)
- **Props**: camelCase (`isOpen`, `onClose`)
- **Archivos**: kebab-case (`service-card.tsx`)

### **2. Estructura de Props**

```typescript
// ✅ Buena práctica
interface ComponentProps {
  // Props requeridas primero
  title: string;
  description: string;

  // Props opcionales después
  variant?: "primary" | "secondary";
  className?: string;

  // Callbacks al final
  onClick?: () => void;
  onSubmit?: (data: any) => void;
}
```

### **3. Composición vs Props**

```tsx
// ✅ Usar children para contenido flexible
<Modal>
  <ModalHeader>Título</ModalHeader>
  <ModalBody>Contenido</ModalBody>
  <ModalFooter>Acciones</ModalFooter>
</Modal>

// ✅ Usar props para configuración específica
<Button variant="primary" size="lg" disabled />
```

### **4. Accesibilidad**

```tsx
// ✅ Incluir props de accesibilidad
<McButton
  aria-label="Cerrar modal"
  aria-describedby="modal-description"
  onClick={onClose}
>
  ×
</McButton>
```

### **5. TypeScript**

```tsx
// ✅ Definir interfaces claras
interface ProductCardProps {
  producto: Producto;
  isAdmin?: boolean;
  onEdit?: (producto: Producto) => void;
}

// ✅ Usar tipos de React apropiados
const ProductCard: React.FC<ProductCardProps> = ({
  producto,
  isAdmin = false,
  onEdit,
}) => {
  // ...
};
```

### **6. Testing**

```tsx
// ✅ Componentes testeable
import { render, screen, fireEvent } from "@testing-library/react";
import { McButton } from "./mc-button";

test("renders button with correct text", () => {
  render(<McButton>Click me</McButton>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<McButton onClick={handleClick}>Click me</McButton>);

  fireEvent.click(screen.getByText("Click me"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## 🎯 **Roadmap de Componentes**

### **Próximos Componentes a Desarrollar**

- [ ] **DataTable**: Tabla con paginación y filtros
- [ ] **Charts**: Gráficos para dashboard admin
- [ ] **FileUpload**: Subida de archivos/imágenes
- [ ] **DatePicker**: Selector de fechas
- [ ] **Toast**: Notificaciones temporales
- [ ] **Breadcrumbs**: Navegación de migas
- [ ] **Skeleton**: Loading skeletons
- [ ] **Pagination**: Componente de paginación

### **Mejoras Planificadas**

- [ ] **Theming**: Sistema de temas dinámicos
- [ ] **Animations**: Transiciones y animaciones
- [ ] **Dark Mode**: Soporte para modo oscuro
- [ ] **Responsive**: Mejoras en responsive design
- [ ] **Performance**: Optimizaciones de rendimiento

---

## 📞 **Soporte**

Para dudas sobre componentes:

- **Documentación**: Ver ejemplos en Storybook
- **Issues**: Reportar en GitHub
- **Slack**: Canal #frontend-components
