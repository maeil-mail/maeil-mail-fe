import { useState } from "react";
import { CategoryEN } from "@/_types";

const CATEGORIES = ["frontend", "backend"];

const isCategory = (value: any): value is CategoryEN => {
  return CATEGORIES.includes(value);
};

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryEN[]>([]);
  const isValidCategories = categories.length > 0 && categories.every(isCategory);

  const handleCategories = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (isCategory(value)) {
      setCategories((prevCategories) =>
        prevCategories.includes(value)
          ? prevCategories.filter((category) => category !== value)
          : [...prevCategories, value]
      );
    }
  };

  return { categories, isValidCategories, handleCategories };
};

export default useCategories;
