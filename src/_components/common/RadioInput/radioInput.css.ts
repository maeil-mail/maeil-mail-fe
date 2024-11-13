import { style } from '@vanilla-extract/css';
import { primary } from '@/_styles/vars.css';

export const radioContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const radio = style({
  appearance: 'none',
  cursor: 'pointer',
  backgroundColor: 'rgba(187, 187, 187, 0.2)',
  width: '1.8rem',
  height: '1.8rem',
  margin: 0,
  border: '1px solid rgba(136, 136, 136, 0.2)',
  borderRadius: '30px',
  selectors: {
    '&:checked': {
      backgroundColor: 'white',
      border: `5px solid ${primary}`,
    },
  },
});

export const label = style({
  position: 'relative',
  cursor: 'pointer',
});

export const labelText = style({
  margin: '0 1rem',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '1.6rem',
  color: '#888888',
});

export const selected = style({
  color: primary,
});
