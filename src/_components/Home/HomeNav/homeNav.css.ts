import { style } from '@vanilla-extract/css';
import { primary } from '@/_styles/vars.css';

export const navContentWrapper = style({ display: 'flex', alignItems: 'center', gap: '3rem' });

export const teamIntroductionLink = style({
  cursor: 'pointer',
  fontSize: '1.5rem',
  fontWeight: 700,
});

export const subscribeButton = style({
  color: 'white',
  fontSize: '1.4rem',
  backgroundColor: primary,
  padding: '1rem 1rem',
  borderRadius: '0.6rem',
  fontWeight: 600,
});
