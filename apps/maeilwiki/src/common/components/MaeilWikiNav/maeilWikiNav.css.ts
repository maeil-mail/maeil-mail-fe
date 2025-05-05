import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

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
  display: 'none',
  gap: '2.4rem',
  lineHeight: 1.5,

  '@media': {
    '(min-width: 768px)': {
      display: 'flex',
    },
  },
});

export const hamburgerMenu = style({
  width: '2.6rem',
  color: '#999999',
  cursor: 'pointer',

  '@media': {
    '(min-width: 768px)': {
      display: 'none',
    },
  },
});

export const navTab = recipe({
  base: {
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
  },

  variants: {
    isActive: {
      true: { color: '#666666' },
    },
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
    [`${navTab.classNames.base}:hover &`]: {
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
  width: '28rem',
  height: '2.8rem',
  borderRadius: 5,
  background: '#edeeee',
  animation: `${shimmer} 1500ms linear infinite`,

  '@media': {
    '(max-width: 800px)': {
      height: '2.5rem',
      width: '20rem',
    },
  },
});
