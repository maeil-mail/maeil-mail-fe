import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// WorkbookList
export const workbookListPageContainer = style({
  maxWidth: '114rem',
  margin: '0 auto',
  padding: '0 2rem 8.4rem 2rem',
  minHeight: '50vh',
});

export const workbookListContainer = style({
  display: 'flex',
  gap: '1.6rem',
  flexWrap: 'wrap',
});

export const workBookItemWrapper = style({
  flex: '1 1 100%',
  width: '100%',

  '@media': {
    '(min-width: 640px)': {
      flex: '1 1 calc((100% - 16px) / 2)',
      maxWidth: 'calc((100% - 16px) / 2)',
    },
    '(min-width: 1024px)': {
      flex: '1 1 calc((100% - 32px) / 3)',
      maxWidth: 'calc((100% - 32px) / 3)',
    },
  },
});

// WorkbookItem
export const workbookItemContainer = style({
  border: '1px solid #EBEBEB',
  padding: '3rem 3.2rem',
  borderRadius: '1rem',
  cursor: 'pointer',
  background: '#ffffff',

  '@media': {
    '(max-width: 500px)': {
      padding: '1.8rem',
    },
  },

  selectors: {
    '&:hover': {
      background: 'rgb(251, 251, 251)',
    },
  },
});

export const workbookItemTop = style({
  display: 'flex',
  gap: '0.8rem',
  marginBottom: '1.2rem',
});

export const workbookItemCategoryTag = recipe({
  base: {
    padding: '0.2rem 0.8rem',

    lineHeight: 1.5,
    fontSize: '1.4rem',
    fontWeight: 500,
  },
  variants: {
    category: {
      frontend: {
        background: '#EBF8FF',
        color: '#0070A8',
      },
      backend: {
        background: '#FFF3EB',
        color: '#C6743A',
      },
      etc: {
        background: '#F1F1F1',
        color: '#7C7C7C',
      },
    },
  },
});

export const workbookItemMiddle = style({
  marginBottom: '2.5rem',
  height: '7.4rem',
});

export const workbookItemTitle = style({
  fontSize: '1.55rem',
  fontWeight: 500,
  lineHeight: 1.5,
  marginBottom: '0.5rem',
  width: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  whiteSpace: 'nowrap',

  '@media': {
    '(min-width: 1024px)': {
      fontSize: '1.7rem',
    },
  },
});

export const workbookItemDetail = style({
  color: '#666666',
  fontSize: '1.4rem',
  lineHeight: 1.5,

  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
});

export const workbookItemBottom = style({
  color: '#666666',
  display: 'flex',
  fontSize: '1.4rem',
  lineHeight: 1.5,
});

// WorkbookListSkeleton
const shimmer = keyframes({
  '0%, 100%': {
    opacity: 0.4,
  },
  '50%': {
    opacity: 1,
  },
});

export const workbookItemSkeletonContainer = style({
  height: '21.9rem',
  borderRadius: '1rem',
  transition: 'all ease 0.2s',
  color: '#999999',
  background: '#edeeee',
  animation: `${shimmer} 1500ms linear infinite`,
});
