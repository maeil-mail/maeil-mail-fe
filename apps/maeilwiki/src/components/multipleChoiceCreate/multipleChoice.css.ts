import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Page
export const pageContent = style({
  maxWidth: '110rem',
  width: '85%',
  margin: '0 auto',
  padding: '4rem 0 10rem 0',
});

export const questionAddButton = style({
  display: 'block',
  width: '5.6rem',
  height: '5.6rem',
  background: 'linear-gradient(to right, #17C881 0%, #0FB97B 52%, #24BD99 100%)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.12)',
  borderRadius: 999,
  cursor: 'pointer',
  margin: '2.4rem auto 0 auto',
});

export const plusIcon = style({
  width: '2rem',
});

export const actionBarContent = style({
  display: 'flex',
  height: '100%',
  flexDirection: 'row-reverse',
  alignItems: 'center',
});

// QuestionItem
export const questionItemContainer = style({
  borderRadius: '1.6rem',
  border: '1px solid #EBEBEB',
});

export const questionItemHeader = style({
  background: '#F5F5F5',
  borderRadius: '1.6rem 1.6rem 0 0',
  padding: '1.2rem 4.4rem',
  borderBottom: '1px solid #EBEBEB',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const questionOrder = style({
  fontWeight: 400,
  fontSize: '1.5rem',
});

export const questionItemContent = style({
  padding: '3rem 4.4rem',
  background: '#ffffff',
  borderRadius: '0 0 1.6rem 1.6rem',
});

export const questionContent = style({
  borderBottom: '1px solid #EBEBEB',
  paddingBottom: '3rem',
});

export const questionContentInput = style({
  padding: '1.3rem 2rem',
  width: '100%',
  fontSize: '1.6rem',
  fontWeight: 400,
  border: '1px solid #E0E0E0',
  borderRadius: '0.8rem',
  marginBottom: '2.4rem',

  selectors: {
    '&::placeholder': {
      color: '#999999',
    },
  },
});

export const questionOptionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const questionAnswer = style({
  marginTop: '3rem',
});

export const inputLabel = style({
  display: 'block',
  fontSize: '1.4rem',
  lineHeight: 1.5,
  fontWeight: 400,
  marginBottom: '0.8rem',
});

export const optionalText = style({
  color: '#999999',
});

export const textarea = style({
  width: '100%',
  background: '#F7F7F7',
  color: '#222222',
  padding: '1.6rem 2rem',
  borderRadius: '1rem',
  border: 'none',
  scrollPadding: '1rem',

  selectors: {
    '&::placeholder': {
      color: '#999999',
    },
  },
});

// QuestionOption
export const questionOption = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});

export const optionOrder = style({
  background: '#CCCCCC',
  color: '#FCFCFC',
  width: '2.8rem',
  height: '2.8rem',
  textAlign: 'center',
  lineHeight: '2.8rem',
  fontSize: '2rem',
  fontWeight: 500,
});

export const optionInput = style({
  flex: 1,
  border: '1px solid #EBEBEB',
  borderRadius: '0.8rem',
  fontSize: '1.6rem',
  padding: '0.8rem 1.6rem',

  selectors: {
    '&::placeholder': {
      color: '#B0B0B0',
    },
  },
});

export const answerButton = style({
  border: '1px solid #EBEBEB',
  padding: '0.8rem 2.1rem',
  borderRadius: '1.6rem',
  color: '#999999',
});

// QuestionList
export const questionListTitle = style({
  fontSize: '1.8rem',
  lineHeight: 1.5,
  fontWeight: 500,
  marginBottom: '2rem',
});

export const questionList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
});
