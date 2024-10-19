import { styleVariants, style } from '@vanilla-extract/css';
import { text1, text3, borderColor1, background2 } from '@/_styles/vars.css';

export const buttonStyle = styleVariants({
  default: { background: 'none', color: text1 },
  border: { background: 'none', border: `0.1rem solid ${borderColor1}`, color: text1 },
  primary: { background: background2, border: `0.1rem solid ${borderColor1}`, color: text3 },
});

export const baseButtonStyle = style({
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
  padding: '1rem',
  fontSize: '2rem',
  ':hover': {
    opacity: '0.7',
  },
});

export const disabledButton = style({
  opacity: 0.4,
  cursor: 'not-allowed',
  ':hover': {
    opacity: 0.4,
  },
});
