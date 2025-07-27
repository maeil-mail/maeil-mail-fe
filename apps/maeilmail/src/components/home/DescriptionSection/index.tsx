import {
  descriptionDetail,
  descriptionImage,
  descriptionItemContainer,
  descriptionNameLabel,
  descriptionSection,
  descriptionSectionInnerWrapper,
  disappearOnMobile,
  descriptionContentWrapper,
  descriptionTitle,
} from './descriptionSection.css';
import DescImg1 from '@/assets/images/DescriptionSection/desc-1.png';
import DescImg2 from '@/assets/images/DescriptionSection/desc-2.png';
import DescImg3 from '@/assets/images/DescriptionSection/desc-3.png';
import Image from 'next/image';

export default function DescriptionSection() {
  return (
    <section className={descriptionSection}>
      <div className={descriptionSectionInnerWrapper}>
        <div className={descriptionItemContainer}>
          <Image src={DescImg1} className={descriptionImage} alt="desc-1" />
          <div className={descriptionContentWrapper}>
            <div className={descriptionNameLabel}>질문 확인</div>
            <div className={descriptionTitle}>매일 아침 7시, 메일함을 확인해보세요</div>
            <div className={`${descriptionDetail} ${disappearOnMobile}`}>
              내가 신청한 분야의 기술 면접 질문을
              <br className={disappearOnMobile} />
              확인하고 스스로 답해보세요
            </div>
          </div>
        </div>
        <div className={descriptionItemContainer}>
          <Image src={DescImg2} className={descriptionImage} alt="desc-2" />
          <div className={descriptionContentWrapper}>
            <div className={descriptionNameLabel}>질문 답안</div>
            <div className={descriptionTitle}>답안 자료도 함께 보내드리고 있어요</div>
            <div className={`${descriptionDetail} ${disappearOnMobile}`}>
              내가 신청한 분야의 기술 면접 질문을
              <br />
              확인하고 스스로 답해보세요
            </div>
          </div>
        </div>
        <div className={descriptionItemContainer}>
          <Image src={DescImg3} className={descriptionImage} alt="desc-3" />
          <div className={descriptionContentWrapper}>
            <div className={descriptionNameLabel}>질문 모아보기</div>
            <div className={descriptionTitle}>매일 쌓인 질문은 따로 정리해놨어요</div>
            <div className={`${descriptionDetail} ${disappearOnMobile}`}>
              내가 신청한 분야의 기술 면접 질문을
              <br />
              확인하고 스스로 답해보세요
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
