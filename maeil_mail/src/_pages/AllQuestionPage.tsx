'use client';

import CategorySelect from '@/_components/CategorySelect/CategorySelect';
import ScrollToTop from '@/_components/common/ScrollToTop/ScrollToTop';
import QuestionList from '@/_components/Question/QuestionList';
import { CATEGORY } from '@/_constants/category';
import useQuestion from '@/_hooks/queries/useQuestion';
import type { CategoryEN, CategoryKO } from '@/_types';
import { useState } from 'react';

export default function AllQuestionPage() {
  const [category, setCategory] = useState<CategoryEN>('all');
  const { data: questionList } = useQuestion({ category });

  const handleCategorySelect = (selectedCategory: CategoryKO) => {
    setCategory(CATEGORY[selectedCategory]);
  };
  return (
    <>
      <CategorySelect onClick={handleCategorySelect} category={category} />
      <QuestionList questionList={questionList} />
      <ScrollToTop />
    </>
  );
}
