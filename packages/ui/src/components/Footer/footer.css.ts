import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  padding: '5rem 1.6rem',
  fontSize: '1.4rem',
  color: '#999',
  backgroundColor: '#3B3D42',
  fontWeight: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

// 데스크탑 버전
export const desktopInnerWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  width: '80%',
  maxWidth: '110rem',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '3rem',

  '@media': {
    [`screen and (max-width: 1000px)`]: {
      flexDirection: 'column-reverse',
    },
    [`screen and (max-width: 768px)`]: {
      display: 'none',
    },
  },
});

export const logo = style({
  width: '9.5rem',
});

export const copyright = style({
  fontSize: '1.4rem',
  color: '#999999',
  margin: 0,
});

// 브랜딩 섹션
export const brandingSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.9rem',
  flexShrink: 0,
});

export const sectionsWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '3rem',
});

// Contact 섹션
export const contactSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  minWidth: '200px',
});

// Socials 섹션
export const socialsSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  minWidth: '120px',
});

// Etc 섹션
export const etcSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  minWidth: '150px',
});

// 섹션 제목
export const sectionTitle = style({
  fontSize: '1.4rem',
  fontWeight: 550,
  color: 'white',
  margin: 0,
  marginBottom: '0.8rem',
});

// 섹션 링크
export const sectionLink = style({
  color: '#999999',
  textDecoration: 'none',
  fontSize: '1.4rem',
  transition: 'color 0.2s ease',

  selectors: {
    '&:hover': {
      color: 'white',
      textDecoration: 'underline',
    },
  },
});

// 기존 스타일들 (호환성을 위해 유지)
export const side = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  wordBreak: 'keep-all',
});

export const externalLink = style({
  selectors: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

// 모바일 버전
export const mobileInnerWrapper = style({
  display: 'none',
  flexDirection: 'column',
  gap: '3rem',
  width: '100%',
  padding: '0 3rem',
  color: '#fff',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      display: 'flex',
    },
  },
});

export const mobileLogo = style({
  width: '7.7rem',
  marginBottom: '1rem',
});

export const mobileLinkGroups = style({
  display: 'flex',
  gap: '3rem',
  maxWidth: '50rem',
});

export const mobileLinkGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  flex: 1,
  maxWidth: '10rem',
});

export const mobileLinkItem = style({
  textDecoration: 'none',
  fontSize: '1.4rem',
  fontWeight: 350,

  selectors: {
    '&:hover': {
      color: 'white',
      textDecoration: 'underline',
    },
  },
});

// 모바일 Copyright
export const mobileCopyright = style({
  fontSize: '1.2rem',
  color: '#999999',
  margin: 0,
});
