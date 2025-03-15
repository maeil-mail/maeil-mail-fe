import { vars } from '@maeil/theme';
import { style } from '@vanilla-extract/css';

export const paginatorContainer = style({
  display: 'flex',
  fontSize: '1.6rem',
  width: 'fit-content',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '5rem',

  '@media': {
    [`(max-width: 800px)`]: {
      marginTop: '4rem',
    },
  },
});

export const doubleArrowLeft = style({
  display: 'block',
  marginRight: '2rem',
});

export const doubleArrowRight = style({
  display: 'block',
  marginLeft: '2rem',
});

export const pageNumber = style({
  width: '3.2rem',
  height: '3.2rem',
  margin: '0 0.5rem',
  textAlign: 'center',
  lineHeight: '3.2rem',
  borderRadius: 200,
  fontSize: '1.6rem',
  color: '#999999',
  fontWeight: 400,
  selectors: {
    '&[aria-current="true"]': {
      color: 'white',
      backgroundColor: vars.primary,
      fontWeight: 500,
    },
  },
});
