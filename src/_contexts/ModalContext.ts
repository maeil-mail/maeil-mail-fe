import { createContext, useContext } from 'react';

export interface ModalContextProps {
  isOpen: boolean;
  onClose: (event?: React.SyntheticEvent) => void;
  position: 'center' | 'bottom';
  size: 'small' | 'medium' | 'large' | 'custom';
}

const defaultContext: Partial<ModalContextProps> = {
  isOpen: false,
  onClose: (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  position: 'center',
};

export const ModalContext = createContext<Partial<ModalContextProps>>(defaultContext);

export const useModal = () => useContext(ModalContext);
