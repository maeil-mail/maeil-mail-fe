import { style } from '@vanilla-extract/css';
import { vars } from '@maeil/theme';

export const unsubscribeContent = style({
  width: 'fit-content',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
});

export const unsubscribeTitle = style({
  width: 'fit-content',
  fontSize: '2.5rem',
  color: vars.primary,
});

export const unsubscribeTypo = style({
  fontSize: '1.6rem',
  textAlign: 'center',
  lineHeight: '3rem',
});

export const unsubscribeButton = style({
  width: 'fit-content',
});

// unsubscribeCompleted
export const unsubscribeCompletedContent = style({
  width: 'fit-content',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3rem',
});

export const unsubscribeCompletedTitle = style({
  width: 'fit-content',
  fontSize: '2.5rem',
  color: vars.primary,
});

export const unsubscribeCompletedTypo = style({
  fontSize: '1.6rem',
  textAlign: 'center',
  lineHeight: '3rem',
});

export const semiBold = style({
  fontWeight: 600,
});

export const feedbackButton = style({
  width: '20rem',
});
