import { style, keyframes } from '@vanilla-extract/css';

export const toastContainer = style({
  position: 'fixed',
  top: '3rem',
  right: '3rem',
  zIndex: 1000,
});

export const toast = style({
  padding: '1rem',
  marginBottom: '1rem',
  fontSize: '1.6rem',
  borderRadius: '0.5rem',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
  color: '#fff',
  fontWeight: 'bold',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
});

export const toastDefault = style({
  backgroundColor: '#333',
});

export const toastWarning = style({
  backgroundColor: '#ffa500',
});

export const toastError = style({
  backgroundColor: '#ff0000',
});

export const toastSuccess = style({
  backgroundColor: '#51c457',
});

export const toastEntering = style({
  transform: 'scaleY(0)',
  opacity: 0,
});

export const toastEntered = style({
  transform: 'scaleY(1)',
  opacity: 1,
});

export const toastExiting = style({
  transform: 'scaleY(0)',
  opacity: 0,
});

export const progressBar = style({
  height: '0.5rem',
  marginTop: '0.5rem',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  animation: `${keyframes({
    from: { width: '100%' },
    to: { width: '0' },
  })} linear`,
});
