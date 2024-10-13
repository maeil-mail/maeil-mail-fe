'use client';

import BaseModal from '@/_components/common/Modal/BaseModal';
import SecretModalTrigger from '@/_components/common/Modal/ModalContent/SecretModalTrigger';
import SubscribeModalContent from '@/_components/common/Modal/ModalContent/SubscribeModalContent';
import LandingContent from '@/_components/LandingContent/LandingContent';
import useModal from '@/_hooks/useModal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
  },
});

export default function Home() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <QueryClientProvider client={client}>
      <LandingContent handleModalOpen={handleModalOpen} />
      <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
        <SubscribeModalContent />
      </BaseModal>
      <SecretModalTrigger />
    </QueryClientProvider>
  );
}
