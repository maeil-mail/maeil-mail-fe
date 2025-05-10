import { useState } from 'react';
import { WorkbookDetailItem } from '@/components/workbookDetail/apis/getWorkbookDetail';
import { workbookAnswerStore } from '../store/workbookAnswer';

type UserAnswers = Map<number, Set<number>>;

export function useSolveWorkbook(workbook: WorkbookDetailItem, workbookId: number) {
  const { questions } = workbook;

  const [userAnswers, setUserAnswers] = useState<UserAnswers>(
    generateInitialAnswers(questions.length),
  );

  const toggleAnswer = (questionIndex: number, targetAnswer: number) => {
    const isMultipleAnswer =
      questions[questionIndex].options.filter((o) => o.isCorrectAnswer).length > 1;

    setUserAnswers((prev) => {
      const next = new Map(prev);
      const currentChoiceSet = new Set(next.get(questionIndex));

      if (currentChoiceSet.has(targetAnswer)) {
        currentChoiceSet.delete(targetAnswer);
      } else if (!isMultipleAnswer) {
        currentChoiceSet.clear();
        currentChoiceSet.add(targetAnswer);
      } else {
        currentChoiceSet.add(targetAnswer);
      }

      next.set(questionIndex, currentChoiceSet);
      return next;
    });
  };

  const submit = () => {
    workbookAnswerStore.save(workbookId, userAnswers);
  };

  return {
    userAnswers,
    toggleAnswer,
    submit,
  };
}

function generateInitialAnswers(count: number): Map<number, Set<number>> {
  return new Map(Array.from({ length: count }, (_, i) => [i, new Set()]));
}
