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

export type UpdateWorkbookInfo = <K extends keyof WorkbookInfo>(
  key: K,
  value: WorkbookInfo[K],
) => void;

export type FieldUpdaters = Record<keyof WorkbookInfo, (value: string) => void>;

type UseWorkbookInfoReturn = [Partial<WorkbookInfo>, FieldUpdaters];

export const useWorkbookInfo = (): UseWorkbookInfoReturn => {
  const [workbookInfo, setWorkbookInfo] = useState<Partial<WorkbookInfo>>({});

  const updateWorkbookInfo: UpdateWorkbookInfo = (key, value) => {
    setWorkbookInfo({ ...workbookInfo, [key]: value });
  };

  const fieldUpdaters = {
    title: (value: string) => {
      updateWorkbookInfo('title', value);
    },

    difficulty: (value: string) => {
      const parsedValue = Number(value) as Difficulty;

      if (AVAILABLE_DIFFICULTIES.includes(parsedValue)) {
        updateWorkbookInfo('difficulty', parsedValue);
      }
    },

    category: (value: string) => {
      const typedValue = value as Category;

      if (AVAILABLE_CATEGORIES.includes(typedValue)) {
        updateWorkbookInfo('category', typedValue);
      }
    },

    detail: (value: string) => {
      updateWorkbookInfo('detail', value);
    },
  };

  return [workbookInfo, fieldUpdaters];
};
