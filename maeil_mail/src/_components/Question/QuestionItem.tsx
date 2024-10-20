import type { CategoryEN } from '@/_types';
import { questionItemContainer } from './question.css';
import { myStyle } from '@/_styles/vars.css';
import PAGE_ROUTES from '@/_constants/pageRoutes';
import Link from 'next/link';
import Txt from '../common/Txt/Txt';
import Divider from '../common/Divider/Divider';
import SubTxt from '../common/SubTxt/SubTxt';

interface QuestionItemProps {
  id: number;
  title: string;
  category: CategoryEN;
}

const formatCategory = (category: CategoryEN) => {
  return category === 'backend' ? '백엔드' : category === 'frontend' ? '프론트엔드' : '전체';
};

export default function QuestionItem({ id, title, category }: QuestionItemProps) {
  return (
    <Link href={`${PAGE_ROUTES.question}/${id}`} className={`${questionItemContainer} ${myStyle}`}>
      <Txt variant="large">{title}</Txt>
      <Divider variant="none" />
      <SubTxt variant="default">분야: {formatCategory(category)}</SubTxt>
    </Link>
  );
}
