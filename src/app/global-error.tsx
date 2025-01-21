'use client';

import { myStyle } from '@/_styles/vars.css';
import Error from './error';

// root layout에서 발생한 에러는 global-error에 의해 처리됨.
// layout.tsx을 대체하므로 html, body 필요
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className={myStyle}>
        <Error error={error} />;
      </body>
    </html>
  );
}
