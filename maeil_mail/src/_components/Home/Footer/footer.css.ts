import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '5rem',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  fontSize: '1.2rem',
  color: '#9BA1A5',
});

export const innerWrapper = style({
  width: '80%',
  display: 'flex',
  justifyContent: 'space-between',
});

export const leftSide = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});
