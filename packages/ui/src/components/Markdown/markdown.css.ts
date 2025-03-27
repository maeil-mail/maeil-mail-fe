import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// MDEditor
export const mdEditorContainer = style({
  border: '1px solid #D2D2D2',
  borderRadius: '1rem',
  minHeight: '19rem !important',
  background: '#ffffff',
});

export const mdOptionTabBar = style({
  display: 'flex',
  background: '#F1F1F1',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
});

export const mdOptionTab = recipe({
  base: {
    position: 'relative',
    color: '#999999',
    padding: '1.6rem 5.2rem',
    borderTopLeftRadius: '1rem',
    borderTopRightRadius: '1rem',
    display: 'block',

    '@media': {
      '(max-width: 800px)': {
        padding: '1rem 3rem',
        fontSize: '1.3rem',
      },
    },
  },
  variants: {
    mode: {
      write: {
        borderRight: '1px solid #d2d2d2',
      },
      preview: {
        borderLeft: '1px solid #d2d2d2',
        borderRight: '1px solid #d2d2d2',
      },
    },
    isSelected: {
      true: {
        color: '#2b2b2b',
        background: '#ffffff',
        fontWeight: 500,
      },
      false: {
        border: 'none',
        borderBottom: '1px solid #d2d2d2',
      },
    },
  },
});

export const tabBottomBorder = style({
  flex: 1,
  borderBottom: '1px solid #D2D2D2',
});

export const editorContainer = style({
  background: '#ffffff',
  padding: '2rem 3.2rem',
  borderRadius: '1rem',

  '@media': {
    '(max-width: 800px)': {
      padding: '1rem 1rem',
    },
  },
});

export const mdPreview = style({
  minHeight: '12rem',
  padding: '0.5rem 1rem',
});

export const mdxEditorWrapper = style({
  position: 'relative',
});

export const mdxEditorPlaceholder = style({
  position: 'absolute',
  top: '1.45rem',
  left: '2.3rem',
  color: '#999999',
  lineHeight: 1.5,
  fontWeight: 300,

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.4rem',
      top: '0.8rem',
      left: '1.25rem',
    },
  },
});

// MDEditor global
globalStyle('.mdxeditor', {
  position: 'relative',
});

globalStyle('.cm-editor', {
  minHeight: '12rem !important',
});

globalStyle('.cm-scroller', {
  minHeight: '12rem !important',
  padding: '1rem 1.5rem !important',
  border: '1px solid #EBEBEB',
  maxHeight: '20rem',
  borderRadius: '0.5rem',
  lineHeight: 1.5,
  cursor: 'text',

  '@media': {
    '(max-width: 800px)': {
      padding: '0.3rem 0.5rem !important',
    },
  },
});

globalStyle('.cm-content', {});
globalStyle('.markdown_mdPreview__9t04ht9', {
  maxHeight: '45rem',
  overflow: 'auto',
});

globalStyle('.cm-line', {
  fontSize: '1.5rem !important',
  wordSpacing: '-0.3rem',
  cursor: 'text',

  '@media': {
    '(max-width: 800px)': {
      fontSize: '1.4rem !important',
    },
  },
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
