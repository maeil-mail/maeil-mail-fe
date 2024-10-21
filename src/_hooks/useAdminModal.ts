import useModal from './useModal';
import { useState, useEffect } from 'react';

const useAdminModal = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();
  const [secretKey, setSecretKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setSecretKey((prevSecretKey) => prevSecretKey + e.key);
    };

    window.addEventListener('keydown', handleKeyDown);

    if (secretKey === process.env.ADMIN_KEY) {
      handleModalOpen();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [secretKey]);

  return {
    isModalOpen,
    handleModalClose,
  };
};

export default useAdminModal;
