import { CATEGORY } from '@/_constants/category';
import type { ReactNode } from 'react';

export type CategoryKO = keyof typeof CATEGORY;
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
