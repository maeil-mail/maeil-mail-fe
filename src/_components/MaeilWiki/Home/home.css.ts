import { style } from '@vanilla-extract/css';

// HeroSection
export const heroSection = style({
  position: 'relative',
  cursor: 'pointer',
});

export const heroBackgroundImage = style({
  width: '100%',
  height: '23.9rem',
  objectFit: 'cover',

  '@media': {
    [`(max-width: 500px)`]: {
      height: '18.5rem',
    },
  },
});

export const heroTypo = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'white',

  whiteSpace: 'nowrap',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '1rem',

  '@media': {
    [`(max-width: 500px)`]: {
      gap: '1.3rem',
    },
  },
});

export const heroMainTitle = style({
  fontSize: '4.6rem',
  lineHeight: '140%',

  '@media': {
    [`(max-width: 500px)`]: {
      fontSize: '2.6rem',
      whiteSpace: 'wrap',
      textAlign: 'center',
      wordBreak: 'keep-all',
    },
    [`(min-width: 500px) and (max-width: 700px)`]: {
      fontSize: '3rem',
    },
    [`(min-width: 700px) and (max-width: 1000px)`]: {
      fontSize: '4rem',
    },
  },
});

export const heroSubTitle = style({
  fontSize: '2rem',
  fontWeight: 300,
  lineHeight: '150%',
  letterSpacing: '-0.006em',

  '@media': {
    [`(max-width: 500px)`]: {
      fontSize: '1.4rem',
    },
    [`(min-width: 500px) and (max-width: 700px)`]: {
      fontSize: '1.6rem',
    },
    [`(min-width: 700px) and (max-width: 1000px)`]: {
      fontSize: '2rem',
    },
  },
});
