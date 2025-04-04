import { useState } from 'react';

export const AVAILABLE_DIFFICULTIES = [1, 2, 3, 4, 5] as const;
export const AVAILABLE_CATEGORIES = ['backend', 'frontend', 'etc'] as const;

export type Difficulty = (typeof AVAILABLE_DIFFICULTIES)[number];
export type Category = (typeof AVAILABLE_CATEGORIES)[number];

export interface WorkbookInfo {
  title: string;
  difficulty: Difficulty;
  category: Category;
  detail: string;
}

export type EditWorkbookInfo = <K extends keyof WorkbookInfo>(
  key: K,
  value: WorkbookInfo[K],
) => void;

export type FieldUpdaters = Record<keyof WorkbookInfo, (value: string) => void>;

type UseWorkbookInfoReturn = [Partial<WorkbookInfo>, FieldUpdaters];

export const useWorkbookInfo = (): UseWorkbookInfoReturn => {
  const [workbookInfo, setWorkbookInfo] = useState<Partial<WorkbookInfo>>({});

  const editWorkbookInfo: EditWorkbookInfo = (key, value) => {
    setWorkbookInfo({ ...workbookInfo, [key]: value });
  };

  const fieldUpdaters = {
    title: (value: string) => {
      editWorkbookInfo('title', value);
    },

    difficulty: (value: string) => {
      const parsedValue = Number(value) as Difficulty;

      if (AVAILABLE_DIFFICULTIES.includes(parsedValue)) {
        editWorkbookInfo('difficulty', parsedValue);
      }
    },

    category: (value: string) => {
      const typedValue = value as Category;

      if (AVAILABLE_CATEGORIES.includes(typedValue)) {
        editWorkbookInfo('category', typedValue);
      }
    },

    detail: (value: string) => {
      editWorkbookInfo('detail', value);
    },
  };

  return [workbookInfo, fieldUpdaters];
};
