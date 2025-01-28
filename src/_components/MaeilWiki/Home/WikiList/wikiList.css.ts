import { style } from '@vanilla-extract/css';

// WikiList
export const wikiList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
});

// WikiItem
export const wikiQuestion = style({
  display: 'flex',
  gap: '0.5rem',
});

export const wikiQuestionOrder = style({
  height: '3rem',
  width: '3rem',
  minWidth: '3rem',
  fontWeight: 700,
  fontSize: '1.7rem',
  color: '#0091a8',
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
  transition: 'background 0.1s ease',
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
