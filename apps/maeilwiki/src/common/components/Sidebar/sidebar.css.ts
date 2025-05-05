import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Sidebar
export const overlay = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 40,
    transition: 'opacity 0.5s ease-in-out',
  },

  variants: {
    isOpen: {
      false: {
        opacity: 0,
        visibility: 'hidden',
      },
    },
  },
});

export const sidebar = recipe({
  base: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '260px',
    height: '100vh',
    backgroundColor: '#fff',
    boxShadow: '2px 0 8px rgba(0, 0, 0, 0.15)',
    zIndex: 50,
    transform: 'translateX(100%)',
    transition: 'transform 0.3s ease-in-out',
    paddingTop: '2rem',
    paddingLeft: '2rem',

    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  variants: {
    isOpen: {
      true: { transform: 'translateX(0)' },
    },
  },
});

export const closeButtonWrapper = style({
  padding: '0.5rem',
  width: 'fit-content',
});

export const closeButton = style({
  width: '1rem',
});

export const menuNav = style({
  padding: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});
