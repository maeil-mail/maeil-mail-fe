import DOMPurify from 'isomorphic-dompurify';

const formatMarkdownContent = (content: string) => {
  let formattedMarkdownBodyContent = content.replace(/\\n/g, '\n');

  formattedMarkdownBodyContent = DOMPurify.sanitize(formattedMarkdownBodyContent);

  formattedMarkdownBodyContent = formattedMarkdownBodyContent.replace(/\\```/g, '```');

  formattedMarkdownBodyContent = formattedMarkdownBodyContent.replace(/\\`/g, '`');

  return formattedMarkdownBodyContent;
};

export default formatMarkdownContent;
