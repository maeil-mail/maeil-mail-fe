import { CategoryEN, CategoryKO } from '@/_types';

export const CATEGORY = {
  전체: 'all',
  프론트엔드: 'frontend',
  백엔드: 'backend',
} as const;

export const REVERSE_CATEGORY: Record<CategoryEN, CategoryKO> = Object.fromEntries(
  Object.entries(CATEGORY).map(([k, v]) => [v, k as CategoryKO]),
) as Record<CategoryEN, CategoryKO>;
