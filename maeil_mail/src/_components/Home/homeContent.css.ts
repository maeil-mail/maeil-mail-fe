import { primary } from '@/_styles/vars.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  display: 'flex',

  alignItems: 'center',
  flexDirection: 'column',
});

// hero section
export const heroSection = style({
  width: '100%',
  height: '77rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: `linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 168, 107, 0.1) 100%
  )`,
});

export const heroSectionInnerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

export const heroTypo = style({
  fontSize: '2.4rem',
  textAlign: 'center',
  color: '#888888',
  marginTop: '2rem',
  letterSpacing: '-0.05rem',
});

export const heroHeading = style({
  fontSize: '5.5rem',
  textAlign: 'center',
  fontWeight: 600,
  letterSpacing: '-2.6px',
  color: '#2b2b2b',
});

export const heroButton = style({
  backgroundColor: primary,
  color: 'white',
  borderRadius: '4rem',
  padding: '2rem 4rem',
  fontSize: '2.4rem',
  marginTop: '4rem',
  width: 'fit-content',
  fontWeight: 600,
  boxShadow: '0px 5.5px 25px 0.4px rgba(0, 168, 107, 0.3)',
});

// description section
export const descriptionSection = style({
  height: '89rem',
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
