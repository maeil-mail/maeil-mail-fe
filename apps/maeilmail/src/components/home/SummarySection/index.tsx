import * as React from 'react';
import { summaryTitle } from './summarySection.css';
import SummaryIcon1 from '@/assets/images/summarySection/summary-1.svg';
import SummaryIcon2 from '@/assets/images/summarySection/summary-2.svg';
import SummaryIcon3 from '@/assets/images/summarySection/summary-3.svg';

export default function SummarySection() {
  return (
    <section style={{ width: '100%', marginBottom: '10rem' }}>
      <div style={{ width: '100%', maxWidth: '110rem', margin: '0 auto' }}>
        <div className={summaryTitle}>매일메일과 함께 매일매일 성장해요!</div>
        <div>
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                padding: '5.2rem 5rem',
                width: '50%',
                height: '30rem',
                background: '#17C881',
                borderRadius: '2.4rem',
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: 550,
                lineHeight: 1.3,
                position: 'relative',
              }}
            >
              매일 한 문제씩 <br />
              꾸준한 학습 루틴 형성
              <SummaryIcon1
                style={{ width: '23rem', position: 'absolute', right: 0, bottom: 10 }}
              />
            </div>
            <div
              style={{
                padding: '5.2rem 5rem',
                width: '50%',
                height: '30rem',
                background: '#37AAFA',
                borderRadius: '2.4rem',
                color: '#fff',
                fontSize: '2.5rem',
                fontWeight: 550,
                position: 'relative',
                lineHeight: 1.3,
              }}
            >
              이메일 기반으로 <br />
              푸쉬 피로감 없이 루틴화
              <SummaryIcon2
                style={{ width: '20rem', position: 'absolute', right: 30, bottom: 20 }}
              />
            </div>
          </div>
          <div
            style={{
              padding: '5.2rem 5rem',
              height: '30rem',
              background: '#22BD96',
              borderRadius: '2.4rem',
              color: '#fff',
              fontSize: '2.5rem',
              fontWeight: 550,
              lineHeight: 1.3,
              position: 'relative',
            }}
          >
            실제 기술 면접과 유사한 톤으로 <br />
            실전 대비에 최적인 질문 구성
            <SummaryIcon3 style={{ width: '36rem', position: 'absolute', right: 35, bottom: 30 }} />
          </div>
        </div>
      </div>
    </section>
  );
}
