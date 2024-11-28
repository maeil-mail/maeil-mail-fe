import { style } from '@vanilla-extract/css';

export const settingContainer = style({
  color: '#2b2b2b',
});

export const settingContent = style({
  backgroundColor: '#f9f9f9',
  padding: '2.5rem',
  borderRadius: 15,
});

export const settingTitle = style({
  fontSize: '2.2rem',
  marginBottom: '3rem',
  fontWeight: 600,
});

export const settingButton = style({
  borderRadius: 200,
  fontSize: '1.7rem',
  width: '13rem',
  margin: '5rem auto 0 auto',
  display: 'block',
});
