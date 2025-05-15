import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const main = style({
  flex: 1,
});

export const content = style({
  background: '#FCFCFC',
});

export const withFooterContent = style({
  minHeight: '80vh',
});

export const withoutFooterContent = style({
  minHeight: '100vh',
});
