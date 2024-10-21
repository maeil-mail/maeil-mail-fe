import { style } from '@vanilla-extract/css';
import { text2 } from '@/_styles/vars.css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  width: '40%',
  margin: '0 auto',
});

export const subText = style({
  color: text2,
});
