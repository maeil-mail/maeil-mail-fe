import { style } from '@vanilla-extract/css';
import { background1, borderColor1, primary, text1 } from '@/_styles/vars.css';

export const checkboxContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const checkbox = style({
  accentColor: '#00A86B',
  width: '1.8rem',
  height: '1.8rem',
  marginRight: '0.6rem',
});

export const selectText = style({
  fontSize: '1.5rem',
  lineHeight: '2rem',
  color: text1,
  cursor: 'pointer',
});
