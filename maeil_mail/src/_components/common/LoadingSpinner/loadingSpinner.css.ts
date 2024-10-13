import { style, keyframes } from '@vanilla-extract/css';

const spinAnimation = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const loader = style({
  border: '4px solid rgba(255, 255, 255, 0.4)',
  borderLeftColor: 'transparent',
  borderRadius: '50%',
  width: '3rem',
  height: '3rem',
  animation: `${spinAnimation} 1s linear infinite`,
});
