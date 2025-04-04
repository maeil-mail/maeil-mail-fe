import * as React from 'react';
import { categorySelect, defaultOption, fieldLabel } from './workbookInfoForm.css';
import { Category } from '../hooks/useWorkbookInfo';

export interface CategoryFieldProps {
  category?: Category;
  updateCategory: (v: string) => void;
}

export default function CategoryField({ category, updateCategory }: CategoryFieldProps) {
  return (
    <div>
      <label className={fieldLabel}>카테고리</label>
      <select
        name="category"
        className={categorySelect({ isFilled: !!category })}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          updateCategory(e.target.value);
        }}
        value={category || ''}
      >
        <option value="" className={defaultOption}>
          필수 선택
        </option>
        <option value="backend">백엔드</option>
        <option value="frontend">프론트엔드</option>
        <option value="etc">기타</option>
      </select>
    </div>
  );
}
