import { styleVariants, style } from '@vanilla-extract/css';

import { vars } from '@maeil/theme';

const { text1, borderColor1, primary } = vars;

export const buttonStyle = styleVariants({
  default: { background: 'none', color: text1 },
  border: { background: 'none', border: `0.1rem solid ${borderColor1}`, color: text1 },
  primary: { background: primary, color: 'white' },
  light: { background: '#E1F8F1', color: '#00A86B' },
});

export const baseButtonStyle = style({
  borderRadius: '0.8rem',
  cursor: 'pointer',
  transition: 'opacity 0.3s ease',
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
