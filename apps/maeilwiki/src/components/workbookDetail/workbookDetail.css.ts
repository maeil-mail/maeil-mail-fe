import { style } from '@vanilla-extract/css';

// workbookDetailPage
export const workbookDetailPageContainer = style({
  padding: '0 2rem',
});

export const workbookDetailPageWrapper = style({
  padding: '4rem 0 8rem 0',
  margin: '0 auto',
  width: '100%',
  maxWidth: '110rem',
});

// WorkbookDetailModal

export const workbookDetailModalContainer = style({
  width: '64rem',
  padding: '3.45rem 4rem',

  '@media': {
    '(max-width: 768px)': {
      width: '100%',
    },
  },
});

export const closeIcon = style({
  width: '1.5rem',
  position: 'absolute',
  top: 34.5,
  right: 40,
  cursor: 'pointer',
  margin: '0.5rem',
});

// WorkbookDetailContent

export const solvedCountTag = style({
  width: 'fit-content',
  color: '#00A86B',
  background: '#E1F8F1',
  fontSize: '1.4rem',
  fontWeight: 500,
  lineHeight: 1.5,
  padding: '0.4rem 0.8rem',
  marginBottom: '2rem',
});

export const workbookTitleText = style({
  fontSize: ' 1.7rem',
  fontWeight: 500,
  lineHeight: 1.5,
  marginBottom: '0.8rem',

  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,

  '@media': {
    '(min-width: 768px)': {
      fontSize: ' 2.6rem',
      fontWeight: 400,
    },
  },
});

export const workbookDetailText = style({
  fontSize: '1.4rem',
  fontWeight: 400,
  lineHeight: 1.5,
  color: '#666666',

  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 5,
});

export const workbookInfo = style({
  border: '1px solid #EBEBEB',
  borderLeft: 'none',
  borderRight: 'none',
  padding: '2.4rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  margin: '1.2rem 0 2rem 0',

  '@media': {
    '(min-width: 768px)': {
      margin: '2.4rem 0 4rem 0',
    },
  },
});

export const workbookInfoLine = style({
  display: 'flex',
  gap: '1rem',
});

export const workbookInfoField = style({
  color: '#222222',
  fontSize: '1.4rem',
  lineHeight: 1.5,
  width: '4.9rem',
});

export const workbookInfoValue = style({
  color: '#666666',
  fontSize: '1.4rem',
  lineHeight: 1.5,
});

export const buttonsContainer = style({
  display: 'flex',
  gap: '1rem',
});

export const shareButton = style({
  width: '13.5rem',
});

export const shareButtonInnerWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  margin: '0 auto',
  width: 'fit-content',
});

export const shareIcon = style({
  width: '1.8rem',
  color: '#00A86B',
});

export const shareText = style({
  lineHeight: '1.6rem',
});

export const solveButton = style({
  flex: 1,
});
