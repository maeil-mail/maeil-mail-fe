import { style } from '@vanilla-extract/css';

// HeroSection
export const heroSection = style({
  background: `rgba(0, 168, 107, 0.08)`,
  borderRadius: '1rem',
  padding: '4rem 4rem',
  marginTop: '-4rem',
  wordBreak: 'keep-all',
});

export const title = style({
  color: '#00a86b',
  fontSize: '2.8rem',
  fontWeight: 700,
});

export const subtitle = style({
  color: '#545454',
  fontSize: '1.5rem',
  marginTop: '1.3rem',
});
