import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const heroSection = style({
  width: '100%',
  height: '77rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: `linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 168, 107, 0.1) 100%
  )`,

  padding: '0 1.6rem',
});

export const heroSectionInnerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

export const heroTypo = style({
  fontSize: '2.4rem',
  textAlign: 'center',
  color: '#888888',
  marginTop: '2rem',
  letterSpacing: '-0.05rem',
});

export const heroHeading = style({
  fontSize: '5.5rem',
  textAlign: 'center',
  fontWeight: 600,
  letterSpacing: '-2.6px',
  color: '#2b2b2b',
});

export const heroButton = style({
  backgroundColor: primary,
  color: 'white',
  borderRadius: '4rem',
  padding: '2rem 4rem',
  fontSize: '2.4rem',
  marginTop: '4rem',
  width: 'fit-content',
  fontWeight: 600,
  boxShadow: '0px 5.5px 25px 0.4px rgba(0, 168, 107, 0.3)',

  transition: 'transform 0.4s ease-in-out',
  ':hover': {
    transform: 'scale(1.03)',
  },
});
