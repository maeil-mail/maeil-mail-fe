import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';

export const textStyle = styleVariants({
  xLarge: { fontSize: '3rem' },
  large: { fontSize: '2rem' },
  medium: { fontSize: '1.6rem' },
  small: { fontSize: '1.4rem' },
});

export const baseTxtStyle = style({
  transition: 'opacity 0.3s ease',
  color: vars.text1,
});

export const centerAlign = style({
  textAlign: 'center',
});
