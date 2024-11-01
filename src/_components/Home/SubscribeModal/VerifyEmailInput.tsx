import Button from "@/_components/common/Button/Button";
import Input from "@/_components/common/Input/Input";
import {
  categoryText,
  categoryWrapper,
  emailInputWrapper,
  inputWrapper,
} from "./subscribeModalContent.css";
import LoadingSpinner from "@/_components/common/LoadingSpinner/LoadingSpinner";
import { ChangeEventHandler } from "react";

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
      {isVerifyingPending ? (
        <LoadingSpinner />
      ) : (
        <div className={categoryWrapper}>
          <p className={categoryText}>이메일</p>
          <div className={inputWrapper}>
            <Input
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
      )}
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
