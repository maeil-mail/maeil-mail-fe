import { style } from '@vanilla-extract/css';
import { text1, text2, primary } from '@/_styles/vars.css';

export const titleText = style({
  fontSize: '3.4rem',
  fontWeight: 650,
  color: text1,
  marginBottom: '4rem',
});

export const contentText = style({
  fontFamily: 'BMHANNAAir',
  fontSize: '3rem',
  color: text1,
});

export const textWrapper = style({
  fontSize: '1.6rem',
  color: text2,
  borderLeft: `5px solid ${primary}`,
  padding: '0.3rem 1rem',
  marginBottom: '3rem',
});

export const categoryHighlight = style({
  // color: primary,
  fontWeight: 600,
});

const baseButtonStyle = {
  fontSize: '1.4rem',
  padding: '0.6rem 1.4rem',
  borderRadius: '10rem',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

export const primaryButton = style({
  ...baseButtonStyle,
  color: 'white',
  backgroundColor: '#00A86B',
  gap: '0.4rem',
});

export const subButton = style({
  ...baseButtonStyle,
  fontSize: '1.4rem',
  color: '#00A86B',
  border: '1px solid, #00A86B',
  gap: '0.3rem',
});

export const separator = style({
  borderBottom: '1px solid #d4d4d4',
  margin: '2rem 0',
});

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'row-reverse',
  gap: '1rem',
});

export const ideaIcon = style({
  width: '1.8rem',
});

export const shareIcon = style({
  width: '1.6rem',
});
