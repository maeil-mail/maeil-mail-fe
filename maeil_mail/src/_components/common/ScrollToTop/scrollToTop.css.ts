import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  bottom: '15%',
  left: '5%',
  transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
  opacity: 0,
  transform: 'translateY(20px)',
  pointerEvents: 'none',
  '@media': {
    'screen and (max-width: 1280px)': {},
    'screen and (max-width: 1024px)': {},
    'screen and (max-width: 912px)': {},
    'screen and (max-width: 853px)': {},
    'screen and (max-width: 820px)': {},
    'screen and (max-width: 768px)': {},
    'screen and (max-width: 540px)': {
      left: '3%',
    },
    'screen and (max-width: 430px)': {
      left: '4%',
    },
    'screen and (max-width: 414px)': {},
    'screen and (max-width: 412px)': {},
    'screen and (max-width: 390px)': {},
    'screen and (max-width: 375px)': {},
    'screen and (max-width: 360px)': {},
    'screen and (max-width: 344px)': {},
  },
});

export const visible = style({
  opacity: 1,
  transform: 'translateY(0)',
  pointerEvents: 'auto',
});
