import Button from "@/_components/common/Button/Button";
import { successText, container, title, buttonSection } from "./successContent.css";
import { FEEDBACK_GOOGLE_FORM_URL } from "@/_constants/externalUrl";

interface SuccessContentProps {
  closeModal: () => void;
}

export default function SuccessContent({ closeModal }: SuccessContentProps) {
  const handleFeedbackButton = () => {
    window.open(FEEDBACK_GOOGLE_FORM_URL);
  };

  return (
    <div className={container}>
      <h2 className={title}>구독 신청 완료</h2>
      <span className={successText}>
        내일부터 오전 7시에 면접 질문을 보내드릴게요.
        <br />
        이제부터 기술 면접 걱정은 저희에게 맡겨 주세요!
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
