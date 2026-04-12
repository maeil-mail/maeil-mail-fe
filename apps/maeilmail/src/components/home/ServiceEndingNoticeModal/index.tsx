'use client';

import { Modal } from '@maeil/ui';
import { useEffect, useState } from 'react';

import ServiceEndingNoticeModalContent from './ServiceEndingNoticeModalContent';

const SERVICE_NOTICE_STORAGE_KEY = 'maeil-mail-service-ending-notice-hidden';

export default function ServiceEndingNoticeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDismissed = window.localStorage.getItem(SERVICE_NOTICE_STORAGE_KEY) === 'true';

    if (!isDismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDismissForever = () => {
    window.localStorage.setItem(SERVICE_NOTICE_STORAGE_KEY, 'true');
    setIsOpen(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ServiceEndingNoticeModalContent
        onClose={handleClose}
        onDismissForever={handleDismissForever}
      />
    </Modal>
  );
}
