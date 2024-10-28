'use client';

import formatMarkdownContent from '@/_utils/codemirror/formatMarkDownContent';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@mdxeditor/editor/style.css';

interface DetailAnswerProps {
  content: string;
}

export default function DetailAnswer({ content }: DetailAnswerProps) {
  return <MarkdownPreview source={formatMarkdownContent(content)} />;
}
