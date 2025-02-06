import { QUESTION_CATEGORY } from '@/_constants/questionCategory';
import QueryLink from '../common/QueryLink';
import { questionCategoryTab, questionCategoryTabs } from './MyQuestionList.css';
import { QuestionCategoryEN, QuestionCategoryKO } from '@/_types';

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
