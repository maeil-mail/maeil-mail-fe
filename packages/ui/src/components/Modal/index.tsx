'use client';

import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { useDialogModal } from './hooks/useDialogModal';
import { modal, modalContent } from './modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  contentClassName?: string;
}

export function Modal({
  isOpen,
  onClose,
  contentClassName,
  children,
}: PropsWithChildren<ModalProps>) {
  const { targetContainer, dialogRef } = useDialogModal(isOpen);

  if (!targetContainer) {
    return null;
  }

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} className={modal}>
      <div className={`${modalContent} ${contentClassName}`}>{children}</div>
    </dialog>,
    targetContainer,
  );
}
