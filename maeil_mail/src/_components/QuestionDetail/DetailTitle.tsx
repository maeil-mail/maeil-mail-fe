import { titleText } from './questionDetail.css';
import { myStyle } from '@/_styles/vars.css';

interface DetailTitle {
  title: string;
}

export default function DetailTitle({ title }: DetailTitle) {
  return <h2 className={`${titleText} ${myStyle}`}>{title}</h2>;
}
