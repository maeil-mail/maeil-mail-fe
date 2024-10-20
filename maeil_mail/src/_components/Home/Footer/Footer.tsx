import { container, innerWrapper, leftSide, monoLogo } from './footer.css';
import MonoLogo from '@/_assets/images/monoLogo.svg';

export default function Footer() {
  return (
    <footer className={container}>
      <div className={innerWrapper}>
        <div className={leftSide}>
          <MonoLogo className={monoLogo} />
          <p>Copyright © 2024 매일메일</p>
          <p>All rights reserved.</p>
        </div>
        <div>Contact: team.maeilmail@gmail.com</div>
      </div>
    </footer>
  );
}
