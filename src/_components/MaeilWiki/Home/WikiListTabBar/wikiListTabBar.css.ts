import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wikiListTabBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '3rem',
  marginBottom: '1.5rem',
  padding: '0 0.5rem',
});

export const wikiWriteButton = style({
  background: '#00a86b',
  fontSize: '1.4rem',
  fontWeight: 600,
  padding: '1rem 1.4rem',
  color: 'white',
  borderRadius: 999,
  cursor: 'pointer',
});

// WikiCategoryTabBar
export const wikiCategoryTabBar = style({
  fontSize: '1.6rem',
  display: 'flex',
  gap: '1.5rem',
});

export const wikiCategoryTab = recipe({
  base: {
    cursor: 'pointer',
  },
  variants: {
    isSelected: {
      true: {
        color: '#00a86b',
        fontWeight: 600,
      },
      false: {
        color: '#adb5bd',
        fontWeight: 400,
      },
    },
  },
});
