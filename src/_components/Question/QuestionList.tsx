import type { Question } from '@/_types';
import QuestionItem from './QuestionItem';
import { ulContainer } from './question.css';

interface QuestionListProps {
  questionList: Question[];
}

export default function QuestionList({ questionList }: QuestionListProps) {
  return (
    <ul className={ulContainer}>
      {questionList.map((question) => {
        return (
          <QuestionItem
            key={question.id}
            category={question.category}
            id={question.id}
            title={question.title}
          />
        );
      })}
    </ul>
  );
}
