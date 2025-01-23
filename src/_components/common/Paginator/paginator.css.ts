import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const paginatorContainer = style({
  display: 'flex',
  fontSize: '1.6rem',
  width: 'fit-content',
  alignItems: 'center',
  margin: '0 auto',
  marginTop: '4rem',
});

export const doubleArrowLeft = style({
  width: '2rem',
  display: 'block',
  marginRight: '1rem',
});

export const doubleArrowRight = style({
  width: '2rem',
  display: 'block',
  marginLeft: '1rem',
});

export const pageNumber = style({
  width: '3.3rem',
  height: '3.3rem',
  margin: '0 0.5rem',
  textAlign: 'center',
  lineHeight: '3.3rem',
  borderRadius: 200,
  color: '#6b7684',
  selectors: {
    '&[aria-current="true"]': {
      color: 'white',
      backgroundColor: primary,
    },
  },
});
