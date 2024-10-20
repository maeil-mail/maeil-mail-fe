import { style } from '@vanilla-extract/css';
import { text1, background1 } from '@/_styles/vars.css';

export const dropDownContainer = style({
  fontSize: '1.6rem',
  color: text1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '0 auto',
  width: '50%',
  position: 'relative',
  zIndex: 10,
});

export const selected = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  borderRadius: '1rem',
  border: `0.1rem solid`,
  transition: 'opacity 0.3s ease',
  ':hover': {
    opacity: '0.7',
  },
});

export const menuWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  borderRadius: '1rem',
  border: '0.1rem solid',
  position: 'absolute',
  top: '4.2rem',
  left: 0,
  zIndex: 20,
  background: background1,
});

export const selectButton = style({
  width: '100%',
  display: 'flex',
  padding: '1rem',
  borderRadius: '1rem',
  transition: 'opacity 0.3s ease',
  ':hover': {
    opacity: '0.7',
  },
});
