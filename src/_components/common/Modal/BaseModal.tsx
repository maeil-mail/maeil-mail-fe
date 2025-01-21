import type { PropsWithChildren } from 'react';
import Modal from './Modal';
import { container } from './modal.css';

interface BaseModalProps extends PropsWithChildren {
  isOpen: boolean;
  handleModalClose?: () => void;
}

export default function BaseModal({ isOpen, handleModalClose, children }: BaseModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <Modal.Backdrop opacity="rgba(0, 0, 0, 0.4)">
        <Modal.Container className={container}>{children}</Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
