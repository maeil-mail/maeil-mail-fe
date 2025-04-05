import React from 'react';
import { MultipleChoice } from '../QuestionList';

export type UpdateQuestion = <K extends keyof MultipleChoice>(
  index: number,
  key: K,
  value: MultipleChoice[K],
) => void;

export const useMultipleChoiceQuestions = () => {
  const [questions, setQuestions] = React.useState<MultipleChoice[]>([initializeQuestion()]);

  const addQuestion = () => {
    setQuestions([...questions, initializeQuestion()]);
  };

  const updateQuestion: UpdateQuestion = (index, key, value) => {
    const updated = questions.map((item, i) => (i === index ? { ...item, [key]: value } : item));

    setQuestions(updated);
  };

  const removeQuestion = (index: number) => {
    if (index === 0 && questions.length === 1) {
      return alert('최소 한 개의 문제가 존재해야 합니다.');
    }

    setQuestions(questions.filter((_, i) => i !== index));
  };

  return { questions, addQuestion, updateQuestion, removeQuestion };
};

function initializeQuestion(): MultipleChoice {
  return {
    title: '',
    correctAnswerExplanation: '',
    options: [
      { content: '', isCorrectAnswer: false },
      { content: '', isCorrectAnswer: false },
      { content: '', isCorrectAnswer: false },
      { content: '', isCorrectAnswer: false },
    ],
  };
}
