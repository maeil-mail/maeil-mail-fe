import { bottomFixedBar, bottomFixedBarInnerWrapper } from './bottomFixedBar.css';

interface BottomFixedBarProps {
  children: React.ReactNode;
}

export default function BottomFixedBar({ children }: BottomFixedBarProps) {
  return (
    <div className={bottomFixedBar}>
      <div className={bottomFixedBarInnerWrapper}>{children}</div>
    </div>
  );
}
