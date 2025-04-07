import * as React from 'react';
import { workbookTitleInput } from './workbookInfoForm.css';

export interface TitleFieldProps {
  title?: string;
  updateTitle: (value: string) => void;
}

export default function TitleField({ title, updateTitle }: TitleFieldProps) {
  return (
    <div>
      <input
        className={workbookTitleInput}
        placeholder="문제집 제목을 입력해 주세요"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          updateTitle(e.target.value);
        }}
        value={title || ''}
      />
    </div>
  );
}
