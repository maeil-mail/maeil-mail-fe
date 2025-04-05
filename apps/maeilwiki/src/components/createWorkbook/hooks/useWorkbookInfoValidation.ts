import { z } from 'zod';
import { useValidation } from '@/common/hooks/useValidation';

const WorkbookInfoSchema = z.object({
  title: z
    .string({ required_error: '문제집 제목을 입력해 주세요.' })
    .nonempty('문제집 제목을 입력해 주세요.'),
  difficulty: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5)], {
    required_error: '난이도를 입력해 주세요.',
    invalid_type_error: '난이도는 1~5 사이여야 합니다.',
  }),
  category: z.enum(['backend', 'frontend', 'etc'], {
    required_error: '카테고리를 선택해 주세요.',
    invalid_type_error: '유효하지 않은 카테고리입니다.',
  }),
  detail: z.string().optional(),
});

export type WorkbookInfo = z.infer<typeof WorkbookInfoSchema>;

export const useWorkbookInfoValidation = (workbookInfo: Partial<WorkbookInfo>) => {
  const result = useValidation(WorkbookInfoSchema, workbookInfo);

  return { ...result, isValid: result.errors.length === 0 };
};
