import { style } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';

export const container = style({
  color: vars.text1,
  margin: '5rem auto',
  width: '85%',
});

export const mainWrapper = style({
  marginBottom: '2rem',
});

export const wrapper = style({
  padding: '1rem',
  borderRadius: '1rem',
  border: '0.1rem solid',
  marginBottom: '1rem',
  cursor: 'pointer',
  width: '100%',
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
  alignItems: 'center',
  width: '100%',
});

export const contentText = style({
  textAlign: 'start',
});
