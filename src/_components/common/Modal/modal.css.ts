import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const modal = style({
  zIndex: 1000,
  selectors: {
    '&::backdrop': {
      background: 'rgba(0, 0, 0, 0.4)',
    },
  },
});

export const modalContent = style({
  background: '#ffffff',
  position: 'fixed',

  '@media': {
    '(max-width: 820px)': {
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      borderTopLeftRadius: '1rem',
      borderTopRightRadius: '1rem',
      width: '100%',
    },
    '(min-width: 821px)': {
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '1rem',
    },
  },
});

export const modalContent2 = recipe({
  base: {
    background: '#ffffff',
    position: 'fixed',
  },

  variants: {
    position: {
      center: {},
      bottom: {},
    },
  },
});
