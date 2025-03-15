import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// WikiList
export const wikiList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

// WikiItem
export const wikiQuestion = style({
  display: 'flex',
  gap: '0.5rem',
});

export const wikiQuestionText = style({
  color: '#2b2b2b',
  fontSize: '1.8rem',
  fontWeight: 500,
  wordBreak: 'keep-all',
  paddingTop: '0.3rem',
  lineHeight: 1.5,

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.5rem',
    },
  },
});

export const wikiItem = style({
  border: '1px solid #EBEBEB',
  padding: '3rem 3.2rem',
  borderRadius: '0.8rem',
  cursor: 'pointer',
  background: '#ffffff',
  transition: 'background 0.1s ease',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  ':hover': {
    background: 'rgb(251, 251, 251)',
  },

  '@media': {
    [`(max-width: 800px)`]: {
      padding: '1.6rem 2rem',
    },
  },
});

export const wikiInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.3rem',
  color: 'rgb(158 158 158)',
});

export const wikiSubInfo = style({ display: 'flex', gap: '1rem' });

export const wikiCategory = recipe({
  base: {
    fontSize: '1.4rem',
    lineHeight: 1.5,
    padding: '0.2rem 0.8rem',
    borderRadius: '0.3rem',
    fontWeight: 500,
    '@media': {
      [`(max-width: 800px)`]: {
        fontSize: '1.3rem',
      },
    },
  },
  variants: {
    category: {
      backend: {
        color: '#C6743A',
        backgroundColor: '#FFF3EB',
      },
      frontend: {
        color: '#0070A8',
        backgroundColor: '#EBF8FF',
      },
      etc: {
        color: '#7C7C7C',
        backgroundColor: '#F1F1F1',
      },
    },
  },
});

export const wikiMetaInfo = style({
  display: 'flex',
  gap: '0.4rem',
  alignItems: 'center',
  color: '#666666',
  fontWeight: 300,
  lineHeight: 1.5,
  fontSize: '1.4rem',
  '@media': {
    [`(max-width: 800px)`]: {
      fontSize: '1.3rem',
    },
  },
});

export const ownerName = style({
  '@media': {
    '(max-width: 800px)': {
      overflow: 'hidden',
      maxWidth: '9rem',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
});

export const commentCountInfo = style({
  display: 'flex',
  gap: '0.3rem',
  alignItems: 'center',

  color: '#666666',
  fontWeight: 300,
  lineHeight: 1.5,
  fontSize: '1.4rem',

  '@media': {
    [`(max-width: 800px)`]: {
      fontSize: '1.3rem',
    },
  },
});

export const commentIcon = style({
  width: '2.4rem',
  height: '2.4rem',
  '@media': {
    [`(max-width: 800px)`]: {
      width: '2rem',
      height: '2rem',
    },
  },
});

// WikiListSkeleton
const shimmer = keyframes({
  '0%, 100%': {
    opacity: 0.3,
  },
  '50%': {
    opacity: 1,
  },
});

export const wikiItemSkeleton = style({
  border: '1px solid #EBEBEB',
  height: '12.5rem',
  width: '100%',
  borderRadius: '0.8rem',

  backgroundColor: '#efefef',
  animation: `${shimmer} 1500ms linear infinite`,

  '@media': {
    [`(max-width: 800px)`]: {
      height: '9.1rem',
    },
  },
});
