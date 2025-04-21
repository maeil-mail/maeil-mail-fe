import { textWrapper, categoryHighlight } from './questionDetail.css';
import { QuestionCategoryEN } from '@/common/types/question';

interface DetailCategoryProps {
  category: QuestionCategoryEN;
}

export default function DetailCategory({ category }: DetailCategoryProps) {
  const categoryInKR = category === 'frontend' ? '프론트엔드' : '백엔드';
  return (
    <div className={textWrapper}>
      <span className={categoryHighlight}>{categoryInKR}</span>와 관련된 질문이에요.
    </div>
  );
}
