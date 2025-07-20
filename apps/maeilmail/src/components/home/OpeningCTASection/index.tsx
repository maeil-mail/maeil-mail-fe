import * as React from 'react';
import { heroButton } from './openingCTASection.css';
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
    <section style={{ background: '#3B3D42', width: '100%' }}>
      <div
        style={{ width: 'fit-content', margin: '0 auto', padding: '17.5rem 2rem', color: '#fff' }}
      >
        <div
          style={{
            fontSize: '3.8rem',
            letterSpacing: '-0.1rem',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          기술 면접 질문을 매일, 메일로 보내드릴게요
        </div>
        <div
          style={{
            fontSize: '2rem',
            lineHeight: 1.5,
            fontWeight: 300,
            textAlign: 'center',
            marginTop: '4rem',
          }}
        >
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
