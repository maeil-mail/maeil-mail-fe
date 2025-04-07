/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { z, ZodIssue, ZodObject } from 'zod';

type ErrorMessage = string;

export type GetErrorMessage = (...paths: (string | number)[]) => ErrorMessage | null;

interface UseValidationReturn {
  errors: z.ZodIssue[];
  validate: () => boolean;
  getErrorMessage: GetErrorMessage;
}

export const useValidation = <T extends Record<string, any>>(
  schema: ZodObject<T>,
  values: Record<string, any>,
): UseValidationReturn => {
  const [errors, setErrors] = useState<ZodIssue[]>([]);

  const validate = () => {
    const result = schema.safeParse(values);

    setErrors(result.error?.errors || []);

    return result.success;
  };

  useEffect(() => {
    // values 상태 변경에 따라 에러 상태 갱신. 단, 새로운 에러를 추가하지는 않고 기존 에러를 없애는 동작만 수행.
    const errorPaths = errors.map((err) => err.path[0]);
    const uniqueErrorPaths = [...new Set(errorPaths)];

    const errorPathInfo = Object.fromEntries(uniqueErrorPaths.map((path) => [path, true]));

    const partialSchema = schema.pick(errorPathInfo as any);

    const fieldsToValidate = Object.fromEntries(
      uniqueErrorPaths.map((path) => [path, values[path]]),
    );

    const { error } = partialSchema.safeParse(fieldsToValidate);

    setErrors(error?.errors || []);
  }, [values]);

  const getErrorMessage = (...paths: (string | number)[]) => {
    return (
      errors.find((error) => {
        return paths.every((path) => error.path.includes(path));
      })?.message || null
    );
  };

  return {
    errors,
    validate,
    getErrorMessage,
  };
};
