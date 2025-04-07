import { z } from 'zod';
import { useValidation } from '@/common/hooks/useValidation';
import { WorkbookInfo } from '@/common/types/workbook';

export const AVAILABLE_DIFFICULTIES = [1, 2, 3, 4, 5] as const;
export const AVAILABLE_CATEGORIES = ['backend', 'frontend', 'etc'] as const;

export const WorkbookInfoSchema = z.object({
  title: z
    .string({ required_error: '문제집 제목을 입력해 주세요.' })
    .nonempty('문제집 제목을 입력해 주세요.'),
  difficulty: z.union(
    AVAILABLE_DIFFICULTIES.map((d) => z.literal(d)) as [
      z.ZodLiteral<1>,
      z.ZodLiteral<2>,
      z.ZodLiteral<3>,
      z.ZodLiteral<4>,
      z.ZodLiteral<5>,
    ],
    {
      required_error: '난이도를 입력해 주세요.',
      invalid_type_error: '난이도는 1~5 사이여야 합니다.',
    },
  ),
  category: z.enum(AVAILABLE_CATEGORIES, {
    required_error: '카테고리를 선택해 주세요.',
    invalid_type_error: '유효하지 않은 카테고리입니다.',
  }),
  detail: z.string().optional(),
});

export const useWorkbookInfoValidation = (workbookInfo: Partial<WorkbookInfo>) => {
  const result = useValidation(WorkbookInfoSchema, workbookInfo);

  return { ...result, isValid: result.errors.length === 0 };
};
