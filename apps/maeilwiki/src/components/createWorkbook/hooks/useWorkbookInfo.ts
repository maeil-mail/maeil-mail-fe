import { useState } from 'react';
import { AVAILABLE_CATEGORIES, AVAILABLE_DIFFICULTIES } from './useWorkbookInfoValidation';
import { Category, Difficulty, WorkbookInfo } from '@/common/types/workbook';

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
