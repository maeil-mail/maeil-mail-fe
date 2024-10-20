import { style } from '@vanilla-extract/css';
import { background1, text1 } from '@/_styles/vars.css';

export const container = style({
  width: '100vw',
  height: '100vh',
  overflow: 'scroll',
  padding: '5rem',
  background: background1,
  color: text1,
});

export const titleInput = style({
  width: '100%',
  fontSize: '2.8rem',
  marginBottom: '2rem',
});

export const radioWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
  color: '#fff',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '4rem',
});

export const addQuestionButton = style({
  fontSize: '2.2rem !important',
});
