import { style } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';

const { primary, text1 } = vars;

export const checkboxContainer = style({
  position: 'relative',
  display: 'flex',
});

export const checkbox = style({
  accentColor: '#00A86B',
  width: '1.8rem',
  height: '1.8rem',
  cursor: 'pointer',
  margin: '0 0.6rem 0 0',
});

export const selectText = style({
  fontSize: '1.5rem',
  lineHeight: '2rem',
  color: text1,
  cursor: 'pointer',
});

export const caption = style({
  fontSize: '1.1rem',
  color: '#a7a7a7',
});

export const primaryColor = style({
  color: primary,
});
