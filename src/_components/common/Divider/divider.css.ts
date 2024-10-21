import { styleVariants } from '@vanilla-extract/css';
import { borderColor1 } from '@/_styles/vars.css';

export const dividerStyle = styleVariants({
  default: {
    border: `0.01rem solid ${borderColor1}`,
    margin: '2rem 0',
  },
  none: {
    border: `none`,
    margin: '1rem 0',
  },
});
