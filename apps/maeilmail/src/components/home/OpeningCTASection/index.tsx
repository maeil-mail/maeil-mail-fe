import * as React from 'react';
import {
  heroButton,
  container,
  title,
  openingSection,
  description,
  mobileTitle,
} from './openingCTASection.css';
import { GA_EVENT } from '@/common/constants/gaEvent';
import { recordGAEvent } from '@/common/utils/recordGAEvent';

export interface OpeningCTASectionProps {
  onCTA: () => void;
}

export default function OpeningCTASection({ onCTA }: OpeningCTASectionProps) {
  const handleHeroButton = () => {
    recordGAEvent(GA_EVENT.homeClickMainSubscribe);
    onCTA();
  };

  return (
    <section className={openingSection}>
      <div className={container}>
        <div className={mobileTitle}>
          <span>개발자를 위한</span>
          <br />
          <span>기술 면접 질문 메일링 서비스</span>
        </div>
        <span className={title}>기술 면접 질문을 매일, 메일로 보내드릴게요</span>
        <div className={description}>
          바쁜 개발자분들을 대신해 BE/FE 분야에 맞는 <br /> 기술 면접 질문을 직접 큐레이팅하여
          보내드려요
        </div>
        <button className={heroButton} onClick={handleHeroButton}>
          무료 구독하기
        </button>
      </div>
    </section>
  );
}
