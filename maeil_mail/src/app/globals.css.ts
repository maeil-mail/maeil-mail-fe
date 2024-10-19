import { globalStyle } from '@vanilla-extract/css';
import { lightTheme, darkTheme } from '@/_styles/theme.css';
import { text1, borderColor1, text2 } from '@/_styles/vars.css';

// globalFontFace('BMHANNAAir', {
//   src: 'url(https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff) format("woff")',
//   fontWeight: 'normal',
//   fontStyle: 'normal',
// });

globalStyle('*', {
  boxSizing: 'border-box',
  color: '#2b2b2b',
  scrollbarWidth: 'none',
});

globalStyle('*::-webkit-scrollbar', {
  display: 'none',
});

globalStyle('html', {
  fontSize: '62.5%',
});

globalStyle('button', {
  cursor: 'pointer',
  outline: 'none',
  border: 'none',
  background: 'inherit',
  padding: '0',
  color: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
});

globalStyle('body', {
  margin: '0',
  transition: 'all 0.3s ease',
});

globalStyle('h1, h2, h3, p', {
  margin: '0',
  padding: '0',
});

globalStyle('a, a:link, a:visited, a:hover', {
  textDecoration: 'none',
  color: text2,
});

globalStyle('ul', {
  padding: '0',
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle(`:root`, {
  background: lightTheme.colorBackground,
});

globalStyle(`[data-theme='dark']`, {
  background: darkTheme.colorBackground,
});

globalStyle('.cm-line', {
  fontSize: '2.1rem !important',
});

globalStyle('.ͼ1.cm-focused', {
  outline: 'none !important',
});

// markdown-preview

globalStyle('.wmde-markdown', {
  background: `${darkTheme.colorBackground} !important`,
  color: `${text1} !important`,
  fontSize: '1.3rem !importannt',
});

globalStyle('.wmde-markdown h2', {
  border: 'none !important',
});

globalStyle('.wmde-markdown code', {
  fontSize: '1.6rem !important',
});

globalStyle('.wmde-markdown pre', {
  background: `${darkTheme.colorBackground} !important`,
});

globalStyle('.wmde-markdown hr', {
  background: `${borderColor1} !important`,
  height: '1px !important',
});

globalStyle('.wmde-markdown blockquote', {
  borderLeft: '0.25em solid #d9d9d9 !important',
  background: '#434343 !important',
  color: '#a6a6a6 !important',
  padding: '1em !important',
});

globalStyle('.wmde-markdown img', {
  background: 'none !important',
});

globalStyle('.wmde-markdown p', {
  fontSize: '2rem',
});

globalStyle(
  `.wmde-markdown .token.color, 
   .wmde-markdown .token.atrule, 
   .wmde-markdown .token.attr-value, 
   .wmde-markdown .token.function, 
   .wmde-markdown .token.string, 
   .wmde-markdown .token.class-name`,
  {
    color: '#246398 !important',
  },
);
