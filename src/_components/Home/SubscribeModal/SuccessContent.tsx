import Button from '@/_components/common/Button/Button';
import { successText, container, title, buttonSection, caption } from './successContent.css';
import { GOOGLE_FORM_URL } from '@/_constants/externalUrl';
import CloseIcon from '@/_assets/icons/close.svg';
import { closeButton } from './subscribeModalContent.css';

interface SuccessContentProps {
  closeModal: () => void;
}

export default function SuccessContent({ closeModal }: SuccessContentProps) {
  const handleFeedbackButton = () => {
    window.open(GOOGLE_FORM_URL.service);
  };

  return (
    <div className={container}>
      <h2 className={title}>구독 신청 완료</h2>
      <CloseIcon role="button" alt="모달 닫기" onClick={closeModal} className={closeButton} />
      <span className={successText}>
        앞으로 오전 7시에 면접 질문을 보내드릴게요.
        <br />
        이제부터 기술 면접 걱정은 저희에게 맡겨 주세요!
        <br />
        <br />
        <span className={caption}>*첫 번째 컨텐츠부터 순차적으로 발송됩니다.</span>
      </span>
      <section className={buttonSection}>
        <Button onClick={handleFeedbackButton} variant="border">
          피드백하기
        </Button>
        <Button onClick={closeModal} variant="primary">
          확인
        </Button>
      </section>
    </div>
  );
}
