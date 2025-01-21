import { QUESTION_CATEGORY } from '@/_constants/questionCategory';

export const abbreviateCategory = (category: string) => {
  switch (category) {
    case QUESTION_CATEGORY.프론트엔드:
      return 'FE';
    case QUESTION_CATEGORY.백엔드:
      return 'BE';
    default:
      return undefined;
  }
};
