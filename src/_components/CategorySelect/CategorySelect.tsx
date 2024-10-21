import { CATEGORY } from '@/_constants/category';
import { CategoryEN, CategoryKO } from '@/_types';
import { container, notSelected, selected, ball, button } from './categorySelect.css';
import { myStyle } from '@/_styles/vars.css';

interface CategorySelectProps {
  onClick: (category: CategoryKO) => void;
  category: CategoryEN;
}

export default function CategorySelect({ onClick, category }: CategorySelectProps) {
  return (
    <div className={`${container} ${myStyle}`}>
      {(Object.keys(CATEGORY) as CategoryKO[]).map((categoryKO) => {
        const isSelected = category === CATEGORY[categoryKO];
        return (
          <button
            key={categoryKO}
            onClick={() => onClick(categoryKO)}
            className={`${isSelected ? selected : notSelected} ${ball} ${button}`}
          >
            {categoryKO}
          </button>
        );
      })}
    </div>
  );
}
