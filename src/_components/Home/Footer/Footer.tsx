import { container, innerWrapper, leftSide, contactText } from './footer.css';

export default function Footer() {
  return (
    <footer className={container}>
      <div className={innerWrapper}>
        <div className={leftSide}>
          <p>Copyright © 2024 매일메일</p>
          <p>All rights reserved.</p>
        </div>
        <div className={contactText}>Contact: team.maeilmail@gmail.com</div>
      </div>
    </footer>
  );
}
