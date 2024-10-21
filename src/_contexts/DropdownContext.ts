import { createContext } from 'react';

export interface DropdownContextType<T> {
  isOpen: boolean;
  toggleDropdown: () => void;
  selectedItem: T | null;
  setSelectedItem: (item: T) => void;
}

export const DropdownContext = createContext<DropdownContextType<any> | undefined>(undefined);
