import { keyframes, style } from '@vanilla-extract/css';
import { text1, background3 } from '@/_styles/vars.css';

const slideIn = keyframes({
  '0%': { transform: 'translateX(-2rem)', opacity: 0 },
  '100%': { transform: 'translateX(0)', opacity: 1 },
});

export const ulContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const questionItemContainer = style({
  width: '100%',
  height: '100%',
  background: background3,
  marginBottom: '2rem',
  borderRadius: '1rem',
  color: text1,
  fontSize: '1.8rem',
  padding: '2rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  animation: `${slideIn} 0.3s ease forwards`,
  ':hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
});
