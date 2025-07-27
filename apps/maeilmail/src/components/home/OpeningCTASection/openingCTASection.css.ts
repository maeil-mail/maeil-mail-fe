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
    [`screen and (max-width: 1024px)`]: {
      fontSize: '2.2rem',
      padding: '1.8rem 3.5rem',
      margin: '6rem auto 0 auto',
    },
    [`screen and (max-width: 768px)`]: {
      fontSize: '2rem',
      padding: '1.6rem 3rem',
      margin: '5rem auto 0 auto',
      fontWeight: 700,
    },
    [`screen and (max-width: 480px)`]: {
      fontSize: '1.8rem',
      padding: '1.4rem 2.5rem',
      margin: '4rem auto 0 auto',
      borderRadius: '3rem',
    },
    [`screen and (max-width: 360px)`]: {
      fontSize: '1.6rem',
      padding: '1.2rem 2rem',
      margin: '3rem auto 0 auto',
      borderRadius: '2.5rem',
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
      display: 'none',
    },
  },
});

export const mobileTitle = style({
  display: 'none',
  fontSize: '2.4rem',
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: 1.3,

  '@media': {
    [`screen and (max-width: 768px)`]: {
      display: 'block',
    },
  },
});

export const openingSection = style({
  background: '#3B3D42',
  width: '100%',
});

export const description = style({
  fontSize: '2rem',
  lineHeight: 1.5,
  fontWeight: 300,
  textAlign: 'center',
  marginTop: '4rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontSize: '1.6rem',
    },
  },
});
