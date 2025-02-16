import * as React from 'react';
import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import formatMarkdownContent from '@/_components/QuestionDetail/_utils/formatMarkDownContent';
import rehypeSanitize from 'rehype-sanitize';

export default function MDPreview({ source = '', ...props }: MarkdownPreviewProps) {
  return (
    <MarkdownPreview
      rehypePlugins={[rehypeSanitize]}
      source={formatMarkdownContent(source)}
      {...props}
    />
  );
}
