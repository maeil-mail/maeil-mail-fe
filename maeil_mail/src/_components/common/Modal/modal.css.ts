import { fadeIn, fadeOut } from '@/_styles/animation.css';
import { style } from '@vanilla-extract/css';

export const backDrop = style({
  position: 'fixed',
  inset: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const container = style({
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

export const fadeInClass = style({
  animation: `${fadeIn} 0.3s forwards`,
});

export const fadeOutClass = style({
  animation: `${fadeOut} 0.3s forwards`,
});
