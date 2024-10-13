import {
  container,
  logoWrapper,
  logoContainer,
  buttonContainer,
  logo,
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  subLogo,
} from './landingContent.css';
import { myStyle } from '@/_styles/vars.css';
import Button from '../common/Button/Button';
import { useRouter } from 'next/navigation';
import PAGE_ROUTES from '@/_constants/pageRoutes';

interface LandingContentProps {
  handleModalOpen: () => void;
}

export default function LandingContent({ handleModalOpen }: LandingContentProps) {
  const router = useRouter();

  const handleNavigateToQuestions = () => {
    router.push(PAGE_ROUTES.all_questions);
  };

  return (
    <div className={`${container} `}>
      <div className={logoWrapper}>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${first}`}>안녕하세요</h1>
        </div>

        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${second}`}>메일로 매일 면접 질문을 받아볼수 있는</h1>
        </div>
        <div className={logoContainer}>
          <h1 className={`${logo} ${myStyle} ${third}`}>매일 메일이에요!</h1>
        </div>
      </div>

      <div className={buttonContainer}>
        <Button variant="border" className={fourth} onClick={handleModalOpen}>
          구독신청하기
        </Button>
      </div>

      <div className={logoContainer}>
        <h1 className={`${subLogo} ${myStyle} ${fifth}`}>이미 구독 중이신가요?</h1>
      </div>
      <div className={buttonContainer}>
        <Button variant="primary" className={sixth} onClick={handleNavigateToQuestions}>
          질문 둘러보기
        </Button>
      </div>
    </div>
  );
}
