'use client';

import SubscribeModal from '@/_components/Home/SubscribeModal/SubscribeModal';
import HomeContent from '@/_components/Home/HomeContent';
import useModal from '@/_hooks/useModal';
import { myStyle } from '@/_styles/vars.css';

export default function HomePage() {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <div className={myStyle}>
      <HomeContent openModal={handleModalOpen} />
      <SubscribeModal isOpen={isModalOpen} closeModal={handleModalClose} />
    </div>
  );
}
