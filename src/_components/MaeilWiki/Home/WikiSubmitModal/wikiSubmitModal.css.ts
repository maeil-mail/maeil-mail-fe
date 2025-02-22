import { style } from '@vanilla-extract/css';

export const modalContent = style({
  width: '100%',
  maxWidth: '80rem',
  padding: '3.8rem 4.3rem',
  fontSize: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 1.5,

  userSelect: 'none',

  '@media': {
    '(max-width: 850px)': {
      padding: '2rem 2.8rem',
    },
  },
});

export const modalTitle = style({
  fontWeight: 500,
  fontSize: '2rem',
  marginBottom: '2.4rem',

  '@media': {
    '(max-width: 850px)': {
      fontSize: '1.7rem',
      marginBottom: '2rem',
    },
  },
});

export const modalFormSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
});

export const closeIcon = style({
  position: 'absolute',
  top: 30,
  right: 30,
  cursor: 'pointer',
  width: '1.5rem',
  height: '1.5rem',
});

export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const inputLabel = style({
  display: 'block',
  fontSize: '1.6rem',
  fontWeight: 500,

  '@media': {
    '(max-width: 850px)': {
      fontSize: '1.4rem',
    },
  },
});

export const asterisk = style({
  color: '#EE5454',
});

export const questionInput = style({
  padding: '1rem 1.3rem',
  borderRadius: '0.5rem',
  border: '1px solid #999999',
  fontSize: '1.8rem',
  lineHeight: 1.5,
  wordSpacing: '-0.1rem',

  selectors: {
    '&::placeholder': {
      color: '#999999',
      fontWeight: 400,
      opacity: 0.7,
    },
  },

  '@media': {
    '(max-width: 850px)': {
      fontSize: '1.5rem',
      padding: '0.7rem 1rem',
    },
  },
});

export const subText = style({
  color: '#999999',
  fontSize: '1.4rem',
  lineHeight: 1.5,
  fontWeight: 300,
  textAlign: 'center',
  marginLeft: '0.3rem',

  '@media': {
    '(max-width: 850px)': {
      fontSize: '1.3rem',
    },
  },
});

export const questionDetailTextarea = style({
  padding: '1rem 1.3rem',
  borderRadius: '0.5rem',
  border: '1px solid #999999',
  fontSize: '1.6rem',
  lineHeight: 1.5,
  height: '10rem',
  scrollPadding: '1rem',
  scrollPaddingTop: '1rem',
  resize: 'none',
  wordSpacing: '-0.1rem',

  selectors: {
    '&::placeholder': {
      color: '#999999',
      fontWeight: 400,
      opacity: 0.7,
    },
  },

  '@media': {
    '(max-width: 850px)': {
      fontSize: '1.4rem',
      padding: '0.7rem 0.3rem 0.7rem 1rem',
      scrollPadding: '0.5rem',
      scrollPaddingTop: '0.5rem',
      height: '9rem',
    },
  },
});

export const metaInfoInputSection = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '4rem',

  '@media': {
    '(max-width: 850px)': {
      marginBottom: '3rem',
    },
  },
});

export const categoryInputs = style({ display: 'flex', gap: '1rem' });

export const categoryInputsWrapper = style({
  display: 'flex',
  gap: '0.8rem',
  fontSize: '1.4rem',
});

export const categoryLabel = style({
  fontWeight: 300,
  cursor: 'pointer',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',

  '@media': {
    '(max-width: 850px)': {
      fontSize: '1.3rem',
    },
  },
});

export const categoryRadio = style({
  borderRadius: 999,
  cursor: 'pointer',
  accentColor: '#00a86b',
  margin: 0,
  width: '2rem',
  height: '2rem',

  '@media': {
    '(max-width: 850px)': {
      width: '1.6rem',
      height: '1.6rem',
    },
  },
});

export const isAnonymousLabel = style({
  fontSize: '1.4rem',
  color: '#999999',
  cursor: 'pointer',
  fontWeight: 300,
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  '@media': {
    '(max-width: 850px)': {
      fontSize: '1.3rem',
    },
  },
});

export const isAnonymousCheckbox = style({
  width: '2rem',
  height: '2rem',
  accentColor: '#00a86b',
  cursor: 'pointer',

  '@media': {
    '(max-width: 850px)': {
      width: '1.6rem',
      height: '1.6rem',
    },
  },
});
