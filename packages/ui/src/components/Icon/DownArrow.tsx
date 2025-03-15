import DownArrowIcon from '@/assets/images/downArrow.svg';
import { icon } from './arrowIcon.css';

interface DownArrowProps {
  width: number;
  height: number;
}

export function DownArrow({ width, height }: DownArrowProps) {
  return <DownArrowIcon width={width} height={height} className={icon} />;
}
