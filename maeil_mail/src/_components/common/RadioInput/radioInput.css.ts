import { style } from '@vanilla-extract/css';
import { background1, borderColor1, text1 } from '@/_styles/vars.css';

export const radioContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2rem',
});

export const hiddenRadio = style({
  display: 'none',
  background: 'none',
  color: text1,
  padding: '1rem',
  fontSize: '1.8rem',
  minHeight: '3rem',
  borderRadius: '1rem',
});

export const customRadio = style({
  position: 'relative',
  paddingLeft: '2rem',
  cursor: 'pointer',
  fontSize: '1.6rem',
  userSelect: 'none',
  '::before': {
    content: '',
    position: 'absolute',
    left: '0',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '2rem',
    height: '2rem',
    border: `0.01rem solid ${borderColor1}`,
    borderRadius: '0.2rem',
    background: background1,
  },
  selectors: {
    [`${hiddenRadio}:checked + &::before`]: {
      backgroundColor: background1,
      border: `0.01rem solid ${borderColor1}`,
    },
  },
});

export const checkIcon = style({
  position: 'absolute',
  stroke: text1,
  left: '0.1rem',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'none',
  width: '2rem',
  height: '2rem',
  selectors: {
    [`${hiddenRadio}:checked + ${customRadio} &`]: {
      display: 'block',
    },
  },
});

export const selectText = style({
  margin: '0 1rem',
  fontSize: '1.8rem',
  color: text1,
});
