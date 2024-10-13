import { useState } from 'react';

const useConsent = () => {
  const [isAgreed, setIsAgreed] = useState(false);

  const handleConsent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
  };

  return {
    isAgreed,
    handleConsent,
  };
};

export default useConsent;
