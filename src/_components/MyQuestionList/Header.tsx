import * as React from 'react';

export interface MyQuestionListHeaderProps {
  email: string;
}

export default function MyQuestionListHeader({ email }: MyQuestionListHeaderProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <h1 style={{ color: '#00A86B', fontWeight: 600, fontSize: '1.6rem' }}>질문 모아보기</h1>
      <h2 style={{ fontWeight: 600, fontSize: '2.3rem', color: '#2b2b2b' }}>
        지금까지 {email}으로 전송된 질문이에요!
      </h2>
    </div>
  );
}
