import { useState } from 'react';
import { QuestionCategoryEN } from '@/_types';
import validateEmail from '../_utils/validateEmail';
import useSubscriptionMutation from './useSubscriptionMutation';
import useVerifyMutation from './useVerifyMutation';
import { MailFrequency } from '@/_types';
import { MAIL_FREQUENCY } from '@/_constants/setting';

export interface SubscriptionFormState {
  email: string;
  categories: QuestionCategoryEN[];
  frequency: MailFrequency;
  verificationNumber: string;
  isAgreed: boolean;
  isTouched: boolean;
  isSentEmail: boolean;
  isVerifyingPending: boolean;
}

const MAX_VERIFICATION_NUMBER_LENGTH = 4;

const useSubscribe = () => {
  const [formState, setFormState] = useState<SubscriptionFormState>({
    email: '',
    categories: [],
    frequency: 'daily',
    verificationNumber: '',
    isAgreed: false,
    isTouched: false,
    isSentEmail: false,
    isVerifyingPending: false,
  });

  const isValidEmail = formState.isTouched && validateEmail(formState.email);

  const isValidCategories = formState.categories.length > 0;

  const isValidVerificationNumber =
    /^\d*$/.test(formState.verificationNumber) &&
    formState.verificationNumber.length === MAX_VERIFICATION_NUMBER_LENGTH;

  const isAllValid =
    isValidCategories && isValidEmail && isValidVerificationNumber && formState.isAgreed;

  const updateForm = (updates: Partial<SubscriptionFormState>) => {
    setFormState((prev) => ({ ...prev, ...updates }));
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateForm({ email: e.target.value });
  };

  const handleFocus = () => {
    if (!formState.isTouched) {
      updateForm({ isTouched: true });
    }
  };

  const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const categories = formState.categories.includes(value as QuestionCategoryEN)
      ? formState.categories.filter((category) => category !== value)
      : [...formState.categories, value as QuestionCategoryEN];

    updateForm({ categories });
  };

  const handleMailFrequency = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (Object.keys(MAIL_FREQUENCY).includes(value)) {
      updateForm({ frequency: value as MailFrequency });
    }
  };

  const handleVerificationNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      updateForm({ verificationNumber: value });
    }
  };

  const handleConsent = () => {
    updateForm({ isAgreed: !formState.isAgreed });
  };

  const {
    subscriptionMutation,
    isSuccess: isSubscriptionSuccess,
    isPending: isSubscriptionPending,
    isError: isSubscriptionError,
  } = useSubscriptionMutation();

  const { handleVerifyEmail, isSentEmail, isVerifyingPending } = useVerifyMutation({
    email: formState.email,
    isValidCategories,
  });

  const handleSubmitSubscription = async () => {
    if (!isValidCategories) {
      return;
    }

    if (!isValidEmail) {
      return;
    }

    subscriptionMutation({
      email: formState.email,
      categories: formState.categories,
      frequency: formState.frequency,
      code: formState.verificationNumber,
    });
  };

  return {
    ...formState,
    isSubscriptionSuccess,
    isSubscriptionPending,
    isSubscriptionError,
    handleCategories,
    handleMailFrequency,
    handleVerificationNumber,
    handleConsent,
    handleEmail,
    handleFocus,
    handleVerifyEmail,
    isSentEmail,
    isAllValid,
    handleSubmitSubscription,
    isValidEmail,
    isValidCategories,
    isVerifyingPending,
  };
};

export default useSubscribe;
