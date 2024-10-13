import { style } from '@vanilla-extract/css';
import { text1, subText2 } from '@/_styles/vars.css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-around',
  marginBottom: '1.6rem',
});

export const button = style({
  fontSize: '1.8rem',
  fontFamily: 'BMHANNAAir',
  transition: 'color 0.2s ease',
});

export const notSelected = style({
  color: subText2,
});

export const selected = style({
  color: text1,
});

export const ball = style({
  position: 'relative',
  paddingLeft: '1.4rem',

  '::after': {
    content: '""',
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: 'currentColor',
    transition: 'background-color 0.3s ease',
  },
});
