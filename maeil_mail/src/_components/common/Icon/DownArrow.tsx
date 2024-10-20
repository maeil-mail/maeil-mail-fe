import DownArrowIcon from '@/_assets/images/downArrow.svg';
import { myStyle } from '@/_styles/vars.css';
import { icon } from './arrowIcon.css';

interface DownArrowProps {
  width: number;
  height: number;
}

export default function DownArrow({ width, height }: DownArrowProps) {
  return <DownArrowIcon width={width} height={height} className={`${myStyle} ${icon}`} />;
}
