import * as React from 'react';

import { workbookFields, workbookInfoForm, workbookInfoTitle } from './workbookInfoForm.css';

import { FieldUpdaters, WorkbookInfo } from '../hooks/useWorkbookInfo';
import TitleField from './TitleField';
import DifficultyField from './DifficultyField';
import CategoryField from './CategoryField';
import DetailField from './DetailField';

export interface WorkbookInfoFormProps {
  workbookInfo: Partial<WorkbookInfo>;
  fieldUpdaters: FieldUpdaters;
}

export default function WorkbookInfoForm({ workbookInfo, fieldUpdaters }: WorkbookInfoFormProps) {
  const { title, difficulty, category, detail } = workbookInfo;

  return (
    <section>
      <h2 className={workbookInfoTitle}>문제집 정보</h2>
      <div className={workbookInfoForm}>
        <TitleField title={title} updateTitle={fieldUpdaters.title} />
        <div className={workbookFields}>
          <DifficultyField difficulty={difficulty} updateDifficulty={fieldUpdaters.difficulty} />
          <CategoryField category={category} updateCategory={fieldUpdaters.category} />
        </div>
        <DetailField detail={detail} updateDetail={fieldUpdaters.detail} />
      </div>
    </section>
  );
}
