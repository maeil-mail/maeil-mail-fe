import { useState } from 'react';

const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(false);
  };

  return { isModalOpen, closeModal, openModal };
};

export default useModal;
