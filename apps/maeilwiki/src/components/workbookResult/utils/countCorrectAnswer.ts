import { WorkbookAnswer } from '@/components/solveWorkbook/store/workbookAnswer';
import { WorkbookQuestion } from '@/components/workbookDetail/apis/getWorkbookDetail';
import { isCorrectAnswer } from './isCorrectAnswer';

export const countCorrectAnswer = (questions: WorkbookQuestion[], userAnswer: WorkbookAnswer) => {
  return questions.filter(({ options }, index) => isCorrectAnswer(options, userAnswer.get(index)))
    .length;
};
