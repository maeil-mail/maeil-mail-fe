import type { CategoryEN, CategoryKO } from '@/_types';
import Dropdown from '../common/Dropdown/Dropdown';
import { myStyle } from '@/_styles/vars.css';
import { dropDownContainer, selected, menuWrapper, selectButton } from './categoryDropdown.css';
import { CATEGORY, REVERSE_CATEGORY } from '@/_constants/category';

interface CategoryDropdownProps {
  onItemSelect: (category: CategoryKO) => void;
  category: CategoryEN;
}

export default function CategoryDropdown({ onItemSelect, category }: CategoryDropdownProps) {
  return (
    <Dropdown onItemSelect={onItemSelect} className={`${myStyle} ${dropDownContainer}`}>
      <Dropdown.Toggle className={selected}>{REVERSE_CATEGORY[category]}</Dropdown.Toggle>
      <Dropdown.Menu className={`${myStyle} ${menuWrapper}`}>
        {Object.keys(CATEGORY).map((categoryKO) => (
          <Dropdown.MenuItem key={categoryKO} item={categoryKO} className={selectButton}>
            {categoryKO}
          </Dropdown.MenuItem>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
