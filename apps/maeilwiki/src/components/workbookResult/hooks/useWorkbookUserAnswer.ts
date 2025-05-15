import {
  WorkbookAnswer,
  workbookAnswerStore,
} from '@/components/solveWorkbook/store/workbookAnswer';
import React from 'react';

export const useWorkbookUserAnswer = (workbookId: number) => {
  const [userAnswer, setUserAnswer] = React.useState<WorkbookAnswer>();

  React.useEffect(() => {
    const savedAnswer = workbookAnswerStore.get(workbookId);

    if (!savedAnswer) {
      alert('저장된 풀이가 없습니다. 해당 문제를 풀어야 채점 결과를 확인할 수 있습니다.');
      window.location.replace(`/workbook/${workbookId}`);
      return;
    }

    setUserAnswer(savedAnswer);
  }, []);

  return userAnswer;
};
