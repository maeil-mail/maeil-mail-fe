import { style } from '@vanilla-extract/css';
import { primary } from '@/_styles/vars.css';

export const container = style({
  position: 'sticky',
  top: 0,
  width: '100%',
  padding: '1.4rem 2rem',
  background: 'rgba(255, 255, 255, 0.6)',
  backdropFilter: 'saturate(180%) blur(3px)',
  zIndex: 1,
});

export const innerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '110rem',
  margin: '0 auto',
  alignItems: 'center',
});

export const logo = style({
  height: '2.4rem',
});

export const subscribeButton = style({
  color: 'white',
  fontSize: '1.3rem',
  backgroundColor: primary,
  padding: '1rem 1rem',
  borderRadius: '0.6rem',
  fontWeight: 600,
});
