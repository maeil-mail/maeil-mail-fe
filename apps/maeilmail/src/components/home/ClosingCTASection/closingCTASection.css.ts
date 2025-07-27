import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '13rem 1.6rem',
  backgroundColor: '#2D2F33',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',

  '@media': {
    [`(max-width: 1000px)`]: {
      padding: '8rem 0',
    },
  },
});

export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  lineHeight: '4.5rem',
  width: '100%',
  position: 'absolute',
  top: '62%',
  left: '45%',
  transform: 'translate(-50%, -50%)',

  '@media': {
    [`(max-width: 1000px)`]: {
      top: '63%',
      left: '45%',
      gap: '1.5rem',
      lineHeight: '3.5rem',
    },
    [`(max-width: 768px)`]: {
      gap: '1.2rem',
      lineHeight: '3rem',
    },
    [`(max-width: 600px)`]: {
      top: '67%',
      left: '50%',
      gap: '1.5rem',
      lineHeight: '3.5rem',
    },
  },
});

export const closingHeading = style({
  fontSize: '3.2rem',
  color: '#222',
  fontWeight: 650,
  textAlign: 'center',
  letterSpacing: '-0.1rem',
  lineHeight: 1.4,

  '@media': {
    [`(max-width: 1000px)`]: {
      fontSize: '2.8rem',
      color: '#222',
    },
    [`(max-width: 768px)`]: {
      fontSize: '2rem',
    },
  },
});

export const closingCTAButton = style({
  background: `linear-gradient(
    to right,
    #24BD99 0%,
    #0FB97B 52%,
    #17C881 100%
  )`,
  color: 'white',
  padding: '2rem 4rem',
  borderRadius: '4rem',
  fontSize: '2.2rem',
  fontWeight: 600,
  boxShadow: '0px 5.5px 25px 0.4px rgba(0, 0, 0, 0.1)',
  border: 'none',
  cursor: 'pointer',

  transition: 'transform 0.4s ease-in-out',
  ':hover': {
    transform: 'scale(1.03)',
  },

  '@media': {
    [`(max-width: 1000px)`]: {
      padding: '1.8rem 3.5rem',
      fontSize: '2rem',
    },
    [`(max-width: 768px)`]: {
      padding: '1.5rem 3rem',
      fontSize: '1.8rem',
    },
    [`(max-width: 600px)`]: {
      padding: '1.5rem 2rem',
      fontSize: '1.6rem',
    },
  },
});

export const imageContainer = style({
  position: 'relative',
  width: '100%',
  maxWidth: '110rem',
  marginLeft: '5rem',

  '@media': {
    [`(max-width: 1000px)`]: {
      marginLeft: '0',
      maxWidth: '100%',
    },
  },
});

export const backgroundImage = style({
  width: '100%',
  height: 'auto',

  '@media': {
    [`(max-width: 600px)`]: {
      display: 'none',
    },
  },
});

export const backgroundImageMobile = style({
  width: '90%',
  height: 'auto',
  display: 'none',
  marginLeft: 'auto',

  '@media': {
    [`(max-width: 600px)`]: {
      display: 'block',
    },
  },
});

export const descriptionText = style({
  fontSize: '1.8rem',
  marginBottom: '2.5rem',
  color: '#222',
  textAlign: 'center',

  '@media': {
    [`(max-width: 1000px)`]: {
      fontSize: '1.6rem',
      marginBottom: '2rem',
    },
    [`(max-width: 768px)`]: {
      fontSize: '1.4rem',
      marginBottom: '1.5rem',
    },
  },
});
