import { style } from '@vanilla-extract/css';

export const heroSection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#F7FBFC',
  position: 'relative',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontWeight: 700,
      fontSize: '3rem',
    },
  },
});
