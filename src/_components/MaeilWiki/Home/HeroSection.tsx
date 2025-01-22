import { title } from './home.css';

export default function HeroSection() {
  return (
    <div>
      <h1 className={title}>
        <p>💬</p>
        <p>
          함께 만들어가는
          <br /> 기술 면접 위키
        </p>
      </h1>
    </div>
  );
}
