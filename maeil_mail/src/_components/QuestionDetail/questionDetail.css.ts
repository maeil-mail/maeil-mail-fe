import { style } from '@vanilla-extract/css';
import { text1, text2 } from '@/_styles/vars.css';

export const titleText = style({
  fontSize: '3.5rem',
  fontWeight: 'bold',
  color: text1,
  margin: '2rem 0',
  textAlign: 'center',
});

export const categoryText = style({
  fontSize: '1.6rem',
  color: text2,
  textAlign: 'center',
});

export const contentText = style({
  fontFamily: 'BMHANNAAir',
  fontSize: '3rem',
  color: text1,
});
