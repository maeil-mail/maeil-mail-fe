import formatMarkdownContent from '@/utils/codemirror/formatMarkDownContent';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { contentText } from './questionDetail.css';
import { MDXEditor, headingsPlugin, quotePlugin, thematicBreakPlugin } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { myStyle } from '@/styles/vars.css';

interface DetailAnswerProps {
  content: string;
}

export default function DetailAnswer({ content }: DetailAnswerProps) {
  const formattedContent = formatMarkdownContent(content);

  console.log('formattedContent', formattedContent);

  return <MarkdownPreview source={formattedContent} />;
}
