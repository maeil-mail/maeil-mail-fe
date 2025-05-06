import {
  workbookQuestionOption,
  workbookQuestionOptionContent,
  workbookQuestionOptionIndex,
  workbookQuestionOptionList,
  WorkbookQuestionSection,
  workbookQuestionTitle,
} from './solveWorkbook.css';

interface WorkbookQuestionProps {
  index: number;
  question: {
    id: number;
    title: string;
    correctAnswerExplanation: string;
    options: {
      id: number;
      content: string;
      isCorrectAnswer: boolean;
    }[];
  };
}

export default function WorkbookQuestion({ index, question }: WorkbookQuestionProps) {
  const { id, title, options } = question;

  return (
    <section className={WorkbookQuestionSection}>
      <h2 className={workbookQuestionTitle}>
        {index + 1}. {title}
      </h2>
      <ol className={workbookQuestionOptionList}>
        {options.map(({ content, id: optionId }, optionIndex) => {
          return (
            <li className={workbookQuestionOption} key={`question-${id}-option-${optionId}`}>
              <div className={workbookQuestionOptionIndex({ isSelected: true })}>
                {optionIndex + 1}
              </div>
              <div className={workbookQuestionOptionContent({ isSelected: true })}>{content}</div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
