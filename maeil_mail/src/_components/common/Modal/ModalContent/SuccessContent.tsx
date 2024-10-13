import PAGE_ROUTES from '@/_constants/pageRoutes';
import { useRouter } from 'next/navigation';
import Button from '../../Button/Button';
import { successText, container } from './successContent.css';

export default function SuccessContent() {
  const router = useRouter();

  const handleToQuestionPage = () => {
    router.push(PAGE_ROUTES.all_questions);
  };

  return (
    <div className={container}>
      <span className={successText}>
        신청이 완료 됐어요! <br /> <br /> 매일 오전 7시에 <br />
        면접 질문을 보내드릴게요!
      </span>
      <Button variant="primary" onClick={handleToQuestionPage}>
        질문 둘러보기
      </Button>
    </div>
  );
}
