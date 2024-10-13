import { myStyle } from '@/_styles/vars.css';
import {
  container,
  title,
  successLayout,
  categoryText,
  radioWrapper,
  buttonWrapper,
  emailWrapper,
} from './subscribeModalContent.css';
import RadioInput from '../../RadioInput/RadioInput';
import Button from '../../Button/Button';
import LoadingSpinner from '../../LoadingSpinner/LoadingSpinner';
import Divider from '../../Divider/Divider';
import VerifyEmailInput from './VerifyEmailInput';
import Txt from '../../Txt/Txt';
import CheckboxInput from '../../CheckboxInput/CheckboxInput';
import Input from '../../Input/Input';
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
  } = useSubscribe();

  return (
    <div className={`${container} ${myStyle} ${isSubscriptionSuccess && successLayout}`}>
      {isSubscriptionSuccess ? (
        <SuccessContent />
      ) : (
        <>
          <h2 className={title}>구독 정보 등록</h2>
          <Divider variant="default" />
          <p className={categoryText}>분야</p>
          <div className={radioWrapper}>
            <RadioInput category="frontend" text="프론트엔드" onChange={handleCategory} />
            <RadioInput category="backend" text="백엔드" onChange={handleCategory} />
          </div>

          <div className={emailWrapper}>
            {isSentEmail ? (
              <Txt center variant="large">
                인증번호가 전송 되었어요! <br /> 하단에 인증번호를 입력해주세요.
              </Txt>
            ) : (
              <VerifyEmailInput
                email={email}
                isVerifyingPending={isVerifyingPending}
                isValidEmail={isValidEmail}
                handleEmail={handleEmail}
                handleVerifyEmail={handleVerifyEmail}
              />
            )}
          </div>

          {isSentEmail && (
            <>
              <Input
                onChange={handleVerificationNumber}
                value={verificationNumber}
                variant="underLine"
                placeholder="인증번호 4자리를 입력해주세요."
                maxLength={4}
                type={'text'}
                size="large"
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
            </>
          )}

          <div className={buttonWrapper}>
            {isSubscriptionPending ? (
              <LoadingSpinner />
            ) : (
              <Button
                variant="border"
                disabled={!isAllValid}
                type="submit"
                onClick={handleSubmitSubscription}
              >
                매일 메일 신청하기
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
