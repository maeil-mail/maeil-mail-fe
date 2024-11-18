import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

export const successText = style({
  fontSize: '1.5rem',

  margin: '2rem 0',
  lineHeight: '2rem',
  wordBreak: 'keep-all',
});

export const title = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  textAlign: 'center',
});

export const closeButton = style({
  width: '2rem',
  position: 'absolute',
  top: 20,
  right: 20,
  cursor: 'pointer',
  margin: '0.5rem',
});

export const caption = style({
  color: 'rgb(173 170 170)',
  fontSize: '1.3rem',
});

export const buttonSection = style({
  display: 'flex',
  gap: '1rem',
});
