import { style } from '@vanilla-extract/css';
import { text1, text2, primary } from '@/_styles/vars.css';

export const titleText = style({
  fontSize: '3.4rem',
  fontWeight: 'bold',
  color: text1,
  marginBottom: '4rem',
});

export const contentText = style({
  fontFamily: 'BMHANNAAir',
  fontSize: '3rem',
  color: text1,
});

export const textWrapper = style({
  fontSize: '1.6rem',
  color: text2,
  borderLeft: `5px solid ${primary}`,
  padding: '0.3rem 1rem',
  marginBottom: '3rem',
});

export const categoryHighlight = style({
  // color: primary,
  fontWeight: 600,
});
