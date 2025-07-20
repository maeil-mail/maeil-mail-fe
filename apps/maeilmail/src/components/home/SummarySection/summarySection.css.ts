import { style } from '@vanilla-extract/css';

export const summaryTitle = style({
  fontSize: '3.3rem',
  fontWeight: 600,
  letterSpacing: '-0.1rem',
  textAlign: 'center',
  padding: '1.6rem',
  color: '#2b2b2b',
  marginBottom: '4rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontWeight: 600,
      letterSpacing: '-0.1rem',
      fontSize: '2rem',
    },
    'screen and (max-width: 400px)': {
      fontWeight: 600,
      letterSpacing: '-0.1rem',
      fontSize: '1.8rem',
    },
  },
});
