import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const descriptionSection = style({
  width: '100%',
  padding: '10rem 0',
  display: 'flex',
  justifyContent: 'center',
});

export const descriptionSectionInnerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14rem',

  '@media': {
    'screen and (max-width: 820px)': {
      gap: '10rem',
    },
  },
});

export const primaryColor = style({
  color: primary,
});

export const descriptionSubSection = style({
  display: 'flex',
  gap: '13rem',
  alignItems: 'center',

  '@media': {
    'screen and (max-width: 820px)': {
      textAlign: 'center',
      gap: '6rem',
    },
  },
});

export const subSection1 = style({
  '@media': {
    'screen and (max-width: 820px)': {
      flexDirection: 'column',
    },
  },
});

export const subSection2 = style({
  '@media': {
    'screen and (max-width: 820px)': {
      flexDirection: 'column-reverse',
    },
  },
});

export const descriptionSubSection1Left = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',
});

export const mailImage = style({
  width: '17.5rem',

  '@media': {
    'screen and (max-width: 820px)': {
      width: '12rem',
    },
  },
});

export const mailExampleList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const mailExample = style({
  width: '30rem',
  boxShadow: '0px 0.1px 2px 0px #bdbdbd',
  borderRadius: '3rem',
  padding: '1rem 0',
  textAlign: 'center',
  fontSize: '1.3rem',
  color: '#888888',
  fontStyle: 'italic',
});

export const answerImage = style({
  width: '24rem',
  '@media': {
    'screen and (max-width: 820px)': {
      width: '14rem',
      marginLeft: '2.5rem',
    },
  },
});

export const descriptionHeading = style({
  fontSize: '4rem',
  letterSpacing: '-0.2rem',
  fontWeight: 600,

  '@media': {
    'screen and (max-width: 820px)': {
      fontSize: '2.8rem',
    },
  },
});

export const descriptionTypo = style({
  fontSize: '2.4rem',
  letterSpacing: '-0.05rem',
  color: '#888888',
  marginTop: '2rem',

  '@media': {
    'screen and (max-width: 820px)': {
      textAlign: 'center',
      fontSize: '2rem',
    },
  },
});
