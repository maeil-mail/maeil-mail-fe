import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const trustedBySection = style({
  padding: '14rem 0 24rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '10rem',

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

export const tickerWrapper = style({
  width: '100vw',
  maxWidth: '110rem',
  maskImage:
    'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
  fontSize: '6rem',

  '@media': {
    'screen and (max-width: 820px)': {
      fontSize: '5rem',
    },
  },
});

export const logoMargin = style({
  marginRight: '8rem',

  '@media': {
    'screen and (max-width: 820px)': {
      marginRight: '4rem',
    },
  },
});

export const naverLogo = style({
  fontWeight: 900,
  color: '#03C75A',
  letterSpacing: '-0.3rem',
});
export const naverLetterA = style({ letterSpacing: '-1.2rem' });

export const kakaoLogo = style({
  fontWeight: 300,
  color: '#FFCD00',
});

export const lineLogo = style({
  fontWeight: 800,
  color: '#00C300',
});

export const coupangLogo = style({
  fontWeight: 500,
  letterSpacing: '-0.6rem',
});
export const coupangBrown = style({ color: '#521110' });
export const coupangRed = style({ color: '#D73126' });
export const coupangYellow = style({ color: '#E99923' });
export const coupangGreen = style({ color: '#92BA3E' });
export const coupangBlue = style({ color: '#4FA3D9' });

export const baeminLogo = style({
  fontWeight: 700,
  color: '#000000',
  letterSpacing: '-0.2rem',
});

export const baeminSmallFont = style({
  fontSize: '4rem',
  fontWeight: 800,

  '@media': {
    'screen and (max-width: 820px)': {
      fontSize: '3rem',
    },
  },
});

export const dangnLogo = style({
  fontWeight: 800,
  color: '#FE6F0F',
  letterSpacing: '-0.2rem',
});

export const tossLogo = style({
  fontWeight: 700,
  color: '#0064FF',
  letterSpacing: '-0.2rem',
});
