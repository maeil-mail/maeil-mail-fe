import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const userReactionSectionContainer = style({
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

export const userReactionHeading = style({
  fontSize: '3.5rem',
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

export const commentContainer = style({ lineHeight: '2.2rem', color: '#666666' });

export const logoFont = style({ color: primary, fontWeight: 600 });

export const bold = style({ fontWeight: 700 });

// userReactionItem
export const userReactionItemContainer = style({
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  margin: '1rem',
  padding: '3rem',
  borderRadius: '2rem',
  width: '31rem',
  fontSize: '1.5rem',
});

export const userReactionProfile = style({
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  marginBottom: '1rem',
});

export const userReactionName = style({
  fontSize: '1.9rem',
  letterSpacing: '0.2rem',
  fontWeight: 600,
  marginBottom: '0.3rem',
});

export const userReactionBackground = style({ color: '#666666', fontSize: '1.4rem' });
