import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '13rem 1.6rem',
  backgroundColor: '#3B3D42',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
});

export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  lineHeight: '4.5rem',
  width: '100%',
  position: 'absolute',
  top: '62%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
});

export const closingHeading = style({
  fontSize: '3.2rem',
  color: '#222',
  fontWeight: 650,
  textAlign: 'center',
  letterSpacing: '-0.1rem',
  lineHeight: 1.4,

  '@media': {
    [`(max-width: 768px)`]: {
      fontSize: '2.5rem',
    },
  },
});

export const closingCTAButton = style({
  background: `linear-gradient(
  to right,
  #24BD99 0%,
  #0FB97B 52%,
  #17C881 100%
)`,
  color: 'white',
  padding: '2rem 4rem',
  borderRadius: '4rem',
  fontSize: '2.2rem',
  fontWeight: 600,
  boxShadow: '0px 5.5px 25px 0.4px rgba(0, 0, 0, 0.1)',

  transition: 'transform 0.4s ease-in-out',
  ':hover': {
    transform: 'scale(1.03)',
  },
});
