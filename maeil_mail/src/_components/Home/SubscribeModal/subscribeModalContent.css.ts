import { validateEmail } from '@/_utils/validateEmail';
import { style } from '@vanilla-extract/css';
import { background1, primary, text1 } from '@/_styles/vars.css';

export const container = style({
  width: '37rem',
  backgroundColor: 'white',
  position: 'relative',
  color: text1,
  borderRadius: '1rem',
  padding: '2.8rem 2rem',
  '@media': {
    'screen and (max-width: 1280px)': {},
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {
      width: '100%',
      borderRadius: '1rem 0',
      padding: '2.8rem 2rem 6rem 2rem',
    },
  },
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',
});

export const successLayout = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 500,
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
  gap: '1.6rem',
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
