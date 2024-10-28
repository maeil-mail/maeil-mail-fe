import { style } from '@vanilla-extract/css';
import { text1, text2, primary } from '@/_styles/vars.css';

export const titleText = style({
  fontSize: '3rem',
  fontWeight: 'bold',
  color: text1,
  marginBottom: '2rem',
  textAlign: 'center',
});

export const categoryText = style({
  fontSize: '1.6rem',
  color: text2,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const contentText = style({
  fontFamily: 'BMHANNAAir',
  fontSize: '3rem',
  color: text1,
});

export const textWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const categoryHighlight = style({
  color: primary,
});
