import { GITHUB_ORGANIZATION_URL, TEAM_EMAIL } from '../../constants/externalUrl';
import {
  container,
  desktopInnerWrapper,
  logo,
  copyright,
  brandingSection,
  contactSection,
  socialsSection,
  etcSection,
  sectionTitle,
  sectionLink,
  sectionsWrapper,
  mobileInnerWrapper,
  mobileLogo,
  mobileLinkGroups,
  mobileLinkGroup,
  mobileLinkItem,
  mobileCopyright,
} from './footer.css';
import Logo from '../../assets/icons/footer-logo.svg';

interface FooterProps {
  serviceName: string;
  introduceUrl: string;
  feedbackUrl: string;
}

export function Footer({ serviceName, introduceUrl, feedbackUrl }: FooterProps) {
  return (
    <footer className={container}>
      <div className={desktopInnerWrapper}>
        <section className={brandingSection}>
          <Logo className={logo} />
          <p className={copyright}>Copyright © 2025 {serviceName}. All rights reserved.</p>
        </section>

        <div className={sectionsWrapper}>
          <section className={contactSection}>
            <h3 className={sectionTitle}>Contact</h3>
            <a href={`mailto:${TEAM_EMAIL}`} className={sectionLink}>
              {TEAM_EMAIL}
            </a>
          </section>

          <section className={socialsSection}>
            <h3 className={sectionTitle}>Socials</h3>
            <a
              href="https://velog.io/@maeilmail/posts"
              className={sectionLink}
              rel="noopener noreferrer"
            >
              Velog
            </a>
            <a href={GITHUB_ORGANIZATION_URL} className={sectionLink} rel="noopener noreferrer">
              Github
            </a>
          </section>

          {/* Etc 섹션 */}
          <section className={etcSection}>
            <h3 className={sectionTitle}>Etc</h3>
            <a href={introduceUrl} className={sectionLink} rel="noopener noreferrer">
              팀 소개
            </a>
            <a href={feedbackUrl} className={sectionLink} rel="noopener noreferrer">
              서비스 피드백
            </a>
          </section>
        </div>
      </div>

      <div className={mobileInnerWrapper}>
        <Logo className={mobileLogo} />

        <div className={mobileLinkGroups}>
          <div className={mobileLinkGroup}>
            <a href={`mailto:${TEAM_EMAIL}`} className={mobileLinkItem}>
              Contact
            </a>
            <a href={introduceUrl} className={mobileLinkItem} rel="noopener noreferrer">
              팀소개
            </a>
          </div>

          <div className={mobileLinkGroup}>
            <a
              href="https://velog.io/@maeilmail/posts"
              className={mobileLinkItem}
              rel="noopener noreferrer"
            >
              Velog
            </a>
            <a href={feedbackUrl} className={mobileLinkItem} rel="noopener noreferrer">
              피드백
            </a>
          </div>

          <div className={mobileLinkGroup}>
            <a href={GITHUB_ORGANIZATION_URL} className={mobileLinkItem} rel="noopener noreferrer">
              Github
            </a>
          </div>
        </div>

        <p className={mobileCopyright}>Copyright © 2025 {serviceName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
