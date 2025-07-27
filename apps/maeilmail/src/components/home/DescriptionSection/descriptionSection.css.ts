import { style } from '@vanilla-extract/css';

export const descriptionSection = style({
  width: '100%',
  padding: '10rem 2rem',
  display: 'flex',
  justifyContent: 'center',
  background: '#F7FBFC',

  '@media': {
    [`(max-width: 1000px)`]: {
      padding: '6rem 2rem',
    },
    [`(max-width: 768px)`]: {
      padding: '4rem 1.6rem',
    },
  },
});

export const descriptionSectionInnerWrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '8rem',
  padding: '14rem 0',
  alignItems: 'center',

  '@media': {
    [`(max-width: 1000px)`]: {
      gap: '6rem',
      padding: '8rem 0',
    },
    [`(max-width: 768px)`]: {
      gap: '4rem',
      padding: '4rem 0',
    },
    [`(max-width: 500px)`]: {
      gap: '2rem',
      padding: '0 0 4rem 0',
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

  '@media': {
    [`(max-width: 768px)`]: {
      fontSize: '1.4rem',
      padding: '0.5rem 1.2rem',
    },
    [`(max-width: 500px)`]: {
      fontSize: '1.2rem',
      padding: '0.5rem 1.2rem',
    },
  },
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
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FDFB 30%, #E3F8F1 70%, #D1F2E9 100%)',
      flexDirection: 'column-reverse',
      padding: '3.2rem 2.6rem 0 3.2rem',
      gap: '3.7rem',
      // border: '1px solid rgba(0, 0, 0, 0.02)',
    },
    [`(max-width: 768px)`]: {
      padding: '2.4rem 2rem 0 2.4rem',
      gap: '2.8rem',
      background: 'linear-gradient(to bottom, #FFFFFF 0%, #F8FDFB 30%, #E3F8F1 70%, #D1F2E9 100%)',
    },
  },
});

export const descriptionDetail = style({
  marginTop: '3rem',
  fontSize: '1.8rem',
  lineHeight: 1.4,
  color: '#444',

  '@media': {
    [`(max-width: 768px)`]: {
      fontSize: '1.6rem',
      marginTop: '2rem',
    },
  },
});

export const disappearOnMobile = style({
  '@media': {
    [`(max-width: 1000px)`]: {
      display: 'none',
    },
  },
});

export const descriptionContentWrapper = style({
  marginTop: '3rem',

  '@media': {
    [`(max-width: 768px)`]: {
      marginTop: '2rem',
    },
  },
});

export const descriptionTitle = style({
  marginTop: '1.6rem',
  fontSize: '3.2rem',
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: '-0.1rem',
  whiteSpace: 'normal',

  '@media': {
    [`(max-width: 1000px)`]: {
      fontSize: '2.8rem',
      whiteSpace: 'normal',
      letterSpacing: '0rem',
    },
    [`(max-width: 500px)`]: {
      fontSize: '2rem',
      marginTop: '1.2rem',
      whiteSpace: 'nowrap',
    },
  },
});
