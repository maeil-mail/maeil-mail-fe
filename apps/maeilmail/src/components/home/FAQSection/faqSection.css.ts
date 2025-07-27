import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const toggleSection = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '100%',
    cursor: 'pointer',

    backgroundColor: '#ffffff',
    maxHeight: '8.5rem',
    overflow: 'hidden',
    transition: 'max-height 1s ease-in-out',
    borderRadius: '1.6rem',
    padding: '2.4rem 3.2rem',
    fontSize: '2rem',
    fontWeight: 500,
    '@media': {
      '(max-width: 768px)': {
        padding: '2rem 2.4rem',
        fontSize: '1.8rem',
        borderRadius: '1.2rem',
      },
    },
  },
  variants: {
    isOpen: {
      true: {
        transition: 'max-height 1s ease',
        maxHeight: '18rem',
        '@media': {
          '(max-width: 768px)': {
            maxHeight: '17.5rem',
          },
        },
      },
      false: {
        transition: 'max-height 0.4s ease',
        maxHeight: '8.5rem',
        '@media': {
          '(max-width: 768px)': {
            maxHeight: '7rem',
          },
        },
      },
    },
  },
});

export const downArrow = recipe({
  base: {
    transition: 'transform 0.3s ease',
  },
  variants: {
    isOpen: {
      true: {
        transform: 'rotate(180deg)',
      },
      false: {
        transform: 'rotate(0deg)',
      },
    },
  },
});

export const faqContainer = style({
  padding: '15rem 2rem',
  width: '100%',
  background: '#F5F7F8',
  '@media': {
    '(max-width: 768px)': {
      padding: '8rem 1.6rem',
    },
  },
});

export const faqTitle = style({
  fontSize: '3.7rem',
  fontWeight: 600,
  textAlign: 'center',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2.8rem',
    },

    '(max-width: 500px)': { fontSize: '2.3rem' },
  },
});

export const faqList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
  width: '100%',
  maxWidth: '80rem',
  margin: '8rem auto 22rem auto',
  '@media': {
    '(max-width: 1000px)': {
      margin: '4rem auto 6rem auto',
      gap: '1.2rem',
    },
  },
});

export const faqHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2rem',

  '@media': {
    '(max-width: 500px)': { fontSize: '1.5rem' },
  },
});

export const faqButton = style({
  textAlign: 'left',
});

export const questionNumber = style({
  display: 'inline-block',
  width: '4rem',
  height: '4rem',
  borderRadius: '50%',
  backgroundColor: '#EDEDED',
  color: '#444444',
  textAlign: 'center',
  lineHeight: '4rem',
  marginRight: '1.5rem',
  fontSize: '2rem',
  fontWeight: 550,
  '@media': {
    '(max-width: 768px)': {
      width: '3.2rem',
      height: '3.2rem',
      lineHeight: '3.2rem',
      fontSize: '1.6rem',
      marginRight: '1.2rem',
    },
  },
});

export const faqContent = style({
  fontSize: '1.6rem',
  fontWeight: 450,
  lineHeight: 1.5,
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.4rem',
    },
  },
});

export const downArrowIcon = style({
  width: '1.5rem',
  '@media': {
    '(max-width: 768px)': {
      width: '1.2rem',
    },
  },
});

export const wikiCard = style({
  background: '#00A86B',
  color: '#fff',
  maxWidth: '100rem',
  margin: '0 auto',
  padding: '7rem 6rem',
  borderRadius: '1.6rem',
  cursor: 'pointer',
  marginBottom: '2.5rem',
  position: 'relative',
  '@media': {
    '(max-width: 1000px)': {
      display: 'none',
    },
  },
});

export const githubCard = style({
  background: '#464646',
  color: '#fff',
  maxWidth: '100rem',
  margin: '0 auto',
  padding: '7rem 6rem',
  borderRadius: '1.6rem',
  cursor: 'pointer',
  position: 'relative',
  '@media': {
    '(max-width: 1000px)': {
      display: 'none',
    },
  },
});

export const cardTitle = style({
  fontSize: '3rem',
  fontWeight: 600,
  marginBottom: '2rem',
});

export const cardDescription = style({
  fontSize: '1.6rem',
  fontWeight: 400,
  lineHeight: 1.5,
});

export const mailCharacter = style({
  width: '14rem',
  position: 'absolute',
  bottom: '0rem',
  right: '5rem',
});

export const githubCharacter = style({
  width: '22rem',
  position: 'absolute',
  bottom: '0rem',
  right: '1rem',
});
