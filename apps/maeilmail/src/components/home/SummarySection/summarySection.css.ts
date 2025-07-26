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

export const summaryItemList = style({
  display: 'flex',
  gap: '1.5rem',
  marginBottom: '1.5rem',
  '@media': {
    [`screen and (max-width: 1000px)`]: { flexDirection: 'column' },
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
    [`screen and (max-width: 1000px)`]: { width: '100%' },
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
    [`screen and (max-width: 1000px)`]: { width: '100%' },
  },
});
export const summaryItem3 = style({});
