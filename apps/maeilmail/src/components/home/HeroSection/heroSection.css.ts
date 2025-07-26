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

export const heroTitle = style({
  color: '#ffffff',
  fontSize: '17rem',
  whiteSpace: 'nowrap',
  letterSpacing: '-1.2rem',
  lineHeight: 1.4,

  '@media': {
    [`screen and (max-width: 1000px)`]: {
      fontSize: '10rem',
      fontWeight: 300,
      letterSpacing: '-0.8rem',
    },
    [`screen and (max-width: 600px)`]: {
      fontSize: '7rem',
      fontWeight: 300,
      letterSpacing: '-0.4rem',
    },
    [`screen and (max-width: 400px)`]: {
      fontSize: '5rem',
      fontWeight: 300,
      letterSpacing: '-0.2rem',
    },
  },
});

export const heroSubtitle = style({
  color: '#F7FBFC',
  fontSize: '2.8rem',
  letterSpacing: '-0.2rem',
  lineHeight: '1.5',
  fontWeight: 500,

  '@media': {
    [`screen and (max-width: 650px)`]: {
      display: 'none',
    },
  },
});

export const heroFigure1 = style({
  position: 'absolute',
  width: '20rem',
  left: 79,
  top: 95,
  '@media': { [`screen and (max-width: 1300px)`]: { display: 'none' } },
});
export const heroFigure2 = style({
  position: 'absolute',
  width: '22rem',
  left: 61,
  bottom: 230,
  '@media': { [`screen and (max-width: 1300px)`]: { display: 'none' } },
});
export const heroFigure3 = style({
  position: 'absolute',
  width: '24rem',
  right: 54,
  top: 119,
  '@media': { [`screen and (max-width: 1300px)`]: { display: 'none' } },
});
export const heroFigure4 = style({
  position: 'absolute',
  width: '28rem',
  right: 293,
  bottom: 0,
  '@media': { [`screen and (max-width: 1300px)`]: { display: 'none' } },
});
export const heroFigure5 = style({
  position: 'absolute',
  width: '19rem',
  right: 0,
  bottom: 100,
  '@media': { [`screen and (max-width: 1300px)`]: { display: 'none' } },
});
