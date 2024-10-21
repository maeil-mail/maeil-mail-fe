import { style, keyframes } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const listWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

export const headerContainer = style({
  margin: '0 1rem',
  fontSize: '1.6rem',
  padding: '0.5rem 1rem',
  cursor: 'pointer',
  position: 'relative',
  transition: 'all 0.3s ease',
  color: text1,
});

const slideUnderline = keyframes({
  '0%': { width: '0%', left: '50%' },
  '100%': { width: '100%', left: '0%' },
});

export const active = style({
  color: text1,

  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.5rem',
    left: 0,
    width: '90%',
    height: '2px',
    backgroundColor: text1,
    animation: `${slideUnderline} 0.3s ease-out forwards`,
  },
});

export const inactive = style({
  ':hover': {
    opacity: '0.7',
  },
});

export const currentContentContainer = style({
  marginTop: '3rem',
});
