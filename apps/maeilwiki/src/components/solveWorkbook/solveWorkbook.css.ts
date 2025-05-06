import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Page
export const solveWorkbookPageContainer = style({
  minHeight: '100vh',
});

export const solveWorkbookPageContent = style({
  maxWidth: '114rem',
  padding: '0 2rem',
  margin: '4rem auto 20rem auto',
});

export const workbookTitle = style({
  fontWeight: 400,
  fontSize: '1.8rem',
  padding: '2.4rem 3rem',
  background: '#ffffff',
  borderRadius: 10,
  border: '1px solid #EBEBEB',
  marginBottom: '3.2rem',
  lineHeight: 1.5,
  color: '#222222',
});

export const bottomFixedBar = style({
  background: '#ffffff',
  height: '8rem',
  boxShadow: '0px 0px 8px 0px rgba(153, 153, 153, 0.25)',
  position: 'fixed',
  bottom: 0,
  zIndex: 999,
  width: '100%',
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
});

export const workbookQuestionOptionList = style({
  padding: '3.9rem 4.4rem',
  background: '#ffffff',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '2.8rem',
});

export const workbookQuestionOption = style({
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
  cursor: 'pointer',
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
  },

  variants: {
    isSelected: {
      true: { border: '1px solid #E0E0E0' },
    },
  },
});
