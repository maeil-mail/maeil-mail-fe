import { ChangeEventHandler } from 'react';
import { Button, Input, LoadingSpinner } from '@maeil/ui';
import {
  categoryText,
  categoryWrapper,
  emailInputWrapper,
  inputWrapper,
} from './subscribeModalContent.css';

interface VerifyEmailInputProps {
  isValidEmail: boolean;
  handleEmail: ChangeEventHandler<HTMLInputElement>;
  email: string;
  handleVerifyEmail: () => void;
  isVerifyingPending: boolean;
  isValidCategories: boolean;
  onFocus: () => void;
}

export default function VerifyEmailInput({
  isValidEmail,
  handleEmail,
  email,
  handleVerifyEmail,
  isVerifyingPending = true,
  onFocus,
  isValidCategories,
}: VerifyEmailInputProps) {
  return (
    <div className={emailInputWrapper}>
      {isVerifyingPending && <LoadingSpinner />}

      <div className={categoryWrapper}>
        <label htmlFor="email">
          <span className={categoryText}>이메일</span>
        </label>
        <div className={inputWrapper}>
          <Input
            id="email"
            variant="primary"
            isError={email.length > 0 && !isValidEmail}
            placeholder="johndoe@gmail.com"
            errorMessage="유효하지 않은 이메일입니다."
            onChange={handleEmail}
            value={email}
            onFocus={onFocus}
          />
        </div>
      </div>

      <Button
        variant="primary"
        disabled={!email || isVerifyingPending || !isValidEmail || !isValidCategories}
        onClick={handleVerifyEmail}
      >
        확인
      </Button>
    </div>
  );
}
