import Button from '@/_components/common/Button/Button';
import { UNSUBSCRIBE_GOOGLE_FORM_URL } from '@/_constants/externalUrl';
import PAGE_ROUTES from '@/_constants/pageRoutes';
import { myStyle, primary } from '@/_styles/vars.css';
import { useRouter } from 'next/router';
import * as React from 'react';

export interface UnsubscribeProps {}

export default function Unsubscribe(props: UnsubscribeProps) {
  const router = useRouter();

  const handleUnsubscribe = async () => {
    // some api fetching..
    router.push(PAGE_ROUTES.unsubscribeCompleted);
  };

  return (
    <div
      className={myStyle}
      style={{
        width: 'fit-content',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '3rem',
      }}
    >
      <h1
        style={{
          width: 'fit-content',
          fontSize: '2.5rem',
          color: primary,
        }}
      >
        매일메일 구독 해지 완료
      </h1>
      <p
        style={{
          fontSize: '1.6rem',
          textAlign: 'center',
          lineHeight: '3rem',
        }}
      >
        그동안 매일메일을 이용해 주셔서 진심으로 감사드립니다.
        <br />
        매일메일이 구독자님의 앞으로의 개발 커리어를 응원합니다!
        <br />
        <br />
        <span style={{ fontWeight: 600 }}>
          솔직한 구독 해지 사유를 간단하게만이라도 남겨주실 수 있나요?
        </span>
      </p>
      <a href={UNSUBSCRIBE_GOOGLE_FORM_URL} target="_blank">
        <Button variant="primary" style={{ width: '20rem' }}>
          피드백하기
        </Button>
      </a>
    </div>
  );
}
