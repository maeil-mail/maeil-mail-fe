'use client';

import './markdown.css';
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
import { CODE_BLOCK_LANGUAGES } from './codeBlockLanguages';
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
    codeBlockLanguages: CODE_BLOCK_LANGUAGES,
  }),
  diffSourcePlugin({ viewMode: 'source' }),
];

export function MDEditor(props: MDXEditorProps) {
  return (
    <div className={mdxEditorWrapper}>
      <MDXEditor plugins={mdxEditorPlugins} {...props} />
      {!props.markdown && (
        <div className={mdxEditorPlaceholder}>마크다운으로 답변을 입력해주세요</div>
      )}
    </div>
  );
}
