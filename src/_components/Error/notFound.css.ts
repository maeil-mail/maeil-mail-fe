import { style } from '@vanilla-extract/css';
import { primary, text2 } from '@/_styles/vars.css';

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
  color: primary,
  fontSize: '15rem',
});

export const description = style({
  color: text2,
  fontSize: '2rem',
});

export const buttonWrapper = style({
  width: '100%',
  marginTop: '1.5rem',
});
