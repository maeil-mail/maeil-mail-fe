import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const wikiWriteButtonContainer = style({
  position: 'fixed',
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
});

export const wikiWriteButtonWrapper = recipe({
  base: {
    fontSize: '1.3rem',
    background: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    borderRadius: '999px',
    padding: '1rem 1.4rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    cursor: 'pointer',
    transition: 'all 1s ease',

    maxWidth: '80rem',
    ':hover': {
      background: 'rgba(0, 0, 0, 0.7)',
    },
  },

  variants: {
    isExpanded: {
      true: {
        width: '95vw',
        background: 'rgba(0, 0, 0, 0.7)',
        height: '5rem',
      },
      false: {
        width: '12.5rem',
        height: '3.7rem',
      },
    },
  },
  defaultVariants: {
    isExpanded: false,
  },
});

export const wikiWriteButton = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
  },

  variants: {
    isExpanded: {
      true: {
        width: 0,
        height: 0,
        opacity: 0,
        position: 'fixed',
      },

      false: {
        transition: 'all 1s ease',
        width: 'fit-content',
        minWidth: 'fit-content',
        gap: '0.5rem',
      },
    },
  },
});

export const writeIcon = style({
  width: '1.7rem',
});

export const wikiInput = recipe({
  base: {
    color: 'white',
    background: 'transparent',
    border: 'none',
    '::placeholder': {
      color: 'rgb(186, 186, 186)',
      fontWeight: 400,
    },
    ':focus': {
      outline: 'none',
    },
  },
  variants: {
    isExpanded: {
      true: {
        width: '100%',
        fontSize: '1.5rem',
        height: '4rem',
        fontWeight: 400,
      },
      false: {
        width: 0,
        height: 0,
        padding: 0,
        margin: 0,
        border: 'none',
        outline: 'none',
        visibility: 'hidden',
        opacity: 0,
        position: 'fixed',
      },
    },
  },
});

export const closeButton = style({
  background: '#EF4452',
  width: '2rem',
  height: '2rem',
  borderRadius: 999,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: '-0.5rem',
  right: '-0.5rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)',
});
