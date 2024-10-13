import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { javascript } from '@codemirror/lang-javascript';
import { languages } from '@codemirror/language-data';
import { EditorView } from '@codemirror/view';
import { customKeymap, myTheme } from '@/_utils/codemirror/codemirrorOptions';
import { myStyle } from '@/_styles/vars.css';
import {
  container,
  radioWrapper,
  titleInput,
  addQuestionButton,
  buttonWrapper,
} from './addQuestionModalContent.css';
import RadioInput from '../../RadioInput/RadioInput';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import useAddQuestion from '@/_hooks/mutations/useAddQuestion';

export default function AddQuestionModalContent() {
  const {
    handleAddNewQuestion,
    handleCategory,
    handleContent,
    handleTitle,
    title,
    content,
    isPending,
  } = useAddQuestion();

  return (
    <form className={`${container} ${myStyle}`} onSubmit={handleAddNewQuestion}>
      <Input
        variant="underLine"
        value={title}
        placeholder="질문 제목을 입력해주세요!"
        onChange={handleTitle}
        className={titleInput}
      />
      <div className={radioWrapper}>
        <RadioInput category="frontend" text="프론트엔드" onChange={handleCategory} />
        <RadioInput category="backend" text="백엔드" onChange={handleCategory} />
      </div>

      <CodeMirror
        placeholder={'답변을 입력해주세요!'}
        className={myStyle}
        theme={myTheme}
        value={content}
        id="body"
        onChange={handleContent}
        height="100vh"
        basicSetup={{
          foldGutter: false,
          lineNumbers: false,
          highlightActiveLine: false,
          autocompletion: false,
        }}
        editable
        extensions={[
          markdown({
            base: markdownLanguage,
            codeLanguages: languages,
          }),
          customKeymap,
          EditorView.lineWrapping,
          javascript({ jsx: true, typescript: true }),
        ]}
      />
      <div className={buttonWrapper}>
        <Button variant="border" className={addQuestionButton} isPending={isPending} type="submit">
          질문 등록하기
        </Button>
      </div>
    </form>
  );
}
