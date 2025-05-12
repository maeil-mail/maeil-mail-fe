import { WorkbookQuestion, WorkbookQuestionOption } from '../workbookDetail/apis/getWorkbookDetail';
import { isCorrectAnswer } from './utils/isCorrectAnswer';
import {
  answerExplanationContainer,
  answerExplanationContent,
  answerExplanationTitle,
  workbookQuestionOption,
  workbookQuestionOptionContent,
  workbookQuestionOptionIndex,
  workbookQuestionOptionList,
  workbookResultItem,
  workbookResultItemContent,
  workbookResultItemQuestion,
  workbookResultItemTitle,
  workbookResultMark,
} from './workbookResult.css';

import WrongMark from '@/assets/wrongMark.svg';
import CorrectMark from '@/assets/correctMark.svg';

interface WorkbookResultItemProps {
  question: WorkbookQuestion;
  index: number;
  userChoices?: Set<number>;
}

export default function WorkbookResultItem({
  question,
  index,
  userChoices = new Set(),
}: WorkbookResultItemProps) {
  const { title, options, correctAnswerExplanation } = question;

  const isCorrect = isCorrectAnswer(options, userChoices);

  return (
    <li className={workbookResultItem}>
      <div className={workbookResultItemTitle({ isCorrect })}>
        <span>문제 {index + 1}.</span>{' '}
        {isCorrect ? (
          <CorrectMark className={workbookResultMark} />
        ) : (
          <WrongMark className={workbookResultMark} />
        )}
      </div>
      <div className={workbookResultItemContent}>
        <div className={workbookResultItemQuestion}>{title}</div>
        <WorkbookOptionList options={options} userChoices={userChoices} />
        {correctAnswerExplanation && (
          <div className={answerExplanationContainer}>
            <div className={answerExplanationTitle}>정답 해설</div>
            <div className={answerExplanationContent}>{correctAnswerExplanation}</div>
          </div>
        )}
      </div>
    </li>
  );
}

interface WorkbookOptionListProps {
  options: WorkbookQuestionOption[];
  userChoices: Set<number>;
}

function WorkbookOptionList({ options, userChoices }: WorkbookOptionListProps) {
  return (
    <ol className={workbookQuestionOptionList}>
      {options.map(({ id, content, isCorrectAnswer }, index) => {
        const isWrong = userChoices.has(index) && !isCorrectAnswer;

        return (
          <li className={workbookQuestionOption} key={`option-${id}`}>
            <span className={workbookQuestionOptionIndex({ isSelected: isCorrectAnswer })}>
              {index + 1}
            </span>
            <span
              className={workbookQuestionOptionContent({
                isSelected: isCorrectAnswer,
                isWrong,
              })}
            >
              {content}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
