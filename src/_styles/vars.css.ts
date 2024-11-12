import { createVar, style } from '@vanilla-extract/css';

export const background1 = createVar();
export const background2 = createVar();
export const background3 = createVar();
export const primary = createVar();
export const text1 = createVar();
export const text2 = createVar();
export const text3 = createVar();
export const subText1 = createVar();
export const subText2 = createVar();
export const borderColor1 = createVar();

export const myStyle = style({
  vars: {
    [background1]: '#131313',
    [background2]: '#ececec',
    [background3]: '#1d1d1d',
    [primary]: '#00A86B',
    [text1]: '#222222',
    [text2]: '#868e96',
    [text3]: '#000',
    [subText1]: '#cacaca',
    [subText2]: '#878787',
    [borderColor1]: '#505050',
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [background1]: '#1e1e1e',
        [background2]: '#ececec',
        [background3]: '#1d1d1d',
        [primary]: '#00A86B',
        [text1]: '#fff',
        [text2]: '#868e96',
        [text3]: '#000',
        [subText1]: '#cacaca',
        [subText2]: '#878787',
        [borderColor1]: '#505050',
      },
    },
  },
});
