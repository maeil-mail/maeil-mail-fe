import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const trustedBySection = style({
  padding: '14rem 0 14rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 820px)': {
      padding: '7rem 0 14rem 0',
    },
  },
});

export const trustedByHeading = style({
  fontSize: '3rem',
  fontWeight: 600,
  letterSpacing: '-0.21rem',
  textAlign: 'center',

  '@media': {
    'screen and (max-width: 820px)': {
      fontWeight: 700,
      letterSpacing: '-0.1rem',
      fontSize: '2rem',
    },
  },
});

export const primaryColor = style({
  color: primary,
});

export const fingerHeartIcon = style({
  width: '3rem',
  height: '3rem',
  marginBottom: '-0.3rem',

  '@media': {
    'screen and (max-width: 820px)': {
      width: '2rem',
      height: '2rem',
      marginBottom: '-0.35rem',
    },
  },
});

export const tickerWrapper = style({
  width: '100vw',
  maxWidth: '110rem',
  maskImage:
    'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',

  '@media': {
    'screen and (max-width: 820px)': {},
  },
});

export const companyLogo = style({
  margin: 'auto 8rem auto 0',
  height: '5rem',

  '@media': {
    'screen and (max-width: 820px)': {
      margin: 'auto 6rem auto 0',
    },
  },
});

export const lineLogo = style({ height: '12rem' });
