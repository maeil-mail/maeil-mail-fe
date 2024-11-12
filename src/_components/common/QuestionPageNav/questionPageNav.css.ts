import { style } from '@vanilla-extract/css';

export const shareButton = style({
  color: 'white',
  fontSize: '1.4rem',
  backgroundColor: '#00A86B',
  padding: '1rem 2rem',
  borderRadius: '10rem',
  fontWeight: 600,

  transition: 'transform 0.4s ease-in-out',
  ':hover': {
    transform: 'scale(1.03)',
  },
});
