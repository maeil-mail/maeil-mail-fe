import UpArrowIcon from '@/_assets/images/upArrow.svg';
import { icon } from './arrowIcon.css';

interface UpArrowProps {
  width: number;
  height: number;
}

export default function UpArrow({ width, height }: UpArrowProps) {
  return <UpArrowIcon width={width} height={height} className={icon} />;
}
