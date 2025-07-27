import { createVar, style } from '@vanilla-extract/css';

export const vars = {
  background1: createVar(),
  background2: createVar(),
  background3: createVar(),
  primary: createVar(),
  text1: createVar(),
  text2: createVar(),
  text3: createVar(),
  subText1: createVar(),
  subText2: createVar(),
  borderColor1: createVar(),
} as const;

export type StyleVars = typeof vars;

export const myStyle = style({
  vars: {
    [vars.background1]: '#131313',
    [vars.background2]: '#ececec',
    [vars.background3]: '#1d1d1d',
    [vars.primary]: '#17C881',
    [vars.text1]: '#222222',
    [vars.text2]: '#868e96',
    [vars.text3]: '#000',
    [vars.subText1]: '#cacaca',
    [vars.subText2]: '#878787',
    [vars.borderColor1]: '#505050',
  },

  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [vars.background1]: '#1e1e1e',
        [vars.background2]: '#ececec',
        [vars.background3]: '#1d1d1d',
        [vars.primary]: '#00A86B',
        [vars.text1]: '#fff',
        [vars.text2]: '#868e96',
        [vars.text3]: '#000',
        [vars.subText1]: '#cacaca',
        [vars.subText2]: '#878787',
        [vars.borderColor1]: '#505050',
      },
    },
  },
});
