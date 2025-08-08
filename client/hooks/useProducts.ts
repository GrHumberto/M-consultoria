/**
 * @fileoverview Products CRUD hook for admin management
 * @version 1.0.0
 */

import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import type { Product } from '@/types';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

interface CreateProductData {
  title: string;
  description: string;
  category: string;
  image_url: string;
  features?: string[];
  applications?: string[];
  specifications?: string[];
}

/**
 * Custom hook for products CRUD operations
 */
export function useProducts() {
  const [state, setState] = useState<ProductsState>({
    products: [],
    loading: false,
    error: null
  });

  // Fetch all active products (Demo mode with mock data)
  const fetchProducts = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      // Demo mode - return mock products
      const mockProducts: Product[] = [
        {
          id: '1',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/634821914597c753756f3402065b5bb2bb46ce22?width=800',
          category: 'Equipo de Protección Personal (EPP)',
          title: 'Cascos de seguridad con certificación NOM',
          description: 'Obligatorios en obras y zonas industriales',
          features: ['Fabricados en polietileno de alta densidad', 'Arnés ajustable'],
          applications: ['Construcción', 'Electricidad'],
          specifications: ['Cumple NOM-115-STPS']
        },
        {
          id: '2',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/e0ef1dd8e6a24f7a3644f43cb738a8ffc1221bf7?width=800',
          category: 'Equipos de Emergencia',
          title: 'Extintores recargados con ficha técnica',
          description: 'Agua, polvo químico seco, CO₂, para distintos tipos de fuego',
          features: ['Recarga certificada', 'Ficha técnica incluida'],
          applications: ['Oficinas', 'Industrias'],
          specifications: ['Certificación vigente']
        },
        {
          id: '3',
          image: 'https://api.builder.io/api/v1/image/assets/TEMP/d3441cc602f0d77036de8cece90a17ceddf5ba09?width=800',
          category: 'Señalamientos',
          title: 'Señalamientos de emergencia fotoluminiscentes',
          description: 'Rutas de evacuación, salidas de emergencia, zonas de seguridad',
          features: ['Material fotoluminiscente', 'Resistente a la intemperie'],
          applications: ['Edificios', 'Centros comerciales'],
          specifications: ['Norma oficial vigente']
        }
      ];

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      setState(prev => ({
        ...prev,
        products: mockProducts,
        loading: false
      }));

      return { success: true, products: mockProducts };
    } catch (error: any) {
      console.error('Error fetching products:', error);
      setState(prev => ({
        ...prev,
        error: error.message || 'Error al cargar productos',
        loading: false
      }));
      return { success: false, error: error.message };
    }
  }, []);

  // Create new product (admin only) - Demo mode
  const createProduct = useCallback(async (
    productData: CreateProductData,
    userId: string
  ) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      // Demo mode - simulate creating product
      const newProduct: Product = {
        id: Date.now().toString(),
        image: productData.image_url,
        category: productData.category,
        title: productData.title,
        description: productData.description,
        features: productData.features || [],
        applications: productData.applications || [],
        specifications: productData.specifications || []
      };

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setState(prev => ({
        ...prev,
        products: [newProduct, ...prev.products],
        loading: false
      }));

      return { success: true, data: newProduct };
    } catch (error: any) {
      console.error('Error creating product:', error);
      setState(prev => ({
        ...prev,
        error: error.message || 'Error al crear producto',
        loading: false
      }));
      return { success: false, error: error.message };
    }
  }, []);

  // Update product (admin only) - Demo mode
  const updateProduct = useCallback(async (
    productId: string,
    updates: Partial<CreateProductData>
  ) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      setState(prev => ({
        ...prev,
        products: prev.products.map(product =>
          product.id === productId
            ? {
                ...product,
                title: updates.title || product.title,
                description: updates.description || product.description,
                category: updates.category || product.category,
                image: updates.image_url || product.image,
                features: updates.features || product.features,
                applications: updates.applications || product.applications,
                specifications: updates.specifications || product.specifications
              }
            : product
        ),
        loading: false
      }));

      return { success: true, data: {} };
    } catch (error: any) {
      console.error('Error updating product:', error);
      setState(prev => ({
        ...prev,
        error: error.message || 'Error al actualizar producto',
        loading: false
      }));
      return { success: false, error: error.message };
    }
  }, []);

  // Delete product (admin only) - Demo mode
  const deleteProduct = useCallback(async (productId: string) => {
    try {
      setState(prev => ({ ...prev, loading: true, error: null }));

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      setState(prev => ({
        ...prev,
        products: prev.products.filter(product => product.id !== productId),
        loading: false
      }));

      return { success: true };
    } catch (error: any) {
      console.error('Error deleting product:', error);
      setState(prev => ({
        ...prev,
        error: error.message || 'Error al eliminar producto',
        loading: false
      }));
      return { success: false, error: error.message };
    }
  }, []);

  // Load products on mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    ...state,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct
  };
}
