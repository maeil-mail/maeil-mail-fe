import { createGlobalTheme } from '@vanilla-extract/css';

export const lightTheme = createGlobalTheme(':root', {
  colorBackground: '#fff',
});

export type LightTheme = typeof lightTheme;

export const darkTheme = createGlobalTheme('[data-theme="dark"]', {
  colorBackground: '#1a1a1a',
});

export type DarkTheme = typeof darkTheme;
