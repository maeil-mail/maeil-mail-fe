import { createGlobalTheme } from '@vanilla-extract/css';

export const lightTheme = createGlobalTheme(':root', {
  colorBackground: '#fff',
});

export const darkTheme = createGlobalTheme('[data-theme="dark"]', {
  colorBackground: '#1a1a1a',
});
