import {
  multipleAnswerNoti,
  workbookQuestionOption,
  workbookQuestionOptionContent,
  workbookQuestionOptionIndex,
  workbookQuestionOptionList,
  WorkbookQuestionSection,
  workbookQuestionTitle,
} from './solveWorkbook.css';

interface WorkbookQuestionProps {
  index: number;
  userAnswer: Set<number>;
  toggleAnswer: (targetAnswer: number) => void;
  isMultipleAnswer: boolean;
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

export default function WorkbookQuestion({
  index,
  userAnswer,
  toggleAnswer,
  isMultipleAnswer,
  question,
}: WorkbookQuestionProps) {
  const { id, title, options } = question;

  const createOptionClickHandler = (targetAnswer: number) => () => {
    toggleAnswer(targetAnswer);
  };

  return (
    <section className={WorkbookQuestionSection}>
      <h2 className={workbookQuestionTitle}>
        <div>{index + 1}.</div>
        <div>
          {title} {isMultipleAnswer && <span className={multipleAnswerNoti}>(복수 정답)</span>}
        </div>
      </h2>
      <ol className={workbookQuestionOptionList}>
        {options.map(({ content, id: optionId }, optionIndex) => {
          return (
            <li
              className={workbookQuestionOption}
              key={`question-${id}-option-${optionId}`}
              onClick={createOptionClickHandler(optionIndex)}
            >
              <div
                className={workbookQuestionOptionIndex({ isSelected: userAnswer.has(optionIndex) })}
              >
                {optionIndex + 1}
              </div>
              <div
                className={workbookQuestionOptionContent({
                  isSelected: userAnswer.has(optionIndex),
                })}
              >
                {content}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
