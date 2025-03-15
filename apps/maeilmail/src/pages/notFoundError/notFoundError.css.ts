import { style } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';

export const container = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const contentWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const mainText = style({
  color: vars.primary,
  fontSize: '15rem',
});

export const description = style({
  color: vars.text2,
  fontSize: '2rem',
});

export const buttonWrapper = style({
  width: '100%',
  marginTop: '1.5rem',
});
