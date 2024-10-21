import { categoryText, textWrapper, categoryHighlight } from './questionDetail.css';
import { myStyle } from '@/_styles/vars.css';

interface DetailCategoryProps {
  category: 'frontend' | 'backend';
}

export default function DetailCategory({ category }: DetailCategoryProps) {
  const categoryInKR = category === 'frontend' ? '프론트엔드' : '백엔드';
  return (
    <div className={`${categoryText} ${myStyle}`}>
      <div className={textWrapper}>
        <p className={categoryHighlight}>{categoryInKR}</p>와 관련된 질문이에요.
      </div>

      <p>참고해주세요!</p>
    </div>
  );
}
