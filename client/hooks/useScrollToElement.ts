/**
 * @fileoverview Custom hook for smooth scrolling to elements
 * @version 1.0.0
 */

import { useCallback } from 'react';

/**
 * Custom hook for smooth scrolling to elements
 * 
 * @returns Function to scroll to element
 * 
 * @example
 * ```tsx
 * const scrollToElement = useScrollToElement();
 * 
 * const handleContactClick = () => {
 *   scrollToElement('footer');
 * };
 * ```
 */
export function useScrollToElement() {
  const scrollToElement = useCallback((
    selector: string, 
    options: ScrollIntoViewOptions = { behavior: 'smooth' }
  ) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView(options);
    }
  }, []);

  return scrollToElement;
}
