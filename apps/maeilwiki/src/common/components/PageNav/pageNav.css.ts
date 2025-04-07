import { style } from '@vanilla-extract/css';

export const pageNavContainer = style({
  background: 'linear-gradient(to right, #17C881 0%, #0FB97B 52%, #24BD99 100%)',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '1.8rem 0',
});

export const pageNavWrapper = style({
  width: '85%',
  maxWidth: '110rem',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
});

export const backButton = style({
  padding: '0.8rem',
  background: 'transparent',
});

export const pageTitle = style({
  color: '#ffffff',
  fontSize: '1.8rem',
  lineHeight: 1.5,
  fontWeight: 500,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
});
