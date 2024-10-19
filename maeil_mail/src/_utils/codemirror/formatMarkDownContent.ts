const formatMarkdownContent = (content: string) => {
  // \n -> 실제 줄바꿈
  let formattedMarkdownBodyContent = content.replace(/\\n/g, '\n');

  // \`\`\` -> ``` (코드 블록의 시작과 끝 처리)
  formattedMarkdownBodyContent = formattedMarkdownBodyContent.replace(/\\```/g, '```');

  // \` -> ` (단일 백틱 처리)
  formattedMarkdownBodyContent = formattedMarkdownBodyContent.replace(/\\`/g, '`');

  return formattedMarkdownBodyContent;
};

export default formatMarkdownContent;
