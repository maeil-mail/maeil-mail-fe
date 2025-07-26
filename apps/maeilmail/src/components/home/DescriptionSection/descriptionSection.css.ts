import { style } from '@vanilla-extract/css';

export const descriptionSection = style({
  width: '100%',
  padding: '10rem 2rem',
  display: 'flex',
  justifyContent: 'center',

  '@media': {
    [`(max-width: 1000px)`]: {
      padding: '0 2rem',
    },
  },
});

export const descriptionSectionInnerWrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '3rem',
  padding: '14rem 0',
  alignItems: 'center',

  '@media': {
    [`(max-width: 768px)`]: {
      gap: '10rem',
    },
  },
});

export const descriptionNameLabel = style({
  background: '#3B3D42',
  color: '#fff',
  lineHeight: '1.5',
  padding: '0.6rem 1.6rem',
  width: 'fit-content',
  borderRadius: 999,
  fontSize: '1.6rem',
});

export const descriptionImage = style({
  width: '40rem',
  height: 'auto',
  borderTopRightRadius: '1.6rem',
  borderTopLeftRadius: '1.6rem',

  '@media': {
    [`(max-width: 1000px)`]: {
      width: '100%',
    },
  },
});

export const descriptionItemContainer = style({
  background: '#E3F8F1',
  width: '100%',
  maxWidth: '110rem',
  padding: '5.9rem 7.5rem 0 7.5rem',
  borderRadius: '2.4rem',
  display: 'flex',
  gap: '10rem',

  '@media': {
    [`(max-width: 1000px)`]: {
      flexDirection: 'column-reverse',
      padding: '3.2rem 2.6rem 0 3.2rem',
      gap: '3.7rem',
    },
  },
});

export const descriptionDetail = style({
  marginTop: '3rem',
  fontSize: '1.8rem',
  lineHeight: 1.4,
  color: '#444',
});

export const disappearOnMobile = style({
  '@media': {
    [`(max-width: 1000px)`]: {
      display: 'none',
    },
  },
});
