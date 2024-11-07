import { style } from '@vanilla-extract/css';
import { primary, text1 } from '@/_styles/vars.css';

export const container = style({
  width: '37rem',
  backgroundColor: 'white',
  position: 'relative',
  color: text1,
  borderRadius: '1rem',
  padding: '2.8rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',
  '@media': {
    'screen and (max-width: 820px)': {
      width: '100%',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      padding: '2.8rem 2rem 6rem 2rem',
    },
  },
});

export const successLayout = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const title = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  textAlign: 'center',
});

export const emailInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
});

export const categoryWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const categoryText = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  color: '#888888',
});

export const categorySubtext = style({
  marginLeft: '1rem',
  fontSize: '1.3rem',
  fontWeight: 500,
  color: '#b0b0b0',
});

export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.4rem',
});

export const radioWrapper = style({
  display: 'flex',
  justifyContent: 'space-around',
});

export const emailWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const verificationSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
});

export const verificationNoti = style({
  fontSize: '1.6rem',
  color: primary,
  textAlign: 'center',
});

export const inputWrapper = style({
  width: '100%',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const underline = style({
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  textDecorationThickness: '0.3px',
});
