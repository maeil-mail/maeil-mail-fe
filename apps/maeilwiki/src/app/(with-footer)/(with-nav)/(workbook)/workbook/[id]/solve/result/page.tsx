'use client';

import { workbookAnswerStore } from '@/components/solveWorkbook/store/workbookAnswer';
import * as React from 'react';

export interface PageProps {}

export default function Page(props: PageProps) {
  React.useEffect(() => {
    console.log(workbookAnswerStore.get(1));
  }, []);

  return <div>결과 화면</div>;
}
