/**
 * @fileoverview Service for handling local storage operations
 * @version 1.0.0
 */

/**
 * Service for handling localStorage operations with error handling
 */
export const storageService = {
  /**
   * Get item from localStorage
   */
  getItem<T>(key: string, defaultValue: T): T {
    try {
      if (typeof window === 'undefined') {
        return defaultValue;
      }

      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  },

  /**
   * Set item in localStorage
   */
  setItem<T>(key: string, value: T): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
      return false;
    }
  },

  /**
   * Remove item from localStorage
   */
  removeItem(key: string): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
      return false;
    }
  },

  /**
   * Clear all localStorage
   */
  clear(): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      window.localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  },

  /**
   * Check if localStorage is available
   */
  isAvailable(): boolean {
    try {
      if (typeof window === 'undefined') {
        return false;
      }

      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, 'test');
      window.localStorage.removeItem(testKey);
      return true;
    } catch {
      return false;
    }
  }
};
