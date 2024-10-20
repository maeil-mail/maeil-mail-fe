import { myStyle } from '@/_styles/vars.css';
import {
  container,
  title,
  successLayout,
  categoryText,
  radioWrapper,
  buttonWrapper,
  emailWrapper,
  inputSection,
  categoryWrapper,
  verificationNoti,
  verificationSection,
} from './subscribeModalContent.css';
import RadioInput from '../../common/RadioInput/RadioInput';
import Button from '../../common/Button/Button';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import VerifyEmailInput from './VerifyEmailInput';
import Txt from '../../common/Txt/Txt';
import CheckboxInput from '../../common/CheckboxInput/CheckboxInput';
import Input from '../../common/Input/Input';
import useSubscribe from '@/_hooks/useSubscribe';
import SuccessContent from './SuccessContent';

export default function SubscribeModalContent() {
  const {
    isSubscriptionSuccess,
    isSubscriptionPending,
    handleCategory,
    handleVerificationNumber,
    verificationNumber,
    handleConsent,
    handleEmail,
    handleVerifyEmail,
    isSentEmail,
    isAllValid,
    handleSubmitSubscription,
    email,
    isValidEmail,
    isAgreed,
    isVerifyingPending,
    category,
  } = useSubscribe();

  return (
    <div className={`${container} ${myStyle} ${isSubscriptionSuccess && successLayout}`}>
      {isSubscriptionSuccess ? (
        <SuccessContent />
      ) : (
        <>
          <h2 className={title}>매일메일 구독</h2>
          <section className={inputSection}>
            <div className={categoryWrapper}>
              <p className={categoryText}>분야</p>
              <div className={radioWrapper}>
                <RadioInput
                  category="frontend"
                  text="프론트엔드"
                  isSelected={category === 'frontend'}
                  onChange={handleCategory}
                />
                <RadioInput
                  category="backend"
                  text="백엔드"
                  isSelected={category === 'backend'}
                  onChange={handleCategory}
                />
              </div>
            </div>

            <div className={emailWrapper}>
              {!isSentEmail && (
                <VerifyEmailInput
                  email={email}
                  isVerifyingPending={isVerifyingPending}
                  isValidEmail={isValidEmail}
                  handleEmail={handleEmail}
                  handleVerifyEmail={handleVerifyEmail}
                />
              )}
            </div>
          </section>
          {isSentEmail && (
            <section className={verificationSection}>
              <h3 className={verificationNoti}>인증번호가 발송됐습니다.</h3>
              <Input
                onChange={handleVerificationNumber}
                value={verificationNumber}
                variant="primary"
                placeholder="인증번호를 입력해 주세요."
                maxLength={4}
                type="text"
              />

              <CheckboxInput
                text={
                  <>
                    <a
                      href="https://www.maeil-mail.kr/policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      개인정보취급방침
                    </a>
                    에 동의합니다.
                  </>
                }
                isSelected={isAgreed}
                onChange={handleConsent}
              />
            </section>
          )}

          {isSentEmail && (
            <div className={buttonWrapper}>
              {isSubscriptionPending ? (
                <LoadingSpinner />
              ) : (
                <Button
                  variant="primary"
                  disabled={!isAllValid}
                  type="submit"
                  onClick={handleSubmitSubscription}
                >
                  구독하기
                </Button>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
