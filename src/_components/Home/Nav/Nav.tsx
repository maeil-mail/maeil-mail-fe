import { container, innerWrapper, logo } from './nav.css';
import { subscribeButton } from './nav.css';
import PrimaryLogo from '@/_assets/images/primaryLogo.svg';

interface NavProps {
  onSubscribe: () => void;
}

export default function Nav({ onSubscribe }: NavProps) {
  return (
    <div className={container}>
      <div className={innerWrapper}>
        <PrimaryLogo className={logo} />
        <button onClick={onSubscribe} className={subscribeButton}>
          무료 구독하기
        </button>
      </div>
    </div>
  );
}
