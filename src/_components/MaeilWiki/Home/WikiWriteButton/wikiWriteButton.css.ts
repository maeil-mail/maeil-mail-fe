import { keyframes, style } from '@vanilla-extract/css';

const floatButtonAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-50%) translateY(10px) scale(0.95)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(-50%) translateY(0) scale(1)',
  },
});

export const wikiWriteButtonContainer = style({
  position: 'fixed',
  bottom: 35,
  left: '50%',
  transform: 'translateX(-50%)',
  background: `linear-gradient(to right, #24BD99 0%, #0FB97B 52%, #17C881 100%)`,

  cursor: 'pointer',
  borderRadius: 999,
  color: 'white',
  fontSize: '1.8rem',
  fontWeight: 600,
  lineHeight: 1.5,
  padding: '1.45rem 2.3rem',
  boxShadow: '0 0.4rem 0.4rem rgba(158, 158, 158, 0.25)',
  transition: 'all ease-in-out 0.4s',
  animation: `${floatButtonAnimation} 0.8s ease-out`,

  ':hover': {
    transform: 'translateX(-50%) scale(1.04)',
  },

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.4rem',
      padding: '1.35rem 1.85rem',
    },
  },
});

export const buttonContent = style({
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const writeIcon = style({
  width: '1.8rem',
  height: '1.8rem',

  '@media': {
    '(max-width: 800px)': {
      width: '1.5rem',
      height: '1.5rem',
    },
  },
});
