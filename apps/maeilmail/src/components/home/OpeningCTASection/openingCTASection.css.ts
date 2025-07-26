import { vars } from '@maeil/theme';
import { style } from '@vanilla-extract/css';

export const heroButton = style({
  background: `linear-gradient(
  to right,
  #24BD99 0%,
  #0FB97B 52%,
  #17C881 100%
)`,
  color: 'white',
  borderRadius: '4rem',
  padding: '2rem 4rem',
  fontSize: '2.4rem',
  margin: '7rem auto 0 auto',
  display: 'block',
  width: 'fit-content',
  fontWeight: 600,
  boxShadow: '0px 5.5px 25px 0.4px rgba(0, 168, 107, 0.3)',

  transition: 'transform 0.4s ease-in-out',
  ':hover': {
    transform: 'scale(1.03)',
  },

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
  },
});

export const container = style({
  width: 'fit-content',
  margin: '0 auto',
  padding: '17.5rem 2rem',
  color: '#fff',

  '@media': {
    [`screen and (max-width: 800px)`]: {
      padding: '6rem 2rem',
    },
  },
});

export const title = style({
  fontSize: '3.8rem',
  letterSpacing: '-0.1rem',
  fontWeight: 500,
  textAlign: 'center',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontSize: '2.4rem',
      fontWeight: 600,
    },
  },
});
