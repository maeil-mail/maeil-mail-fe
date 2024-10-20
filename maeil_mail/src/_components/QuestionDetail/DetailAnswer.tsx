'use client';

import formatMarkdownContent from '@/_utils/codemirror/formatMarkDownContent';
import MarkdownPreview from '@uiw/react-markdown-preview';
import CodeMirror from '@uiw/react-codemirror';
import { contentText } from './questionDetail.css';
import { MDXEditor, headingsPlugin } from '@mdxeditor/editor';
import '@mdxeditor/editor/style.css';
import { ForwardRefEditor } from '../MDXEditor/ForwardRefEditor';

interface DetailAnswerProps {
  content: string;
}

const markdownContent = `## JavaScript의 실행 컨텍스트와 클로저에 대해 설명해주세요

자바스크립트에서 **실행 컨텍스트(Execution Context)**는 코드가 실행될 환경을 정의하는 추상적인 개념입니다. 실행 컨텍스트는 변수, 객체, 함수 등의 정보를 관리하며, 실행되는 동안 스코프 체인, this 값, 변수 객체 등을 설정합니다.

### 실행 컨텍스트의 구성 요소

1. **변수 객체(Variable Object)**: 실행 컨텍스트 내에서 사용되는 변수, 함수 선언을 저장합니다.
2. **스코프 체인(Scope Chain)**: 현재 컨텍스트의 변수 객체와 상위 컨텍스트의 변수 객체를 연결하는 체인입니다.
3. **this**: 현재 실행되는 코드가 속한 객체를 참조합니다.

#### 코드 예시

\`\`\`javascript
function outer() {
    var outerVar = 'I am outside!';
    function inner() {
        var innerVar = 'I am inside!';
        console.log(outerVar); // 'I am outside!'
    }
    inner();
}
outer();
\`\`\`

위 코드에서 \`outer\` 함수는 \`outerVar\`라는 변수를 가지고 있으며, 내부에 정의된 \`inner\` 함수는 \`outerVar\`에 접근할 수 있습니다. 이와 같이, 내부 함수가 외부 함수의 변수에 접근할 수 있는 현상을 **클로저(Closure)**라고 합니다.

### 클로저(Closure)

클로저는 함수가 자신이 생성될 때의 환경(렉시컬 환경, Lexical Environment)을 기억하고, 생성 이후에도 이 환경에 접근할 수 있는 기능을 의미합니다. 클로저는 함수와 함수가 선언된 어휘적 환경의 조합입니다.`;

export default function DetailAnswer({ content }: DetailAnswerProps) {
  console.log(formatMarkdownContent(markdownContent));

  return (
    // <CodeMirror value={formatMarkdownContent(markdownContent)} editable={false} maxWidth={'100%'} />
    <MarkdownPreview source={formatMarkdownContent(markdownContent)} />
  );
}
