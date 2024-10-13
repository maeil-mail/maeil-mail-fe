import { tags as t } from '@lezer/highlight';
import { keymap, StateCommand, KeyBinding } from '@uiw/react-codemirror';
import { markdownKeymap, insertNewlineContinueMarkup } from '@codemirror/lang-markdown';
import createTheme from '@uiw/codemirror-themes';
import { background1 } from '@/_styles/vars.css';

export const customInsertNewline: StateCommand = ({ state, dispatch }) => {
  const tr = state.update({
    changes: { from: state.selection.main.head, insert: '\n' },
  });
  if (dispatch) dispatch(tr);
  return true;
};

export const customKeymap = keymap.of(
  markdownKeymap
    .filter((binding: KeyBinding) => binding.run !== insertNewlineContinueMarkup)
    .concat([{ key: 'Enter', run: customInsertNewline }]),
);

export const myTheme = createTheme({
  theme: 'dark',
  settings: {
    background: background1,
    caret: '#b2b2b2',
    foreground: '#fff',
    selection: '#abb2b',
    selectionMatch: '#212121',
    lineHighlight: '#8a91991a',
    gutterBackground: '#9e7575',
    gutterForeground: '#8a919966',
    gutterActiveForeground: 'pink',
  },
  styles: [
    { tag: t.comment, color: '#3d4758;' },
    { tag: t.variableName, color: '#e06c75' },
    { tag: [t.string, t.special(t.brace)], color: '#98c379' },
    { tag: t.number, color: '#d19a66' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#c678dd' },
    { tag: t.operator, color: '#56b6c2' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#e5c07b' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#5c6166' },
    { tag: t.tagName, color: '#5c6166' },
    { tag: t.attributeName, color: '#5c6166' },
    {
      tag: t.heading1,
      fontWeight: 'bold',
      fontSize: '3.2rem',
      color: '#fff !important',
    },
    {
      tag: t.heading2,
      fontWeight: 'bold',
      fontSize: '2.7rem',
      color: '#fff !important',
    },
    {
      tag: t.heading3,
      fontWeight: 'bold',
      fontSize: '1.8em',
      color: '#fff !important',
    },
    {
      tag: t.heading4,
      fontWeight: 'bold',
      fontSize: '1.7em',
      color: '#fff !important',
    },
    {
      tag: t.heading5,
      fontWeight: 'bold',
      fontSize: '1.4em',
      color: '#fff !important',
    },
    {
      tag: t.heading6,
      fontWeight: 'bold',
      fontSize: '1.3em',
      color: '#fff !important',
    },

    { tag: t.strong, fontWeight: 'bold' },
    { tag: t.typeName, color: '#5c6370' },
    { tag: t.quote, color: '#5c6370', fontStyle: 'italic' },
    { tag: t.blockComment, color: '#5c6370' },
    { tag: t.bracket, color: '#d0d0d0' },
    { tag: t.propertyName, color: '#56b6c2' },
    { tag: t.lineComment, color: '#6d6d6d' },
    { tag: t.url, color: '#98c379' },
    {
      tag: t.processingInstruction,
      color: '#5c6370',
    },
    {
      tag: t.name,
      color: '#5c6370',
      fontStyle: 'italic',
    },
  ],
});
