import { title, heroSection, subtitle } from './home.css';

export default function HeroSection() {
  return (
    <section className={heroSection}>
      <h1 className={title}>
        우리가 함께 만들어가는
        <br /> 기술 면접 위키 ✍🏻
      </h1>
      <p className={subtitle}>출·퇴근길에 떠올린 질문 하나로 지식 나눔이 시작돼요!</p>
    </section>
  );
}
