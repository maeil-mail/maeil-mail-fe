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

export const modalContent = recipe({
  base: {
    background: '#ffffff',
    position: 'fixed',
  },

  variants: {
    position: {
      center: {
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '1.6rem',
      },
      bottom: {
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
      },
    },
  },
});
