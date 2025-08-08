/**
 * @fileoverview Service for handling contact-related operations
 * @version 1.0.0
 */

import { WHATSAPP_NUMBER, COMPANY_EMAIL } from '@/constants';
import type { Product, ServiceRequestForm } from '@/types';

/**
 * Service for handling contact operations
 */
export const contactService = {
  /**
   * Open WhatsApp with pre-filled message for product inquiry
   */
  openWhatsAppForProduct(product: Product): void {
    const message = `Hola, estoy interesado en el producto: ${product.title}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  /**
   * Open WhatsApp with pre-filled message for service inquiry
   */
  openWhatsAppForService(serviceType: string, serviceSubtype: string): void {
    const message = `Hola, estoy interesado en el servicio: ${serviceType} - ${serviceSubtype}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(url, '_blank', 'noopener,noreferrer');
  },

  /**
   * Open email client for product inquiry
   */
  openEmailForProduct(product: Product): void {
    const subject = `Consulta sobre: ${product.title}`;
    const body = `Hola,\n\nEstoy interesado en obtener más información sobre el producto: ${product.title}\n\nCategoría: ${product.category}\n\nGracias.`;
    
    const url = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  },

  /**
   * Open email client for service inquiry
   */
  openEmailForService(formData: ServiceRequestForm): void {
    const subject = `Solicitud de ${formData.serviceType}: ${formData.serviceSubtype}`;
    const body = this.generateServiceEmailBody(formData);
    
    const url = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  },

  /**
   * Generate email body for service request
   */
  generateServiceEmailBody(formData: ServiceRequestForm): string {
    return `
Solicitud de Servicio - M-C Consultoría

TIPO DE SERVICIO:
${formData.serviceType}: ${formData.serviceSubtype}

DATOS DE CONTACTO:
Nombre: ${formData.name} ${formData.apellidoPaterno} ${formData.apellidoMaterno}
Email: ${formData.email}
Teléfono: ${formData.phone}

DATOS DE EMPRESA:
Nombre de empresa: ${formData.companyName}
Ubicación: ${formData.location}

COMENTARIOS ADICIONALES:
${formData.comments || 'N/A'}

---
Este mensaje fue generado desde el sitio web de M-C Consultoría.
    `.trim();
  },

  /**
   * Validate email format
   */
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate phone format (Mexican format)
   */
  isValidPhone(phone: string): boolean {
    const phoneRegex = /^\d{3}[-\s]?\d{3}[-\s]?\d{4}$/;
    return phoneRegex.test(phone);
  }
};
