import { style } from '@vanilla-extract/css';

export const bottomFixedBar = style({
  background: '#ffffff',
  boxShadow: '0px 0px 8px 0px rgba(153, 153, 153, 0.25)',
  position: 'fixed',
  bottom: 0,
  zIndex: 999,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '1.6rem 0',

  '@media': {
    [`(max-width: 500px)`]: {
      padding: '1rem 0',
    },
  },
});

export const bottomFixedBarInnerWrapper = style({
  maxWidth: '114rem',
  width: '100%',
  margin: '0 auto',
  alignItems: 'center',
  display: 'flex',
  padding: '0 2rem',
});
