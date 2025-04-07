import { style } from '@vanilla-extract/css';

export const actionBarContainer = style({
  position: 'fixed',
  background: '#ffffff',
  bottom: 0,
  width: '100%',
  boxShadow: '0px 0px 8px 0px rgba(153, 153, 153, 0.25)',
});

export const actionBarWrapper = style({
  width: '85%',
  height: '6rem',
  maxWidth: '110rem',
  margin: '0 auto',
});
