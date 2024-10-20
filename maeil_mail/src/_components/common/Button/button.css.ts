import { styleVariants, style } from '@vanilla-extract/css';
import { text1, text3, borderColor1, primary } from '@/_styles/vars.css';

export const buttonStyle = styleVariants({
  default: { background: 'none', color: text1 },
  border: { background: 'none', border: `0.1rem solid ${borderColor1}`, color: text1 },
  primary: { background: primary, color: 'white' },
});

export const baseButtonStyle = style({
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  fontFamily: 'BMHANNAAir',
  padding: '1.4rem',
  fontSize: '1.6rem',
  fontWeight: 600,
  width: '100%',
  ':hover': {
    opacity: '0.9',
  },
});

export const disabledButton = style({
  opacity: 0.4,
  cursor: 'not-allowed',
  ':hover': {
    opacity: 0.4,
  },
});
