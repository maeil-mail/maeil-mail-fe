import { style, styleVariants } from '@vanilla-extract/css';
import { subText1 } from '@/_styles/vars.css';

export const subTextStyle = styleVariants({
  default: {},
});

export const baseSubTxtStyle = style({
  transition: 'opacity 0.3s ease',
  fontFamily: 'BMHANNAAir',
  fontSize: '1.4rem',
  color: subText1,
});
