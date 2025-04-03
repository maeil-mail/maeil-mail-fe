import MailImage from '@/assets/images/mail.svg';
import WriteImage from '@/assets/images/write.svg';
import {
  answerImage,
  descriptionHeading,
  descriptionSection,
  descriptionSectionInnerWrapper,
  descriptionSubSection,
  descriptionSubSection1Left,
  descriptionTypo,
  mailExample,
  mailExampleList,
  mailImage,
  primaryColor,
  subSection1,
  subSection2,
} from './descriptionSection.css';

export default function DescriptionSection() {
  return (
    <section className={descriptionSection}>
      <div className={descriptionSectionInnerWrapper}>
        <div className={`${descriptionSubSection} ${subSection1}`}>
          <div className={descriptionSubSection1Left}>
            <MailImage className={mailImage} />
            <div className={mailExampleList}>
              <p className={mailExample}>Spring MVC의 실행 흐름에 대해 설명해 주세요.</p>
              <p className={mailExample}>브라우저 렌더링 파이프라인에 대해 설명해 주세요.</p>
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
        <div className={`${descriptionSubSection} ${subSection2}`}>
          <div>
            <h2 className={descriptionHeading}>
              당연히 답안 자료도
              <br />
              같이 보내드립니다.
            </h2>
            <p className={descriptionTypo}>
              모르는 질문이라면 자료를 학습해
              <br />
              꾸준히 기술 지식을 채울 수 있습니다.
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
