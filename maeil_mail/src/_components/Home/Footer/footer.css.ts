import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  padding: '5rem 1.6rem',
  display: 'flex',
  justifyContent: 'center',
  fontSize: '1.2rem',
  color: '#9BA1A5',
});

export const innerWrapper = style({
  display: 'flex',
  width: '80%',
  justifyContent: 'space-between',

  '@media': {
    'screen and (max-width: 820px)': {
      width: '90%',
    },
  },
});

export const leftSide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const contactText = style({
  display: 'flex',
});
