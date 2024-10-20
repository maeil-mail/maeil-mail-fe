import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const trustedBySection = style({
  padding: '14rem 0 24rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '14rem',

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
      fontSize: '2.4rem',
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

export const naverLogo = style({
  fontWeight: 900,
  color: '#03C75A',
  marginRight: '8rem',
  letterSpacing: '-0.3rem',
});
export const naverLetterA = style({ letterSpacing: '-1.2rem' });

export const kakaoLogo = style({
  fontWeight: 300,
  color: '#FFCD00',
  marginRight: '8rem',
});

export const lineLogo = style({
  fontWeight: 800,
  color: '#00C300',
  marginRight: '8rem',
});
export const coupangLogo = style({
  fontWeight: 500,
  letterSpacing: '-0.6rem',
  marginRight: '5rem',
});
export const coupangBrown = style({ color: '#521110' });
export const coupangRed = style({ color: '#D73126' });
export const coupangYellow = style({ color: '#E99923' });
export const coupangGreen = style({ color: '#92BA3E' });
export const coupangBlue = style({ color: '#4FA3D9' });

export const baeminLogo = style({
  fontWeight: 700,
  color: '#000000',
  marginRight: '8rem',
  letterSpacing: '-0.2rem',
});
export const baeminSmallFont = style({ fontSize: '4rem', fontWeight: 800 });

export const dangnLogo = style({
  fontWeight: 800,
  color: '#FE6F0F',
  marginRight: '8rem',
  letterSpacing: '-0.2rem',
});
export const tossLogo = style({
  fontWeight: 700,
  color: '#0064FF',
  marginRight: '8rem',
  letterSpacing: '-0.2rem',
});
