import { z } from 'zod';
import {
  MultipleChoiceSchema,
  OptionSchema,
} from '@/components/createWorkbook/hooks/useMultipleChoiceQuestionsValidation';
import {
  AVAILABLE_CATEGORIES,
  AVAILABLE_DIFFICULTIES,
  WorkbookInfoSchema,
} from '@/components/createWorkbook/hooks/useWorkbookInfoValidation';

export type Option = z.infer<typeof OptionSchema>;

export type MultipleChoice = z.infer<typeof MultipleChoiceSchema>;

export type Difficulty = (typeof AVAILABLE_DIFFICULTIES)[number];

export type Category = (typeof AVAILABLE_CATEGORIES)[number];

export type WorkbookInfo = z.infer<typeof WorkbookInfoSchema>;
