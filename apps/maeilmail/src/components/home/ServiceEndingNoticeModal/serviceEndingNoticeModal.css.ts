import { style } from '@vanilla-extract/css';

export const container = style({
  width: 'min(64rem, calc(100vw - 3.2rem))',
  maxHeight: 'min(82vh, 76rem)',
  overflow: 'hidden',
  padding: '3.2rem 3.2rem 2.4rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  color: '#1f2a37',
  background:
    'linear-gradient(180deg, rgba(247,251,252,1) 0%, rgba(255,255,255,1) 28%, rgba(244,251,248,1) 100%)',
  boxShadow: '0 2.4rem 6rem rgba(31, 42, 55, 0.14)',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '100%',
      maxHeight: '85vh',
      padding: '2.4rem 2rem 1.8rem',
      gap: '1.6rem',
    },
  },
});

export const intro = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  flexShrink: 0,
});

export const dateBadge = style({
  width: 'fit-content',
  padding: '0.8rem 1.2rem',
  borderRadius: '999px',
  background: '#e8f7f0',
  color: '#0f9f67',
  fontSize: '1.3rem',
  fontWeight: 700,
  letterSpacing: '-0.01em',
});

export const title = style({
  fontSize: '3rem',
  lineHeight: 1.3,
  fontWeight: 700,
  letterSpacing: '-0.04em',

  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: '2.4rem',
    },
  },
});

export const description = style({
  fontSize: '1.6rem',
  lineHeight: 1.6,
  color: '#5b6470',
});

export const body = style({
  flex: 1,
  minHeight: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
  overflowY: 'auto',
  overscrollBehavior: 'contain',
  WebkitOverflowScrolling: 'touch',
  padding: '2rem 1.6rem 2rem 2rem',
  borderRadius: '2rem',
  background: 'rgba(255, 255, 255, 0.82)',
  border: '0.1rem solid #dfeee7',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.75)',

  selectors: {
    '&::-webkit-scrollbar': {
      width: '0.8rem',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#c7ddd3',
      borderRadius: '999px',
      border: '0.2rem solid transparent',
      backgroundClip: 'padding-box',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
  },

  '@media': {
    'screen and (max-width: 768px)': {
      padding: '1.8rem 1rem 1.8rem 1.6rem',
      borderRadius: '1.6rem',
    },
  },
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  fontSize: '1.55rem',
  lineHeight: 1.68,
  color: '#374151',
  wordBreak: 'keep-all',
});

export const highlight = style({
  fontSize: '1.6rem',
  fontWeight: 700,
  color: '#119c66',
});

export const archiveLink = style({
  color: '#119c66',
  fontWeight: 600,
  textDecoration: 'underline',
  textUnderlineOffset: '0.25rem',
});

export const buttonGroup = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '1.2rem',

  '@media': {
    'screen and (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const footer = style({
  flexShrink: 0,
  paddingTop: '0.4rem',
  background:
    'linear-gradient(180deg, rgba(247,251,252,0) 0%, rgba(247,251,252,0.92) 42%, rgba(247,251,252,1) 100%)',
});
