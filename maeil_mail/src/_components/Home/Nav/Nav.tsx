import { container, innerWrapper, logo } from './nav.css';
import { subscribeButton } from './nav.css';

interface NavProps {
  onSubscribe: () => void;
}

export default function Nav({ onSubscribe }: NavProps) {
  return (
    <div className={container}>
      <div className={innerWrapper}>
        <div className={logo}>매일메일</div>
        <button onClick={onSubscribe} className={subscribeButton}>
          무료 구독하기
        </button>
      </div>
    </div>
  );
}
