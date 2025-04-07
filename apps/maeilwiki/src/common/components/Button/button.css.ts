import { recipe } from '@vanilla-extract/recipes';

export const buttonTheme = recipe({
  variants: {
    theme: {
      primary: {
        color: '#ffffff',
        backgroundColor: '#00A86B',
      },
      light: {
        color: '#00A86B',
        backgroundColor: '#D4EEE6',
      },
      disabled: {
        color: '#ffffff',
        backgroundColor: '#B3E5D3',
      },
    },
  },
});

export const buttonSize = recipe({
  base: {
    lineHeight: 1.5,
    fontWeight: 500,
    borderRadius: '0.8rem',
  },
  variants: {
    size: {
      small: {
        fontSize: '1.4rem',
        padding: '0.95rem 1.6rem',
      },
      medium: {
        fontSize: '1.6rem',
        padding: '1.2rem 2.25rem',
      },
      large: {
        fontSize: '1.6rem',
        padding: '1.6rem 2.25rem',
      },
    },
  },
});
