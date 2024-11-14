import Button from '@/_components/common/Button/Button';
import { myStyle, primary } from '@/_styles/vars.css';
import * as React from 'react';

export interface UnsubscribeProps {}

export default function Unsubscribe(props: UnsubscribeProps) {
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
        매일메일 구독 해지
      </h1>
      <p
        style={{
          fontSize: '1.6rem',
          textAlign: 'center',
          lineHeight: '3rem',
        }}
      >
        구독을 해지하시면 기술 질문을 더 이상 받아볼 수 없어요.
        <br />
        매일메일 구독을 해지하시겠습니까?
      </p>

      <Button
        variant="border"
        style={{
          width: 'fit-content',
        }}
      >
        구독 해지하기
      </Button>
    </div>
  );
}
