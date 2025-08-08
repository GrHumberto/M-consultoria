/**
 * @fileoverview Índice de componentes UI reutilizables
 * @version 1.0.0
 * @author M-C Consultoría Development Team
 *
 * Este archivo centraliza todas las exportaciones de componentes UI
 * para facilitar las importaciones en el resto de la aplicación.
 */

// ==========================================
// COMPONENTES BÁSICOS
// ==========================================
export { McButton } from "./mc-button";
export { McBadge } from "./mc-badge";

// ==========================================
// NAVEGACIÓN Y LAYOUT
// ==========================================
export { Navbar } from "./navbar";

// ==========================================
// TARJETAS Y CONTENEDORES
// ==========================================
export { ServiceCard } from "./service-card";
export { ProductCard } from "./product-card";
export { DictamenCard } from "./dictamen-card";
export { TramiteCard } from "./tramite-card";

// ==========================================
// MODALES
// ==========================================
export { ServiceModal } from "./service-modal";
export { ProductDetailsModal } from "./product-details-modal";
export { AdminProductModal } from "./admin-product-modal";

// ==========================================
// TIPOS EXPORTADOS
// ==========================================
export type { McButtonProps } from "./mc-button";
export type { McBadgeProps } from "./mc-badge";
export type { ServiceCardProps } from "./service-card";
export type { ProductCardProps } from "./product-card";
