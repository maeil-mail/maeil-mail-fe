import { QUESTION_CATEGORY } from '@/_constants/questionCategory';
import type { ReactNode } from 'react';
import { MAIL_FREQUENCY } from './../_constants/setting';

export type QuestionCategoryKO = keyof typeof QUESTION_CATEGORY;
export type QuestionCategoryEN = (typeof QUESTION_CATEGORY)[QuestionCategoryKO];

export interface Question {
  id: number;
  title: string;
  content: string;
  category: QuestionCategoryEN;
}

export interface TabInfo {
  name: string;
  content: ReactNode;
}

export type SearchParams = { [key: string]: string | undefined };

export type MailFrequency = keyof typeof MAIL_FREQUENCY;
