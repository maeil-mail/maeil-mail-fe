'use client';

import BaseModal from '@/_components/common/Modal/BaseModal';
import SecretModalTrigger from '@/_components/common/Modal/ModalContent/SecretModalTrigger';
import SubscribeModalContent from '@/_components/common/Modal/ModalContent/SubscribeModalContent';
import HomeContent from '@/_components/Home/HomeContent';
import useModal from '@/_hooks/useModal';
import { myStyle } from '@/_styles/vars.css';
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
      <div className={myStyle}>
        <HomeContent openModal={handleModalOpen} />
        <BaseModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}>
          <SubscribeModalContent />
        </BaseModal>
        <SecretModalTrigger />
      </div>
    </QueryClientProvider>
  );
}
