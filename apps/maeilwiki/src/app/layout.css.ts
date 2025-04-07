import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const main = style({
  flex: 1,
});

export const content = style({
  background: '#FCFCFC',
});
