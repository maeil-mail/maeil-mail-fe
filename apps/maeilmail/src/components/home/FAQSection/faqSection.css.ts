import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const toggleSection = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    cursor: 'pointer',

    backgroundColor: '#ffffff',
    maxHeight: '8.5rem',
    overflow: 'hidden',
    transition: 'max-height 1s ease-in-out',
    borderRadius: '1.6rem',
    padding: '2.4rem 3.2rem',
    fontSize: '2rem',
    fontWeight: 500,
  },
  variants: {
    isOpen: {
      true: {
        transition: 'max-height 1s ease',
        maxHeight: '18rem',
      },
      false: {
        transition: 'max-height 0.4s ease',
        maxHeight: '8.5rem',
      },
    },
  },
});

export const downArrow = recipe({
  base: {
    transition: 'transform 0.3s ease',
  },
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(180deg)',
      },
      false: {
        transform: 'rotate(0deg)',
      },
    },
  },
});
