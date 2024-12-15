import { ModalContext } from '@/_contexts/ModalContext';
import { useContext } from 'react';
import type { PropsWithChildren } from 'react';

interface ModalContainerProps extends PropsWithChildren {
  className?: string;
}

export default function ModalContainer({ className = ' ', children }: ModalContainerProps) {
  const { mountAnimation, unMountAnimation, closing } = useContext(ModalContext);

  const modalClassName = `${closing ? unMountAnimation : mountAnimation} ${className}`;

  return (
    <div className={modalClassName} data-testid="modal-container">
      {children}
    </div>
  );
}
