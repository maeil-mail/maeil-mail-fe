import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const successText = style({
  fontSize: '1.8rem',
  textAlign: 'center',
  marginBottom: '2rem',
});
