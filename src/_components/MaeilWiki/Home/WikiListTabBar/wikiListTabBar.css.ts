import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wikiListTabBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '4rem',
  marginBottom: '2.5rem',
  boxSizing: 'border-box',

  '@media': {
    [`(max-width: 500px)`]: {
      marginTop: '2.4rem',
      marginBottom: '2rem',
    },
  },
});

// WikiCategoryTabBar
export const wikiCategoryTabs = style({
  fontSize: '1.6rem',
  display: 'flex',
  gap: '1rem',

  '@media': {
    [`(max-width: 500px)`]: {
      gap: '0.6rem',
    },
  },
});

export const wikiCategoryTab = recipe({
  base: {
    cursor: 'pointer',
    padding: '0.8rem 2.1rem',
    borderRadius: 999,
    background: '#FFFFFF',
    lineHeight: 1.5,
    fontSize: '1.6rem',
    letterSpacing: '-0.03em',

    '@media': {
      [`(max-width: 500px)`]: {
        fontSize: '1.4rem',
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        border: '1px solid #00A86B',
        color: '#00a86b',
        fontWeight: 600,
      },
      false: {
        color: '#999999',
        border: '1px solid #EBEBEB',
        fontWeight: 400,
      },
    },
  },
});
