'use client';

import formatMarkdownContent from '@/_utils/codemirror/formatMarkDownContent';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { contentText } from './questionDetail.css';

interface DetailAnswerProps {
  content: string;
}

export default function DetailAnswer({ content }: DetailAnswerProps) {
  const formattedContent = formatMarkdownContent(content);

  return <MarkdownPreview source={formattedContent} className={contentText} />;
}
