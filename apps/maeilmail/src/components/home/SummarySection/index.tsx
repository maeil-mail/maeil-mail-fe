import * as React from 'react';
import {
  summaryItem1,
  summaryItem2,
  summaryItem3,
  summaryItemList,
  summaryTitle,
  summarySection,
  summaryContainer,
  summaryIcon1,
  summaryIcon2,
  summaryIcon3
} from './summarySection.css';
import SummaryIcon1 from '@/assets/images/summarySection/summary-1.svg';
import SummaryIcon2 from '@/assets/images/summarySection/summary-2.svg';
import SummaryIcon3 from '@/assets/images/summarySection/summary-3.svg';

export default function SummarySection() {
  return (
    <section className={summarySection}>
      <div className={summaryContainer}>
        <div className={summaryTitle}>매일메일과 함께 매일매일 성장해요!</div>
        <div>
          <div className={summaryItemList}>
            <div className={summaryItem1}>
              매일 한 문제씩 <br />
              꾸준한 학습 루틴 형성
              <SummaryIcon1 className={summaryIcon1} />
            </div>
            <div className={summaryItem2}>
              이메일 기반으로 <br />
              푸쉬 피로감 없이 루틴화
              <SummaryIcon2 className={summaryIcon2} />
            </div>
          </div>
          <div className={summaryItem3}>
            실제 기술 면접과 유사한 톤으로 <br />
            실전 대비에 최적인 질문 구성
            <SummaryIcon3 className={summaryIcon3} />
          </div>
        </div>
      </div>
    </section>
  );
}
