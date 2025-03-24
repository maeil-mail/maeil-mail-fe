import { QUESTION_CATEGORY } from '@/common/constants/questionCategory';
import QueryLink from '@/common/components/QueryLink';
import { questionCategoryTab, questionCategoryTabs } from './questionList.css';
import { QuestionCategoryEN, QuestionCategoryKO } from '@/common/types/question';

const categories = Object.keys(QUESTION_CATEGORY) as QuestionCategoryKO[];

interface QuestionCategoryTabsProps {
  selectedCategory: QuestionCategoryEN;
}

export default function QuestionCategoryTabs({ selectedCategory }: QuestionCategoryTabsProps) {
  return (
    <div className={questionCategoryTabs}>
      {categories.map((category) => {
        const categoryInEnglish = QUESTION_CATEGORY[category];

        return (
          <QueryLink
            key={categoryInEnglish}
            appendedQuery={{ category: categoryInEnglish, page: 1 }}
          >
            <div
              className={questionCategoryTab({
                isSelected: selectedCategory === categoryInEnglish,
              })}
            >
              {category}
            </div>
          </QueryLink>
        );
      })}
    </div>
  );
}
