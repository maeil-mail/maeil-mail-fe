'use client';

import SecretModalTrigger from '@/_components/common/Modal/ModalContent/SecretModalTrigger';
import SubscribeModal from '@/_components/Home/SubscribeModal/SubscribeModal';
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
        <SubscribeModal isOpen={isModalOpen} closeModal={handleModalClose} />
        <SecretModalTrigger />
      </div>
    </QueryClientProvider>
  );
}
