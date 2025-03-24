import { style } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '80vh',
  maxWidth: '60rem',
  padding: '0 1.6rem',
  margin: '0 auto',
  gap: '5rem',
  wordBreak: 'keep-all',
});

export const title = style({ fontSize: '2.4rem', fontWeight: 600, marginBottom: '2rem' });

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
  alignItems: 'center',
});

export const subText = style({
  color: vars.text2,
});

export const developerEmoji = style({
  width: '17rem',
});

export const buttonSection = style({
  display: 'flex',
  gap: '1rem',
  width: '100%',
});

export const buttonLink = style({
  flex: 1,
});

export const underline = style({
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  textDecorationThickness: '0.3px',
});
