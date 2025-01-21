import Modal from '@/_components/common/Modal';
import * as React from 'react';
import SubscribeModalContent from './SubscribeModalContent';

export interface SubscribeModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function SubscribeModal({ isOpen, closeModal }: SubscribeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <SubscribeModalContent data-testid="subscribe-modal-content" closeModal={closeModal} />
    </Modal>
  );
}
