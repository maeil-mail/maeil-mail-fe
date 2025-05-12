import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Page
export const solveWorkbookPageContainer = style({
  minHeight: '100vh',
});

export const solveWorkbookPageContent = style({
  maxWidth: '114rem',
  padding: '0 2rem 10rem 2rem',
  margin: '4rem auto 6rem auto',

  '@media': {
    [`(max-width: 500px)`]: {
      margin: '2rem auto 0 auto',
    },
  },
});

export const workbookTitleText = style({
  fontWeight: 400,
  fontSize: '1.8rem',
  padding: '2.4rem 3rem',
  background: '#ffffff',
  borderRadius: 10,
  border: '1px solid #EBEBEB',
  marginBottom: '3.2rem',
  lineHeight: 1.5,
  color: '#222222',
  userSelect: 'none',

  '@media': {
    [`(max-width: 500px)`]: {
      padding: '1.4rem 2rem',
      fontSize: '1.4rem',
      marginBottom: '2rem',
    },
  },
});

// WorkbookBottomBar
export const workbookBottomBarInnerWrapper = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'row-reverse',
  justifyContent: 'space-between',
  gap: '5rem',
});

export const buttonContainer = style({
  display: 'flex',
});

export const previousButton = recipe({
  base: {
    fontSize: '1.6rem',
    fontWeight: 500,
    width: 'fit-content',
    marginRight: '2.2rem',
    minWidth: '8.8rem',

    '@media': {
      [`(max-width: 500px)`]: {
        fontSize: '1.5rem',
        padding: '1.2rem',
      },
    },
  },
  variants: {
    isFirstQuestion: {
      true: { visibility: 'hidden' },
    },
  },
});

export const mainButton = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  padding: '1.3rem',
  minWidth: '8.8rem',

  '@media': {
    [`(max-width: 500px)`]: {
      fontSize: '1.5rem',
      padding: '1.2rem',
    },
  },
});

// ProgressBar
export const progressBarContainer = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  gap: '1rem',
  maxWidth: '77.7rem',
});

export const progressBarDisplayTime = style({
  color: '#666666',
  fontWeight: 500,
  fontSize: '1.6rem',
  fontFamily: 'monospace',
});

export const progressRateDisplay = style({
  width: '100%',
  background: '#D9D9D9',
  borderRadius: 52,
  height: '0.7rem',

  '@media': {
    '(max-width: 768px)': {
      display: 'none',
    },
  },
});

export const progressRateFilled = style({
  height: '0.7rem',
  background: 'linear-gradient(to right, #17C881 0%, #0FB97B 49%, #24BD99 100%)',
  borderRadius: 99,
});

// WorkbookQuestion
export const WorkbookQuestionSection = style({
  border: '1px solid #EBEBEB',
  borderRadius: 10,
});

export const workbookQuestionTitle = style({
  fontSize: '2rem',
  fontWeight: 450,
  color: '#222222',
  lineHeight: 1.5,
  padding: '2rem 4.4rem',
  background: '#F5F5F5',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  borderBottom: '1px solid #ebebeb',
  userSelect: 'none',
  display: 'flex',
  gap: '1rem',

  '@media': {
    [`(max-width: 500px)`]: {
      padding: '2rem 2.6rem',
      fontSize: '1.5rem',
      fontWeight: 500,
    },
  },
});

export const workbookQuestionOptionList = style({
  padding: '3.9rem 4.4rem',
  background: '#ffffff',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@media': {
    [`(max-width: 500px)`]: {
      gap: '1rem',
      padding: '2rem',
    },
  },
});

export const workbookQuestionOption = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  cursor: 'pointer',
  userSelect: 'none',
});

export const workbookQuestionOptionIndex = recipe({
  base: {
    background: '#CCCCCC',
    color: '#fcfcfc',
    fontSize: '2rem',
    fontWeight: 500,
    minWidth: '2.8rem',
    height: '2.8rem',
    textAlign: 'center',
    lineHeight: '2.8rem',
    borderRadius: 3,

    '@media': {
      [`(max-width: 500px)`]: {
        fontSize: '1.6rem',
        minWidth: '2.2rem',
        height: '2.2rem',
        lineHeight: '2.2rem',
      },
    },
  },

  variants: {
    isSelected: {
      true: { background: '#00A86B' },
    },
  },
});

export const multipleAnswerNoti = style({
  color: '#999999',
  fontSize: '1.4rem',
  wordBreak: 'keep-all',

  '@media': {
    [`(max-width: 500px)`]: {
      fontSize: '1.2rem',
    },
  },
});

export const workbookQuestionOptionContent = recipe({
  base: {
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 1.5,
    padding: '0.8rem 1.6rem',
    borderRadius: 8,
    flex: 1,
    border: '1px solid #ffffff',
    color: '#666666',
    wordBreak: 'break-all',

    '@media': {
      [`(max-width: 500px)`]: {
        fontSize: '1.4rem',
        padding: '0.7rem 1rem',
      },
    },
  },

  variants: {
    isSelected: {
      true: { borderColor: '#E0E0E0', color: '#222222', fontWeight: 450 },
    },
  },
});
