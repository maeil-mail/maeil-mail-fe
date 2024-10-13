import { ChangeEvent, useState } from 'react';

const MAX_VERIFICATION_NUMBER_LENGTH = 4;

const useVerificationNumber = () => {
  const [verificationNumber, setVerificationNumber] = useState<string>('');
  const isValidVerificationNumber =
    /^\d*$/.test(verificationNumber) &&
    verificationNumber.length === MAX_VERIFICATION_NUMBER_LENGTH;

  const handleVerificationNumber = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (/^\d*$/.test(value)) {
      setVerificationNumber(value);
    }
  };

  return { verificationNumber, handleVerificationNumber, isValidVerificationNumber };
};

export default useVerificationNumber;
