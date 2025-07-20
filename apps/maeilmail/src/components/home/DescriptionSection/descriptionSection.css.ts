import { style } from '@vanilla-extract/css';

export const descriptionSection = style({
  width: '100%',
  padding: '10rem 0',
  display: 'flex',
  justifyContent: 'center',
});

export const descriptionSectionInnerWrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '3rem',
  padding: '14rem 0',
  alignItems: 'center',

  '@media': {
    [`(max-width: 768px)`]: {
      gap: '10rem',
    },
  },
});
