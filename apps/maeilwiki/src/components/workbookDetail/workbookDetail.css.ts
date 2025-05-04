import { style } from '@vanilla-extract/css';

export const workbookDetailModalContainer = style({
  width: '64rem',
  padding: '3.45rem 4rem',

  '@media': {
    '(max-width: 768px)': {
      width: '100%',
    },
  },
});

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

export const closeIcon = style({
  width: '1.5rem',
  position: 'absolute',
  top: 34.5,
  right: 40,
  cursor: 'pointer',
  margin: '0.5rem',
});

export const workbookTitleText = style({
  fontSize: ' 2.6rem',
  fontWeight: 400,
  lineHeight: 1.5,
  marginBottom: '0.8rem',

  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3,
});

export const workbookDetailText = style({
  fontSize: '1.4rem',
  fontWeight: 400,
  lineHeight: 1.5,
  color: '#666666',
  marginBottom: '2.4rem',
});

export const workbookInfo = style({
  border: '1px solid #EBEBEB',
  borderLeft: 'none',
  borderRight: 'none',
  padding: '2.4rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '4rem',
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
