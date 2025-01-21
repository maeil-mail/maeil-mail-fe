import BaseModal from '@/_components/common/Modal/BaseModal';
import * as React from 'react';
import SubscribeModalContent from './SubscribeModalContent';

export interface SubscribeModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function SubscribeModal({ isOpen, closeModal }: SubscribeModalProps) {
  return (
    <BaseModal isOpen={isOpen}>
      <SubscribeModalContent closeModal={closeModal} />
    </BaseModal>
  );
}
