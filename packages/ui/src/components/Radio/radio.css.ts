import { vars } from '@maeil/theme';
import { style } from '@vanilla-extract/css';

export const radio = style({
  appearance: 'none',
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  border: '5px solid #c5c5c5',
  margin: 0,
  cursor: 'pointer',
  flexShrink: 0,

  ':checked': {
    border: `5px solid ${vars.primary}`,
  },
});
