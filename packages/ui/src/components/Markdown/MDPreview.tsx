'use client';

import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import { formatMarkdownContent } from './utils/formatMarkDownContent';
import rehypeSanitize from 'rehype-sanitize';

export function MDPreview({ source = '', ...props }: MarkdownPreviewProps) {
  return (
    <MarkdownPreview
      rehypePlugins={[rehypeSanitize]}
      source={formatMarkdownContent(source)}
      {...props}
    />
  );
}
