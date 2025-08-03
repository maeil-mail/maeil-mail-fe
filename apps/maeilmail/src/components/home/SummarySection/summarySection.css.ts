import { style } from '@vanilla-extract/css';

export const summaryTitle = style({
  fontSize: '3.3rem',
  fontWeight: 600,
  letterSpacing: '-0.1rem',
  textAlign: 'center',
  padding: '1.6rem',
  color: '#2b2b2b',
  marginBottom: '4rem',
  marginTop: '4rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontWeight: 700,
      letterSpacing: '-0.1rem',
      fontSize: '2.2rem',
    },
  },
});

export const summaryItemList = style({
  display: 'flex',
  gap: '1.5rem',
  marginBottom: '1.5rem',
  '@media': {
    [`screen and (max-width: 1000px)`]: {
      flexDirection: 'column',
      gap: '1.2rem',
    },
    [`screen and (max-width: 768px)`]: {
      gap: '1rem',
      marginBottom: '1rem',
    },
  },
});

export const summaryItem1 = style({
  padding: '5.2rem 5rem',
  width: '50%',
  height: '30rem',
  background: '#17C881',
  borderRadius: '2.4rem',
  color: '#fff',
  fontSize: '2.5rem',
  fontWeight: 550,
  lineHeight: 1.3,
  position: 'relative',

  '@media': {
    [`screen and (max-width: 1000px)`]: {
      width: '100%',
      padding: '4rem 3.5rem',
      height: '25rem',
      fontSize: '2.2rem',
    },
    [`screen and (max-width: 768px)`]: {
      padding: '3rem 2.5rem',
      height: '20rem',
      fontSize: '1.8rem',
      borderRadius: '1.8rem',
    },
  },
});

export const summaryItem2 = style({
  padding: '5.2rem 5rem',
  width: '50%',
  height: '30rem',
  background: '#37AAFA',
  borderRadius: '2.4rem',
  color: '#fff',
  fontSize: '2.5rem',
  fontWeight: 550,
  position: 'relative',
  lineHeight: 1.3,

  '@media': {
    [`screen and (max-width: 1000px)`]: {
      width: '100%',
      padding: '4rem 3.5rem',
      height: '25rem',
      fontSize: '2.2rem',
    },
    [`screen and (max-width: 768px)`]: {
      padding: '3rem 2.5rem',
      height: '20rem',
      fontSize: '1.8rem',
      borderRadius: '1.8rem',
    },
  },
});

export const summaryItem3 = style({
  padding: '5.2rem 5rem',
  height: '30rem',
  background: '#22BD96',
  borderRadius: '2.4rem',
  color: '#fff',
  fontSize: '2.5rem',
  fontWeight: 550,
  lineHeight: 1.3,
  position: 'relative',
  '@media': {
    [`screen and (max-width: 1000px)`]: {
      padding: '4rem 3.5rem',
      height: '25rem',
      fontSize: '2.2rem',
    },
    [`screen and (max-width: 768px)`]: {
      padding: '3rem 2.5rem',
      height: '20rem',
      fontSize: '1.8rem',
      borderRadius: '1.8rem',
    },
  },
});

export const summarySection = style({
  width: '100%',
  padding: '0 2rem',
  background: '#F7FBFC',
  '@media': {
    [`screen and (max-width: 768px)`]: {
      padding: '0 1.6rem',
    },
  },
});

export const summaryContainer = style({
  width: '100%',
  maxWidth: '110rem',
  margin: '0 auto',
});

export const summaryIcon1 = style({
  width: '25rem',
  position: 'absolute',
  right: 0,
  bottom: 10,
  '@media': {
    [`screen and (max-width: 1000px)`]: {
      width: '20rem',
      right: 0,
      bottom: 5,
    },
    [`screen and (max-width: 768px)`]: {
      width: '14rem',
      right: 0,
      bottom: 0,
    },
  },
});

export const summaryIcon2 = style({
  width: '22rem',
  position: 'absolute',
  right: 30,
  bottom: 20,
  '@media': {
    [`screen and (max-width: 1000px)`]: {
      width: '18rem',
      right: 20,
      bottom: 10,
    },
    [`screen and (max-width: 768px)`]: {
      width: '12rem',
      right: 20,
      bottom: 18,
    },
  },
});

export const summaryIcon3 = style({
  width: '32rem',
  position: 'absolute',
  right: 35,
  bottom: 30,
  '@media': {
    [`screen and (max-width: 1000px)`]: {
      width: '25rem',
      right: 25,
      bottom: 15,
    },
    [`screen and (max-width: 768px)`]: {
      width: '16rem',
      right: 15,
      bottom: 10,
    },
  },
});
