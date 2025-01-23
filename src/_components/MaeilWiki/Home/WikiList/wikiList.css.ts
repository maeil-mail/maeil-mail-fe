import { style } from '@vanilla-extract/css';

export const wikiList = style({
  marginTop: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const wikiQuestion = style({
  display: 'flex',
  gap: '1.5rem',
});

export const wikiQuestionOrder = style({
  width: '3rem',
  minWidth: '3rem',
  height: '3rem',
  fontWeight: 600,
  fontSize: '1.5rem',
  color: 'white',
  background: '#00a86b',
  borderRadius: 999,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const wikiQuestionText = style({
  color: '#2b2b2b',
  fontSize: '1.7rem',
  lineHeight: '2.5rem',
  fontWeight: 500,
  wordBreak: 'keep-all',
  paddingTop: '0.3rem',
});

export const wikiItem = style({
  border: '2px solid #f1f1f1',
  padding: '1.5rem',
  borderRadius: '0.8rem',
  cursor: 'pointer',
  background: 'rgb(250,250,250)',
  transition: 'background 0.3s ease',
  ':hover': {
    background: '#f1f1f1',
  },
});

export const wikiSubInfo = style({
  marginTop: '1.7rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.3rem',
  color: 'rgb(158 158 158)',
});

export const ownerInfo = style({
  display: 'flex',
  gap: '0.6rem',
  alignItems: 'center',
});

export const ownerImage = style({
  borderRadius: 999,
});

export const commentCountInfo = style({
  height: '2rem',
  display: 'flex',
  gap: '0.3rem',
  marginTop: '0.3rem',
});

export const chatIcon = style({
  width: '2rem',
});
