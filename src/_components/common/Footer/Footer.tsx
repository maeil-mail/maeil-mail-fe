import {
  GITHUB_ORGANIZATION_URL,
  MAEIL_MAIL_GOOGLE_FORM_URL,
  TEAM_EMAIL,
  MAEIL_MAIL_INTRODUCTION_URL,
} from '@/_constants/externalUrl';
import { container, innerWrapper, side } from './footer.css';

interface FooterProps {
  serviceName: string;
  introduceUrl: string;
  feedbackUrl: string;
}

export default function Footer({ serviceName, introduceUrl, feedbackUrl }: FooterProps) {
  return (
    <footer className={container}>
      <div className={innerWrapper}>
        <section className={side}>
          <p>Copyright © 2025, {serviceName}. All rights reserved.</p>
          <div>
            <a href={`mailto:${TEAM_EMAIL}`}>이메일 {TEAM_EMAIL}</a>
          </div>
        </section>
        <section className={side}>
          <a href={introduceUrl} target="_blank" rel="noopener noreferrer">
            <span>팀 소개</span>
          </a>
          <a href={feedbackUrl} target="_blank" rel="noopener noreferrer">
            <span>서비스 피드백하기</span>
          </a>
          <a href={GITHUB_ORGANIZATION_URL} target="_blank" rel="noopener noreferrer">
            <span>Github 스타는 서비스 운영에 큰 도움이 됩니다</span>
          </a>
        </section>
      </div>
    </footer>
  );
}
