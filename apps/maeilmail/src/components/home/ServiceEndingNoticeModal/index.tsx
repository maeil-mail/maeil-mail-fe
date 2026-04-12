'use client';

import { Modal } from '@maeil/ui';

import ServiceEndingNoticeModalContent from './ServiceEndingNoticeModalContent';

interface ServiceEndingNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDismissForever: () => void;
}

export default function ServiceEndingNoticeModal({
  isOpen,
  onClose,
  onDismissForever,
}: ServiceEndingNoticeModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ServiceEndingNoticeModalContent
        onClose={onClose}
        onDismissForever={onDismissForever}
      />
    </Modal>
  );
}
