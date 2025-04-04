import * as React from 'react';
import { optionalText, textarea } from '../multipleChoice.css';
import { fieldLabel } from './workbookInfoForm.css';

export interface DetailFieldProps {
  detail?: string;
  updateDetail: (value: string) => void;
}

export default function DetailField({ detail, updateDetail }: DetailFieldProps) {
  return (
    <div>
      <label className={fieldLabel}>
        보충 설명 <span className={optionalText}>(선택)</span>
      </label>
      <textarea
        placeholder="문제집 설명이 필요할 경우 작성해 주세요."
        className={textarea}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
          updateDetail(e.target.value);
        }}
      >
        {detail}
      </textarea>
    </div>
  );
}
