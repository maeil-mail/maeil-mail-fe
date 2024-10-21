import { useState } from 'react';
import validateEmail from '@/_utils/validateEmail';

const useEmail = () => {
  const [email, setEmail] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValidEmail = isTouched ? validateEmail(email) : true;

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;

    setEmail(email);

    if (!isTouched) {
      setIsTouched(true);
    }
  };

  return { email, handleEmail, isValidEmail };
};

export default useEmail;
