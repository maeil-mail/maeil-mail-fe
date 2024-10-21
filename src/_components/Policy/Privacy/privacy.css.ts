import { style } from '@vanilla-extract/css';
import { text1, background3 } from '@/_styles/vars.css';

export const container = style({
  color: text1,
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
  background: background3,
});

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
  alignItems: 'center',
});
