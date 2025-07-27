import { vars } from '@maeil/theme';
import { style } from '@vanilla-extract/css';

export const userReactionSectionContainer = style({
  padding: '24rem 0 14rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
  alignItems: 'center',
  marginBottom: '10rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      padding: '7rem 0 7rem 0',
      gap: '6.5rem',
    },

    'screen and (max-width: 400px)': {
      padding: '6rem 0 6rem 0',
    },
  },
});

export const userReactionHeading = style({
  fontSize: '3.3rem',
  fontWeight: 600,
  letterSpacing: '-0.21rem',
  textAlign: 'center',
  padding: '1.6rem',
  color: '#2b2b2b',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontWeight: 700,
      letterSpacing: '-0.1rem',
      fontSize: '2.2rem',
    },
  },
});

export const primaryColor = style({
  color: vars.primary,
});

export const fingerHeartIcon = style({
  width: '3rem',
  height: '3rem',
  marginBottom: '-0.3rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
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
});

export const commentContainer = style({ lineHeight: '2.2rem', color: '#666666' });

export const logoFont = style({ color: vars.primary, fontWeight: 600 });

export const bold = style({ fontWeight: 700 });

// userReactionItem
export const userReactionItemContainer = style({
  boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  margin: '1rem',
  padding: '3rem',
  borderRadius: '2rem',
  width: '31rem',
  fontSize: '1.5rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      width: '28rem',
      padding: '2.5rem',
      margin: '0.8rem',
      fontSize: '1.4rem',
    },
    [`screen and (max-width: 480px)`]: {
      width: '25rem',
      padding: '2rem',
      margin: '0.6rem',
      fontSize: '1.3rem',
    },
  },
});

export const userReactionProfile = style({
  display: 'flex',
  gap: '1.5rem',
  alignItems: 'center',
  marginBottom: '1rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      gap: '1.2rem',
      marginBottom: '0.8rem',
    },
    [`screen and (max-width: 480px)`]: {
      gap: '1rem',
      marginBottom: '0.6rem',
    },
  },
});

export const userReactionName = style({
  fontSize: '1.9rem',
  letterSpacing: '0.2rem',
  fontWeight: 550,
  marginBottom: '0.3rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontSize: '1.7rem',
      letterSpacing: '0.15rem',
      marginBottom: '0.25rem',
    },
    [`screen and (max-width: 480px)`]: {
      fontSize: '1.5rem',
      letterSpacing: '0.1rem',
      marginBottom: '0.2rem',
    },
  },
});

export const userReactionBackground = style({
  color: '#666666',
  fontSize: '1.4rem',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      fontSize: '1.3rem',
    },
    [`screen and (max-width: 480px)`]: {
      fontSize: '1.2rem',
    },
  },
});

export const userReactionProfileImage = style({
  width: '60px',
  height: '60px',
  borderRadius: '50%',

  '@media': {
    [`screen and (max-width: 768px)`]: {
      width: '50px',
      height: '50px',
    },
    [`screen and (max-width: 480px)`]: {
      width: '45px',
      height: '45px',
    },
  },
});
