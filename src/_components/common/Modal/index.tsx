'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from './hooks/useModal';
import { modal, modalContent } from './modal.css';

export type ModalPosition = 'center' | 'bottom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: ModalPosition;
}

export default function Modal({
  isOpen,
  onClose,
  position = 'center',
  children,
}: PropsWithChildren<ModalProps>) {
  const { targetContainer, dialogRef } = useModal(isOpen);

  if (!targetContainer) {
    return null;
  }

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} className={modal}>
      <div className={modalContent({ position })}>{children}</div>
    </dialog>,
    targetContainer,
  );
}
