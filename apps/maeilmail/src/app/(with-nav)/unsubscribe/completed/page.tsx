'use client';

import * as React from 'react';
import { Button, PageInnerLayout } from '@maeil/ui';
import { MAEIL_MAIL_GOOGLE_FORM_URL } from '@/common/constants/externalUrl';
import {
  feedbackButton,
  semiBold,
  unsubscribeCompletedContent,
  unsubscribeCompletedTitle,
  unsubscribeCompletedTypo,
} from '@/components/unsubscribe/unsubscribe.css';

export default function Page() {
  return (
    <div>
      <PageInnerLayout>
        <div className={unsubscribeCompletedContent}>
          <h1 className={unsubscribeCompletedTitle}>매일메일 구독 해지 완료</h1>
          <p className={unsubscribeCompletedTypo}>
            그동안 매일메일을 이용해 주셔서 감사합니다.
            <br />
            구독자님의 앞으로의 개발 커리어를 응원합니다!
            <br />
            <br />
            <span className={semiBold}>
              솔직한 구독 해지 사유를 간단하게만이라도 남겨주실 수 있나요?
            </span>
          </p>
          <a href={MAEIL_MAIL_GOOGLE_FORM_URL.unsubscribe} rel="noreferrer noopener">
            <Button variant="primary" className={feedbackButton}>
              피드백하기
            </Button>
          </a>
        </div>
      </PageInnerLayout>
    </div>
  );
}
