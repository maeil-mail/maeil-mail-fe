import type { QUESTION_CATEGORY } from '../constants/questionCategory';

export type QuestionCategoryKO = keyof typeof QUESTION_CATEGORY;
export type QuestionCategoryEN = (typeof QUESTION_CATEGORY)[QuestionCategoryKO];

export interface Question {
  id: number;
  title: string;
  content: string;
  category: QuestionCategoryEN;
}
