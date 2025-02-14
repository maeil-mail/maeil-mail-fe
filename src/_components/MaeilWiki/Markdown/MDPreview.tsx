import * as React from 'react';
import MarkdownPreview, { MarkdownPreviewProps } from '@uiw/react-markdown-preview';
import formatMarkdownContent from '@/_components/QuestionDetail/_utils/formatMarkDownContent';

export default function MDPreview({ source = '', ...props }: MarkdownPreviewProps) {
  return <MarkdownPreview source={formatMarkdownContent(source)} {...props} />;
}
