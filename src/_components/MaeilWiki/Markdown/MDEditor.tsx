'use client';

import {
  MDXEditor,
  MDXEditorProps,
  headingsPlugin,
  diffSourcePlugin,
  listsPlugin,
  linkPlugin,
  quotePlugin,
  codeBlockPlugin,
  tablePlugin,
  imagePlugin,
  frontmatterPlugin,
  codeMirrorPlugin,
} from '@mdxeditor/editor';
import './markdown.css';
import { CODE_BLACK_LANGUAGES } from './constants';
import { mdxEditorPlaceholder, mdxEditorWrapper } from './markdown.css';

const mdxEditorPlugins = [
  headingsPlugin(),
  listsPlugin(),
  linkPlugin(),
  quotePlugin(),
  frontmatterPlugin(),
  tablePlugin(),
  imagePlugin(),
  codeBlockPlugin({ defaultCodeBlockLanguage: 'txt', codeBlockEditorDescriptors: [] }),
  codeMirrorPlugin({
    autoLoadLanguageSupport: true,
    codeBlockLanguages: CODE_BLACK_LANGUAGES,
  }),
  diffSourcePlugin({ viewMode: 'source' }),
];

export default function MDEditor(props: MDXEditorProps) {
  return (
    <div className={mdxEditorWrapper}>
      <MDXEditor plugins={mdxEditorPlugins} {...props} />
      {!props.markdown && <div className={mdxEditorPlaceholder}>답변을 입력해주세요</div>}
    </div>
  );
}
