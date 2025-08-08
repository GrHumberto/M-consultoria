/**
 * @fileoverview Custom hook for managing modal state
 * @version 1.0.0
 */

import { useState, useCallback } from 'react';

/**
 * Custom hook for managing modal open/close state
 * 
 * @returns Object containing modal state and control functions
 * 
 * @example
 * ```tsx
 * const { isOpen, open, close, toggle } = useModal();
 * 
 * return (
 *   <>
 *     <button onClick={open}>Open Modal</button>
 *     <Modal isOpen={isOpen} onClose={close}>
 *       Content here
 *     </Modal>
 *   </>
 * );
 * ```
 */
export function useModal(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return {
    isOpen,
    open,
    close,
    toggle
  };
}
