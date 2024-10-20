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
      position: 'absolute',
      bottom: '0',
    },
  },
});

export const fadeInClass = style({
  animation: `${fadeIn} 0.3s forwards`,
});

export const fadeOutClass = style({
  animation: `${fadeOut} 0.3s forwards`,
});
