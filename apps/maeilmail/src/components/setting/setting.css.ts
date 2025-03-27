import { style } from '@vanilla-extract/css';

export const settingContainer = style({
  color: '#2b2b2b',
});

export const settingContent = style({
  backgroundColor: '#f9f9f9',
  padding: '2.5rem',
  borderRadius: 15,
});

export const settingTitle = style({
  fontSize: '2.2rem',
  marginBottom: '3rem',
  fontWeight: 600,
});

export const settingButton = style({
  borderRadius: 200,
  fontSize: '1.7rem',
  width: '13rem',
  margin: '5rem auto 0 auto',
  display: 'block',
});

// MailFrequencySection

export const optionTitle = style({
  fontSize: '2.2rem',
  fontWeight: 700,
});

export const separator = style({
  border: '0.1px solid #e7e7e7',
  margin: '1rem 0 2rem 0',
});

export const optionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const optionItem = style({
  display: 'flex',
  gap: '1rem',
});

export const optionDescription = style({
  wordBreak: 'keep-all',
  lineHeight: '2rem',
});

export const label = style({
  fontSize: '1.6rem',
  cursor: 'pointer',
});

export const caption = style({
  fontSize: '1.3rem',
  color: '#a7a7a7',
  marginTop: '0.4rem',
});
