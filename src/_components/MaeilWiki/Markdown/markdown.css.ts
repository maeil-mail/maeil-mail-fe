import { globalStyle, style } from '@vanilla-extract/css';

// MDEditor
export const mdEditorContainer = style({
  border: '1px solid #d1d9e0',
  padding: '2rem 1rem',
  borderRadius: '0.4rem',
});

export const mdOptionTabBar = style({ display: 'flex', gap: '2rem', marginBottom: '1rem' });

export const mdOptionButton = style({});

export const mdPreview = style({
  minHeight: '12rem',
  padding: '0.5rem 1rem',
});

export const mdxEditorWrapper = style({
  position: 'relative',
});

export const mdxEditorPlaceholder = style({
  position: 'absolute',
  top: '1rem',
  left: '1.2rem',
  color: 'gray',
});

// MDEditor global
globalStyle('.mdxeditor', {
  position: 'relative',
});

globalStyle('.cm-content', {
  minHeight: '12rem !important',
  lineHeight: 1.5,
  padding: '0.5rem !important',
  border: '1px solid #d1d9e0',
  borderRadius: '0.4rem',
});

globalStyle('.cm-line', {
  fontSize: '1.65rem !important',
});

globalStyle('.cm-gutters', {
  display: 'none !important',
});

globalStyle('.cm-activeLine', {
  background: 'transparent !important',
});

globalStyle('._markdownParseError_uazmk_1211', {
  display: 'none !important',
});

globalStyle('.cm-tooltip', {
  background: 'gray',
});

globalStyle('.mdxeditor-popup-container', {
  color: 'red',
  backgroundColor: 'red',
});
