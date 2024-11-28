import { style } from '@vanilla-extract/css';

export const optionTitle = style({
  fontSize: '2.2rem',
  fontWeight: 700,
});

export const separator = style({
  border: '0.1px solid #e7e7e7',
  margin: '1rem 0 2rem 0',
});

export const optionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const optionItem = style({
  display: 'flex',
  gap: '1rem',
});

export const optionDescription = style({
  wordBreak: 'keep-all',
  lineHeight: '2rem',
});

export const label = style({
  fontSize: '1.6rem',
  cursor: 'pointer',
});

export const caption = style({
  fontSize: '1.3rem',
  color: '#a7a7a7',
  marginTop: '0.4rem',
});
