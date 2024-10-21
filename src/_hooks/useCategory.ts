import { useState } from 'react';
import { CategoryEN } from '@/_types';

const isCategory = (value: any): value is CategoryEN => {
  return value === 'frontend' || value === 'backend';
};

const useCategory = () => {
  const [category, setCategory] = useState<CategoryEN | ''>('');
  const isValidCategory = category !== '';

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isCategory(value)) {
      setCategory(value);
    }
  };

  return { category, isValidCategory, handleCategory };
};

export default useCategory;
