import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const minimumPadding = style({
  padding: '0 1.6rem',
});
