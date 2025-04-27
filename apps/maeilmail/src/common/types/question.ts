import type { QUESTION_CATEGORY } from '../constants/questionCategory';

export type QuestionCategoryKO = keyof typeof QUESTION_CATEGORY;
export type QuestionCategoryEN = (typeof QUESTION_CATEGORY)[QuestionCategoryKO];
export type QuestionCategoryENWithOutAll = Exclude<QuestionCategoryEN, 'all'>;

export interface Question {
  id: number;
  title: string;
  content: string;
  category: QuestionCategoryEN;
}

export interface QuestionDetail extends Question {
  createdAt: string;
  updatedAt: string;
}

export interface MyQuestion {
  id: number;
  title: string;
  category: QuestionCategoryENWithOutAll;
}
