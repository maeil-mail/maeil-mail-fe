import { style, styleVariants } from '@vanilla-extract/css';
import { text1 } from '@/_styles/vars.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
});

export const sizeStyle = styleVariants({
  full: { width: '100%' },
  large: { width: '70%' },
  medium: { width: '50%' },
  small: { width: '30%' },
});

export const inputStyle = styleVariants({
  default: {
    background: 'none',
    color: text1,
    padding: '1rem',
    fontSize: '1.8rem',
    minHeight: '3rem',
    borderRadius: '1rem',
  },
  primary: {
    background: 'none',
    color: text1,
    padding: '1rem',
    fontSize: '1.8rem',
    minHeight: '3rem',
    borderRadius: '1rem',
  },
  underLine: {
    border: 'none',
    padding: '1rem',
    fontSize: '1.8rem',
    borderBottom: '0.1rem solid #fff',
    background: 'none',
    color: text1,
    textAlign: 'center',
  },
});

export const baseInputStyle = style({
  fontFamily: 'BMHANNAAir',
  ':focus': {
    outline: 'none',
  },
  margin: '0 auto',
});

export const dangerStyle = style({
  borderBottom: '0.01rem solid red !important',
  color: 'red !important',
});

export const errorText = style({
  color: 'red',
  textAlign: 'center',
  marginTop: '1rem',
  fontSize: '1.4rem',
});
