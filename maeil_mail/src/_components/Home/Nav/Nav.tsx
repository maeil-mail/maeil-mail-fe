import { container, innerWrapper, logo } from './nav.css';
import { subscribeButton } from './nav.css';

export default function Nav() {
  return (
    <div className={container}>
      <div className={innerWrapper}>
        <div className={logo}>매일메일</div>
        <button className={subscribeButton}>무료 구독하기</button>
      </div>
    </div>
  );
}
