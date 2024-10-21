import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '15rem 1.6rem',
  backgroundColor: '#00A86B',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '5rem',
  lineHeight: '4.5rem',
});

export const closingHeading = style({
  color: 'white',
  fontSize: '3rem',
  fontWeight: 600,
  textAlign: 'center',
  letterSpacing: '-0.1rem',

  '@media': {
    'screen and (max-width: 820px)': {
      fontSize: '2.5rem',
    },
  },
});

export const closingCTAButton = style({
  background: '#2b2b2b',
  color: 'white',
  padding: '2rem 4rem',
  borderRadius: '4rem',
  fontSize: '2.2rem',
  fontWeight: '700',
  boxShadow: '0px 5.5px 25px 0.4px rgba(0, 0, 0, 0.3)',

  transition: 'transform 0.4s ease-in-out',
  ':hover': {
    transform: 'scale(1.03)',
  },
});
