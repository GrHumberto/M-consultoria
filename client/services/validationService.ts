/**
 * @fileoverview Service for form validation and data sanitization
 * @version 1.0.0
 */

import { VALIDATION } from '@/constants';
import type { ServiceRequestForm, RegistrationForm, LoginForm } from '@/types';

/**
 * Service for handling form validation
 */
export const validationService = {
  /**
   * Validate service request form
   */
  validateServiceRequest(formData: ServiceRequestForm) {
    const errors: Partial<Record<keyof ServiceRequestForm, string>> = {};

    // Required fields validation
    if (!formData.serviceType) {
      errors.serviceType = 'Tipo de servicio es requerido';
    }

    if (!formData.serviceSubtype) {
      errors.serviceSubtype = 'Subtipo de servicio es requerido';
    }

    if (!formData.email) {
      errors.email = 'Correo electrónico es requerido';
    } else if (!VALIDATION.EMAIL_REGEX.test(formData.email)) {
      errors.email = 'Formato de correo electrónico inválido';
    }

    if (!formData.name || formData.name.length < VALIDATION.NAME_MIN_LENGTH) {
      errors.name = `Nombre debe tener al menos ${VALIDATION.NAME_MIN_LENGTH} caracteres`;
    }

    if (!formData.apellidoPaterno || formData.apellidoPaterno.length < VALIDATION.NAME_MIN_LENGTH) {
      errors.apellidoPaterno = `Apellido paterno debe tener al menos ${VALIDATION.NAME_MIN_LENGTH} caracteres`;
    }

    if (!formData.phone) {
      errors.phone = 'Teléfono es requerido';
    } else if (!VALIDATION.PHONE_REGEX.test(formData.phone)) {
      errors.phone = 'Formato de teléfono inválido (000-000-0000)';
    }

    if (!formData.companyName || formData.companyName.length < VALIDATION.COMPANY_NAME_MIN_LENGTH) {
      errors.companyName = `Nombre de empresa debe tener al menos ${VALIDATION.COMPANY_NAME_MIN_LENGTH} caracteres`;
    }

    if (!formData.location) {
      errors.location = 'Ubicación es requerida';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },

  /**
   * Validate registration form
   */
  validateRegistration(formData: RegistrationForm) {
    const errors: Partial<Record<keyof RegistrationForm, string>> = {};

    if (!formData.nombre || formData.nombre.length < VALIDATION.NAME_MIN_LENGTH) {
      errors.nombre = `Nombre debe tener al menos ${VALIDATION.NAME_MIN_LENGTH} caracteres`;
    }

    if (!formData.apellidoPaterno || formData.apellidoPaterno.length < VALIDATION.NAME_MIN_LENGTH) {
      errors.apellidoPaterno = `Apellido paterno debe tener al menos ${VALIDATION.NAME_MIN_LENGTH} caracteres`;
    }

    if (!formData.email) {
      errors.email = 'Correo electrónico es requerido';
    } else if (!VALIDATION.EMAIL_REGEX.test(formData.email)) {
      errors.email = 'Formato de correo electrónico inválido';
    }

    if (!formData.password) {
      errors.password = 'Contraseña es requerida';
    } else if (formData.password.length < VALIDATION.PASSWORD_MIN_LENGTH) {
      errors.password = `Contraseña debe tener al menos ${VALIDATION.PASSWORD_MIN_LENGTH} caracteres`;
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirmación de contraseña es requerida';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }

    if (!formData.acceptTerms) {
      errors.acceptTerms = 'Debe aceptar los términos y condiciones';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },

  /**
   * Validate login form
   */
  validateLogin(formData: LoginForm) {
    const errors: Partial<Record<keyof LoginForm, string>> = {};

    if (!formData.email) {
      errors.email = 'Correo electrónico es requerido';
    } else if (!VALIDATION.EMAIL_REGEX.test(formData.email)) {
      errors.email = 'Formato de correo electrónico inválido';
    }

    if (!formData.password) {
      errors.password = 'Contraseña es requerida';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  },

  /**
   * Sanitize string input
   */
  sanitizeString(input: string): string {
    return input.trim().replace(/\s+/g, ' ');
  },

  /**
   * Sanitize email input
   */
  sanitizeEmail(email: string): string {
    return email.trim().toLowerCase();
  },

  /**
   * Sanitize phone input
   */
  sanitizePhone(phone: string): string {
    // Remove all non-digit characters and format as XXX-XXX-XXXX
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 10) {
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    }
    return phone; // Return original if not 10 digits
  }
};
