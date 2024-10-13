import { style } from '@vanilla-extract/css';
import { background1, text1 } from '@/_styles/vars.css';

export const container = style({
  width: '37rem',
  height: '50rem',
  background: background1,
  position: 'relative',
  color: text1,
  borderRadius: '1rem',
  padding: '2rem',
  '@media': {
    'screen and (max-width: 1280px)': {},
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {
      width: '100%',
    },
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {},
    'screen and (max-width: 430px)': {},
    'screen and (max-width: 414px)': {},
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {},
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});

export const successLayout = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const title = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: '2rem',
});

export const categoryText = style({
  fontSize: '2.3rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  textAlign: 'center',
});

export const radioWrapper = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '2rem',
});

export const emailWrapper = style({
  minWidth: '100%',
  minHeight: '10rem',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const inputWrapper = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  minHeight: '7rem',
  width: '100%',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '10%',
  right: 0,
  left: 0,
});
