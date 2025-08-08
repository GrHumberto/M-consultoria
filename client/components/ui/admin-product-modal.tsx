/**
 * @fileoverview Admin modal for creating and editing products
 * @version 1.0.0
 */

import { useState, useEffect } from 'react';
import { X, Plus, Upload } from 'lucide-react';
import { McButton } from './mc-button';
import type { Product } from '@/types';

interface AdminProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (productData: ProductFormData) => Promise<{ success: boolean; error?: string }>;
  product?: Product | null; // For editing
  loading?: boolean;
}

interface ProductFormData {
  title: string;
  description: string;
  category: string;
  image_url: string;
  features: string[];
  applications: string[];
  specifications: string[];
}

const CATEGORIES = [
  'Equipo de Protección Personal (EPP)',
  'Equipos de Emergencia',
  'Señalamientos',
  'Complementos para Protección y Respuesta'
];

export function AdminProductModal({ 
  isOpen, 
  onClose, 
  onSave, 
  product, 
  loading = false 
}: AdminProductModalProps) {
  const [formData, setFormData] = useState<ProductFormData>({
    title: '',
    description: '',
    category: '',
    image_url: '',
    features: [''],
    applications: [''],
    specifications: ['']
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ProductFormData, string>>>({});

  // Initialize form with product data when editing
  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        category: product.category,
        image_url: product.image,
        features: product.features?.length ? product.features : [''],
        applications: product.applications?.length ? product.applications : [''],
        specifications: product.specifications?.length ? product.specifications : ['']
      });
    } else {
      setFormData({
        title: '',
        description: '',
        category: '',
        image_url: '',
        features: [''],
        applications: [''],
        specifications: ['']
      });
    }
    setErrors({});
  }, [product, isOpen]);

  const handleInputChange = (field: keyof ProductFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleArrayChange = (
    field: 'features' | 'applications' | 'specifications',
    index: number,
    value: string
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'features' | 'applications' | 'specifications') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (
    field: 'features' | 'applications' | 'specifications',
    index: number
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ProductFormData, string>> = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Título es requerido';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Descripción es requerida';
    }

    if (!formData.category) {
      newErrors.category = 'Categoría es requerida';
    }

    if (!formData.image_url.trim()) {
      newErrors.image_url = 'URL de imagen es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Clean up array fields (remove empty strings)
    const cleanData = {
      ...formData,
      features: formData.features.filter(f => f.trim()),
      applications: formData.applications.filter(a => a.trim()),
      specifications: formData.specifications.filter(s => s.trim())
    };

    const result = await onSave(cleanData);
    
    if (result.success) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              {product ? 'Editar Producto' : 'Agregar Producto'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              disabled={loading}
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título del Producto *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Ej: Cascos de Seguridad con Certificación NOM"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoría *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Seleccionar categoría</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={3}
                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Descripción detallada del producto..."
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">{errors.description}</p>
              )}
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL de Imagen *
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  value={formData.image_url}
                  onChange={(e) => handleInputChange('image_url', e.target.value)}
                  className={`flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    errors.image_url ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
                <button
                  type="button"
                  className="px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
                  title="Subir imagen"
                >
                  <Upload size={20} className="text-gray-600" />
                </button>
              </div>
              {errors.image_url && (
                <p className="text-red-500 text-sm mt-1">{errors.image_url}</p>
              )}
            </div>

            {/* Dynamic Arrays */}
            {(['features', 'applications', 'specifications'] as const).map(field => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field === 'features' ? 'Características' : 
                   field === 'applications' ? 'Aplicaciones' : 'Especificaciones'}
                </label>
                <div className="space-y-2">
                  {formData[field].map((item, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange(field, index, e.target.value)}
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder={`${field === 'features' ? 'Característica' : 
                                     field === 'applications' ? 'Aplicación' : 'Especificación'} ${index + 1}`}
                      />
                      {formData[field].length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem(field, index)}
                          className="px-3 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem(field)}
                    className="flex items-center gap-2 px-3 py-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                  >
                    <Plus size={16} />
                    Agregar {field === 'features' ? 'característica' : 
                            field === 'applications' ? 'aplicación' : 'especificación'}
                  </button>
                </div>
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6 border-t">
              <McButton
                type="button"
                variant="outline-orange"
                className="flex-1"
                onClick={onClose}
                disabled={loading}
              >
                Cancelar
              </McButton>
              <McButton
                type="submit"
                variant="orange"
                className="flex-1"
                disabled={loading}
              >
                {loading ? 'Guardando...' : (product ? 'Actualizar' : 'Crear Producto')}
              </McButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
