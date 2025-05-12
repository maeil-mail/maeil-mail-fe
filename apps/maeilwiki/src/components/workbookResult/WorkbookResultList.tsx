import { WorkbookAnswer } from '../solveWorkbook/store/workbookAnswer';
import { WorkbookQuestion } from '../workbookDetail/apis/getWorkbookDetail';
import { workbookResultList } from './workbookResult.css';
import WorkbookResultItem from './WorkbookResultItem';

interface WorkbookResultListProps {
  questions: WorkbookQuestion[];
  userAnswer: WorkbookAnswer;
}

export default function WorkbookResultList({ questions, userAnswer }: WorkbookResultListProps) {
  return (
    <ol className={workbookResultList}>
      {questions.map((question, index) => {
        return (
          <WorkbookResultItem
            key={`question-${question.id}`}
            index={index}
            question={question}
            userChoices={userAnswer.get(index)}
          />
        );
      })}
    </ol>
  );
}
