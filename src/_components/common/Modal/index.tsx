'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useDialogModal } from './hooks/useDialogModal';
import { modal, modalContent } from './modal.css';

export type ModalPosition = 'center' | 'bottom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  position?: ModalPosition;
}

export default function Modal({ isOpen, onClose, children }: PropsWithChildren<ModalProps>) {
  const { targetContainer, dialogRef } = useDialogModal(isOpen);

  if (!targetContainer) {
    return null;
  }

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} className={modal}>
      <div className={modalContent}>{children}</div>
    </dialog>,
    targetContainer,
  );
}
