import { WorkbookQuestionOption } from '@/components/workbookDetail/apis/getWorkbookDetail';

export const isCorrectAnswer = (
  options: WorkbookQuestionOption[],
  userChoices: Set<number> = new Set(),
) => {
  return options.every(({ isCorrectAnswer }, index) => {
    if (isCorrectAnswer) {
      return userChoices.has(index);
    } else {
      return !userChoices.has(index);
    }
  });
};
