import { style } from '@vanilla-extract/css';
import { softAppear } from '@/styles/animation.css';

export const mainWrapper = style({
  width: '100%',
  minWidth: '32rem',
  maxWidth: '100vw',
  minHeight: '100vh',
  height: 'auto',
  margin: '0 auto',
  animation: `${softAppear} 0.3s ease-in forwards`,
  position: 'relative',
});

export const contentWrapper = style({
  width: '70%',
  height: 'auto',
  paddingBottom: '4rem',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  flexDirection: 'column',
});

export const minVH = style({
  minHeight: '100vh',
});
