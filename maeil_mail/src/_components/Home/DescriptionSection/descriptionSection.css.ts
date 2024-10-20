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
});

export const primaryColor = style({
  color: primary,
});

export const descriptionSubSection = style({
  display: 'flex',
  gap: '13rem',
  alignItems: 'center',
});

export const descriptionSubSection1Left = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.6rem',
});

export const mailImage = style({
  width: '17.5rem',
});

export const mailExampleList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const mailExample = style({
  width: '27rem',
  boxShadow: '0px 0.1px 2px 0px #bdbdbd',
  borderRadius: '3rem',
  padding: '1rem 0',
  textAlign: 'center',
  fontSize: '1.2rem',
  color: '#bdbdbd',
  fontStyle: 'italic',
});

export const answerImage = style({
  width: '24rem',
});

export const descriptionHeading = style({
  fontSize: '4rem',
  letterSpacing: '-0.2rem',
  fontWeight: 600,
});

export const descriptionTypo = style({
  fontSize: '2.4rem',
  letterSpacing: '-0.05rem',
  color: '#888888',
  marginTop: '2rem',
});
