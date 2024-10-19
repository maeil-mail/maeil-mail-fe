import {
  container,
  heroHeading,
  heroSection,
  heroSectionInnerWrapper,
  heroTypo,
  heroButton,
  primaryColor,
  descriptionSection,
  descriptionHeading,
  descriptionTypo,
  descriptionSubSection,
  mailImage,
  mailExample,
  mailExampleList,
  descriptionSubSection1Left,
  answerImage,
  descriptionSectionInnerWrapper,
} from './homeContent.css';
import Nav from './Nav/Nav';
import MailImage from '@/_assets/images/mail.svg';
import WriteImage from '@/_assets/images/write.svg';

interface HomeContentProps {
  openModal: () => void;
}

export default function HomeContent({ openModal }: HomeContentProps) {
  return (
    <div className={container}>
      <Nav />
      <HeroSection openModal={openModal} />
      <DescriptionSection />
    </div>
  );
}

function HeroSection({ openModal }: { openModal: () => void }) {
  return (
    <section className={heroSection}>
      <div className={heroSectionInnerWrapper}>
        <h1 className={heroHeading}>
          매일매일 기술 면접 질문을 <br />
          메일로 보내드릴게요!
        </h1>
        <p className={heroTypo}>
          따로 시간 내지 않아도,
          <br />
          지하철에서 하나씩 읽다보면 면접 걱정이 사라질 거예요.
        </p>
        <button className={heroButton} onClick={openModal}>
          무료 구독하기
        </button>
      </div>
    </section>
  );
}

function DescriptionSection() {
  return (
    <section className={descriptionSection}>
      <div className={descriptionSectionInnerWrapper}>
        <div className={descriptionSubSection}>
          <div className={descriptionSubSection1Left}>
            <MailImage className={mailImage} />
            <div className={mailExampleList}>
              <p className={mailExample}>Spring MVC의 실행 흐름에 대해 설명해주세요.</p>
              <p className={mailExample}>브라우저 렌더링 파이프라인에 대해 설명해주세요.</p>
              <p className={mailExample}>• • •</p>
            </div>
          </div>

          <div>
            <h2 className={descriptionHeading}>
              <span className={primaryColor}>매일</span> 아침 7시,
              <br />
              <span className={primaryColor}>메일</span>을 보내드립니다.
            </h2>
            <p className={descriptionTypo}>
              바쁜 여러분을 대신해
              <br />
              BE/FE 분야에 맞는 기술 면접 질문을
              <br />
              직접 큐레이팅하여 보내드립니다.
            </p>
          </div>
        </div>
        <div className={descriptionSubSection}>
          <div>
            <h2 className={descriptionHeading}>
              당연히 답안 자료도
              <br />
              같이 보내드립니다.
            </h2>
            <p className={descriptionTypo}>
              모르는 질문이라면 자료를 학습해
              <br />
              기술 지식을 채울 수 있습니다.
            </p>
          </div>
          <div>
            <WriteImage className={answerImage} />
          </div>
        </div>
      </div>
    </section>
  );
}
