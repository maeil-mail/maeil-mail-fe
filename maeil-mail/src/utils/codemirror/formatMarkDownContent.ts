const formatMarkdownContent = (content: string) => {
  let formattedContent = content.replace(/\\n/g, '\n');
  formattedContent = formattedContent.replace(/```\w*\n/g, '```\n');
  formattedContent = formattedContent.replace(/```\n/g, '```\n');

  return formattedContent;
};

export default formatMarkdownContent;
