import UpArrowIcon from '../../assets/images/upArrow.svg';
import { icon } from './arrowIcon.css';

interface UpArrowProps {
  width: number;
  height: number;
}

export function UpArrow({ width, height }: UpArrowProps) {
  return <UpArrowIcon width={width} height={height} className={icon} />;
}
