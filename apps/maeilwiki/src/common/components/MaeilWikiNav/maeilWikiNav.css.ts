import { keyframes, style } from '@vanilla-extract/css';

export const logo = style({
  height: '2.8rem',

  cursor: 'pointer',

  '@media': {
    '(max-width: 500px)': {
      height: '2.4rem',
    },
  },
});

export const homeLink = style({
  position: 'relative',
});

export const navTabBar = style({
  display: 'flex',
  gap: '3rem',
  lineHeight: 1.5,
});

export const navTab = style({
  cursor: 'pointer',
  color: '#999999',
  fontWeight: 500,
  fontSize: '1.6rem',
  display: 'flex',

  alignItems: 'center',
  transition: 'all ease 0.2s',

  '@media': {
    '(max-width: 500px)': {
      fontSize: '1.4rem',
    },
  },

  ':hover': {
    color: '#2b2b2b',
  },
});

export const externalLinkIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  marginTop: '-0.1rem',
  color: '#BEBEBE',
  transition: 'all ease 0.2s',

  '@media': {
    '(max-width: 500px)': {
      width: '2rem',
      height: '2rem',
    },
  },

  selectors: {
    [`${navTab}:hover &`]: {
      color: 'inherit',
    },
  },
});

const shimmer = keyframes({
  '0%, 100%': {
    opacity: 0.4,
  },
  '50%': {
    opacity: 1,
  },
});

export const loadingSkeleton = style({
  width: '15rem',
  height: '2.8rem',
  borderRadius: 5,
  background: '#edeeee',
  animation: `${shimmer} 1500ms linear infinite`,

  '@media': {
    '(max-width: 800px)': {
      height: '2.5rem',
      width: '14rem',
    },
  },
});
