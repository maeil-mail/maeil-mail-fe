import { style, styleVariants } from '@vanilla-extract/css';

// MyWeeklyQuestionListHeader
export const questionHeaderContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

export const questionHeaderTitle = style({
  color: '#00A86B',
  fontWeight: 600,
  fontSize: '1.6rem',
});

export const questionHeaderSubTitle = style({
  fontWeight: 600,
  fontSize: '2.3rem',
  color: '#2b2b2b',
});

// MyWeeklyQuestionList
export const questionListContainer = style({
  padding: '4rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.7rem',
});

export const emptyCase = style({
  width: 'fit-content',
  fontSize: '1.6rem',
  margin: '5rem 0',
});

// MyWeeklyQuestionItem
export const questionItemContainer = style({
  fontSize: '1.6rem',
  color: '#2b2b2b',
  width: '100%',
  backgroundColor: '#F5F6F8',
  borderRadius: 6,
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.4rem 1rem',
  boxShadow: '1px 1px 3px 0px rgb(0, 0, 0, 0.1)',
  cursor: 'pointer',
  gap: '1.5rem',
});

export const animatedHover = style({
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'translateY(-0.5px)',
    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.13)',
  },
});

export const questionItemContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
});

export const rightArrow = style({
  width: '1.5rem',
});

export const questionTitle = style({ lineHeight: '2.5rem' });
