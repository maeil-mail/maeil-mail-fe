import { type ChangeEvent, useState, FormEvent } from 'react';
import useCategory from '../useCategory';
import { useMutation } from '@tanstack/react-query';
import { postNewQuestion } from '@/_apis/api';
import { CategoryEN } from '@/_types';
import toast from '@/_utils/toast';
import { PROGRESS_MESSAGE, ERROR_MESSAGE } from '@/_constants/messages';

const useAddQuestion = () => {
  const { category, isValidCategory, handleCategory } = useCategory();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { mutate: addNewQuestionMutation, isPending } = useMutation({
    mutationFn: postNewQuestion,
    onSuccess: () => {
      toast.success(PROGRESS_MESSAGE.success_add_question);
    },
    onError: () => {
      toast.error(ERROR_MESSAGE.fail_add_question);
    },
  });

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: string) => {
    setContent(e);
  };

  const handleAddNewQuestion = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidCategory) {
      toast.error('유효하지 않은 카테고리에요!');
      return;
    }

    addNewQuestionMutation({ title, category: category as CategoryEN, content });
  };

  return {
    handleAddNewQuestion,
    handleCategory,
    handleContent,
    handleTitle,
    title,
    content,
    isPending,
  };
};

export default useAddQuestion;
