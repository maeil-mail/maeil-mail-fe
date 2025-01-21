import type { PropsWithChildren } from 'react';
import { ModalProvider } from './ModalProvider';
import type { ModalContextProps } from '@/_contexts/ModalContext';
import ModalPortal from './ModalPortal';
import ModalBackdrop from './ModalBackdrop';
import ModalContainer from './ModalContainer';

export default function Modal({
  children,
  isOpen = false,
  onClose = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
  position = 'center',

  size = 'custom',
}: PropsWithChildren<Partial<ModalContextProps>>) {
  const modalProps: ModalContextProps = {
    isOpen,
    position,
    onClose,
    size,
  };

  return isOpen ? <ModalProvider value={modalProps}>{children}</ModalProvider> : null;
}

Modal.Portal = ModalPortal;
Modal.Backdrop = ModalBackdrop;
Modal.Container = ModalContainer;
