import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// WorkbookInfoForm
export const workbookInfoTitle = style({
  fontSize: '1.8rem',
  lineHeight: 1.5,
  fontWeight: 500,
  marginBottom: '2rem',
});

export const workbookInfoForm = style({
  border: '1px solid #EBEBEB',
  padding: '4.1rem 4.4rem',
  background: '#ffffff',
  borderRadius: '1.6rem',
  marginBottom: '5.6rem',
});

export const workbookTitleInput = style({
  fontSize: '2.6rem',
  border: 'none',
  width: '100%',
  lineHeight: 1.5,
  fontWeight: 400,
  selectors: {
    '&::placeholder': {
      color: '#999999',
    },
  },
});

export const workbookFields = style({
  borderBottom: '1px solid #EBEBEB',
  borderTop: '1px solid #EBEBEB',
  padding: '1.6rem 0',
  margin: '2rem 0',
});

export const workbookDifficulty = style({
  marginBottom: '2rem',
});

export const fieldLabel = style({
  fontSize: '1.4rem',
  fontWeight: 400,
  display: 'block',
  lineHeight: 1.5,
  marginBottom: '0.8rem',
});

export const starList = style({
  display: 'flex',
  gap: '0.453rem',
});

export const starIcon = recipe({
  base: {
    width: '2.4rem',
    color: '#CCCCCC',
  },
  variants: {
    isFilled: {
      true: { color: '#E9B24C' },
    },
    isHovered: {
      true: { color: '#EAD69B' },
    },
  },
});

export const categorySelect = recipe({
  base: {
    background: '#F7F7F7',
    borderColor: '#DBDBDB',
    padding: '0.55rem 2.1rem',
    borderRadius: '0.5rem',
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.5,
    width: 'fit-content',
    cursor: 'pointer',
  },

  variants: {
    isFilled: {
      true: { color: '#222' },
      false: { color: '#999' },
    },
  },
});

export const defaultOption = style({
  color: '#999999',
});
