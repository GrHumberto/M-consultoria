/**
 * @fileoverview Custom hook for managing form state and validation
 * @version 1.0.0
 */

import { useState, useCallback, ChangeEvent } from 'react';

interface UseFormOptions<T> {
  initialValues: T;
  onSubmit?: (values: T) => void | Promise<void>;
  validate?: (values: T) => Partial<Record<keyof T, string>>;
}

/**
 * Custom hook for managing form state, validation, and submission
 * 
 * @param options Configuration object for the form
 * @returns Object containing form state and control functions
 * 
 * @example
 * ```tsx
 * const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
 *   initialValues: { email: '', password: '' },
 *   validate: (values) => {
 *     const errors: any = {};
 *     if (!values.email) errors.email = 'Email is required';
 *     return errors;
 *   },
 *   onSubmit: async (values) => {
 *     await submitForm(values);
 *   }
 * });
 * ```
 */
export function useForm<T extends Record<string, any>>({
  initialValues,
  onSubmit,
  validate
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  /**
   * Handle input changes
   */
  const handleChange = useCallback((
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
    
    setValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? (event.target as HTMLInputElement).checked 
        : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof T]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  }, [errors]);

  /**
   * Handle field blur (for validation)
   */
  const handleBlur = useCallback((fieldName: keyof T) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));

    // Validate single field
    if (validate) {
      const fieldErrors = validate(values);
      if (fieldErrors[fieldName]) {
        setErrors(prev => ({
          ...prev,
          [fieldName]: fieldErrors[fieldName]
        }));
      }
    }
  }, [values, validate]);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(async (event?: React.FormEvent) => {
    if (event) {
      event.preventDefault();
    }

    // Validate all fields
    let formErrors: Partial<Record<keyof T, string>> = {};
    if (validate) {
      formErrors = validate(values);
      setErrors(formErrors);
    }

    // Check if form is valid
    const hasErrors = Object.keys(formErrors).length > 0;
    if (hasErrors) {
      return;
    }

    // Submit form
    if (onSubmit) {
      setIsSubmitting(true);
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  }, [values, validate, onSubmit]);

  /**
   * Reset form to initial state
   */
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  /**
   * Set specific field value
   */
  const setValue = useCallback((fieldName: keyof T, value: any) => {
    setValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  }, []);

  /**
   * Set specific field error
   */
  const setError = useCallback((fieldName: keyof T, error: string) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setValue,
    setError
  };
}
