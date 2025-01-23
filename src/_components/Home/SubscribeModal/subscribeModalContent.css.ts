import { ComplexStyleRule, style } from '@vanilla-extract/css';
import { primary, text1 } from '@/_styles/vars.css';

export const container = style({
  width: '37rem',
  position: 'relative',
  color: text1,
  padding: '2.8rem 2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',
  '@media': {
    'screen and (max-width: 820px)': {
      width: '100%',
    },
  },
});

export const successLayout = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const title = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  textAlign: 'center',
});

export const closeButton = style({
  width: '2rem',
  position: 'absolute',
  top: 20,
  right: 20,
  cursor: 'pointer',
  margin: '0.5rem',
});

export const emailInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
});

export const categoryWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem',
});

export const categoryText = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  color: '#888888',
});

export const categorySubtext = style({
  marginLeft: '1rem',
  fontSize: '1.3rem',
  fontWeight: 500,
  color: '#b0b0b0',
});

export const inputSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const inputSectionWrapper = style({ display: 'flex', flexDirection: 'column', gap: '2rem' });

export const checkboxWrapper = style({
  display: 'flex',
  gap: '8rem',
  margin: '0 auto',

  '& > div:first-of-type': {
    width: '9rem',
  },
  // note(@Parkhanyoung): 선택자 사용이 불필요한 TS 오류를 일으켜 타입 단언을 해주었음
} as ComplexStyleRule);

export const nineRem = style({
  width: '9rem',
});

export const emailWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const verificationSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2.6rem',
});

export const verificationNoti = style({
  fontSize: '1.6rem',
  color: primary,
  textAlign: 'center',
});

export const inputWrapper = style({
  width: '100%',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const privacyPolicyText = style({
  margin: '0 auto',
});

export const underline = style({
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
  textDecorationThickness: '0.3px',
});
