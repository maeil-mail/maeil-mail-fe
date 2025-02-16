const formatMarkdownContent = (content: string): string => {
  let formattedMarkdownBodyContent = content.replace(/\\n/g, '\n');

  formattedMarkdownBodyContent = formattedMarkdownBodyContent.replace(/\\```/g, '```');

  formattedMarkdownBodyContent = formattedMarkdownBodyContent.replace(/\\`/g, '`');

  return formattedMarkdownBodyContent;
};

export default formatMarkdownContent;
