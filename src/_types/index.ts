import { CATEGORY } from '@/_constants/category';
import type { ReactNode } from 'react';
import { MAIL_FREQUENCY } from './../_constants/setting';

type CategoryKO = keyof typeof CATEGORY;
export type CategoryEN = (typeof CATEGORY)[CategoryKO];

export interface Question {
  id: number;
  title: string;
  content: string;
  category: CategoryEN;
}

export interface TabInfo {
  name: string;
  content: ReactNode;
}

export type SearchParams = { [key: string]: string | undefined };

export type MailFrequency = keyof typeof MAIL_FREQUENCY;
