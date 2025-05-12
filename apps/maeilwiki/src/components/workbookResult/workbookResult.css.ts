import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Page
const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const topBanner = style({
  animation: `${fadeIn} 1.2s ease-out`,
  background: 'linear-gradient(to right, #17C881 0%, #0FB97B 52%, #24BD99 100%)',
  padding: '1.4rem 2rem',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',
});

export const bannerText = style({
  fontWeight: 450,
  fontSize: '1.6rem',
  color: '#fff',
  width: 'fit-content',
});

export const cursorIcon = style({
  marginTop: '1rem',
});

export const workbookResultPageInnerWrapper = style({
  maxWidth: '114rem',
  margin: '4rem auto 10rem auto',
  padding: '0 2rem',
});

export const workbookAnswerTitle = style({
  fontSize: '2.4rem',
  lineHeight: 1.5,
  fontWeight: 400,
  marginBottom: '2rem',

  '@media': {
    '(max-width: 500px)': {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

export const workbookScoreBoard = style({
  background: '#fff',
  border: '1px solid #ebebeb',
  borderRadius: 16,
  padding: '2.3rem 4.5rem',
  marginBottom: '3.2rem',

  '@media': {
    '(max-width: 500px)': {
      fontSize: '2rem',
      padding: '2rem',
    },
  },
});

export const workbookScore = style({
  color: '#999',
  fontWeight: 600,
  fontSize: '2rem',
  lineHeight: 1.5,

  '@media': {
    '(max-width: 500px)': {
      fontSize: '1.7rem',
    },
  },
});

export const workbookMyScore = style({
  color: '#00A86B',
  fontSize: '3.6rem',

  '@media': {
    '(max-width: 500px)': {
      fontSize: '3rem',
    },
  },
});

export const workbookScoreComment = style({
  fontSize: '1.6rem',
  color: '#666',
  lineHeight: 1.5,

  '@media': {
    '(max-width: 500px)': {
      fontSize: '1.5rem',
    },
  },
});

export const workbookResultBarInnerWrapper = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
});

export const buttonContainer = style({
  display: 'flex',
  gap: '2.2rem',

  '@media': {
    '(max-width: 500px)': {
      gap: '1.8rem',
    },
  },
});

export const mainButton = style({
  padding: '1.3rem',
  fontWeight: 600,
  width: 'fit-content',

  '@media': {
    '(max-width: 500px)': {
      fontSize: '1.5rem',
      padding: '1.2rem',
    },
  },
});

export const lightButton = style({
  padding: '1.3rem',
  fontWeight: 500,
  width: 'fit-content',

  '@media': {
    '(max-width: 500px)': {
      fontSize: '1.5rem',
      padding: '1.2rem',
    },
  },
});

// WorkbookResultList
export const workbookResultList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.2rem',
});

// WorkbookResultItem
export const workbookResultItem = style({
  border: '1px solid #EBEBEB',
  borderRadius: 16,
  background: '#fff',
});

export const workbookResultItemTitle = recipe({
  base: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    borderBottom: '1px solid #ebebeb',
    padding: '1.7rem 4.4rem',
    fontSize: '2rem',
    color: '#222',
    fontWeight: 450,
    display: 'flex',
    gap: '1rem',

    '@media': {
      '(max-width: 500px)': {
        padding: '1.7rem 2.2rem',
        fontWeight: 500,
        fontSize: '1.7rem',
      },
    },
  },
  variants: {
    isCorrect: {
      true: { background: '#E8FCF1' },
      false: { background: '#FCEBE8' },
    },
  },
});

export const workbookResultMark = style({
  width: '2.2rem',

  '@media': {
    '(max-width: 500px)': {
      width: '1.8rem',
    },
  },
});

export const workbookResultItemContent = style({
  padding: '3.4rem 4.4rem',

  '@media': {
    '(max-width: 500px)': {
      padding: '2.2rem',
    },
  },
});

export const workbookResultItemQuestion = style({
  fontSize: '1.8rem',
  fontWeight: 400,
  lineHeight: 1.5,

  '@media': {
    '(max-width: 500px)': {
      fontWeight: 450,
      fontSize: '1.5rem',
    },
  },
});

export const workbookQuestionOptionList = style({
  padding: '3rem 0',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '@media': {
    '(max-width: 500px)': {
      padding: '1.5rem 0',
      gap: '1rem',
    },
  },
});

export const workbookQuestionOption = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
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

export const workbookQuestionOptionContent = recipe({
  base: {
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: 1.5,
    padding: '0.8rem 1.6rem',
    borderRadius: 8,
    flex: 1,
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
      true: { color: '#222222', fontWeight: 450 },
    },
    isWrong: {
      true: { color: '#EE5454' },
    },
  },
});

export const answerExplanationContainer = style({
  borderTop: '1px solid #ebebeb',
  paddingTop: '3rem',
  '@media': {
    '(max-width: 500px)': {
      paddingTop: '1.5rem',
    },
  },
});

export const answerExplanationTitle = style({
  fontSize: '1.4rem',
  fontWeight: 450,
  marginBottom: '0.8rem',
  lineHeight: 1.5,
  color: '#222',
});

export const answerExplanationContent = style({
  background: '#F7F7F7',
  borderRadius: 8,
  padding: '1.6rem 2rem',
  lineHeight: 1.5,
  fontSize: '1.4rem',
  color: '#222',
  whiteSpace: 'pre-line',
});
