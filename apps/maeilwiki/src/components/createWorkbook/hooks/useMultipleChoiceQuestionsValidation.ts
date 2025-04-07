/* eslint-disable @typescript-eslint/no-explicit-any */
import { useValidation } from '@/common/hooks/useValidation';
import { MultipleChoice } from '@/common/types/workbook';
import { useMemo } from 'react';
import { z, ZodIssueCode } from 'zod';

export const OptionSchema = z.object({
  content: z.string({ required_error: '보기 내용을 입력해 주세요.' }),
  isCorrectAnswer: z.boolean({ required_error: '정답 보기를 선택해 주세요.' }),
});

export const MultipleChoiceSchema = z
  .object({
    title: z.string({ required_error: '문제를 입력해 주세요.' }).nonempty('문제를 입력해 주세요.'),
    correctAnswerExplanation: z.string().optional(),
    options: z.array(OptionSchema, { required_error: '보기가 존재하지 않습니다.' }),
  })
  .superRefine((question, ctx) => {
    const hasBlankOption = question.options.some((opt) => opt.content.trim() === '');
    if (hasBlankOption) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: '보기 내용을 모두 입력해 주세요.',
        path: ['options'],
      });
      return;
    }

    const hasCorrect = question.options.some((opt) => opt.isCorrectAnswer);
    if (!hasCorrect) {
      ctx.addIssue({
        code: ZodIssueCode.custom,
        message: '적어도 하나의 정답 보기를 선택해 주세요.',
        path: ['options'],
      });
    }
  });

const MultipleChoiceArraySchema = z.object({
  questions: z.array(MultipleChoiceSchema),
});

export const useMultipleChoiceQuestionsValidation = (questions: Partial<MultipleChoice>[]) => {
  const memoizedQuestions = useMemo(() => ({ questions }), [questions]);

  const result = useValidation(MultipleChoiceArraySchema, memoizedQuestions);

  return { ...result, isValid: result.errors.length === 0 };
};
