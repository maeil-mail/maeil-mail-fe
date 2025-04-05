import * as React from 'react';

import {
  workbookCategoryError,
  workbookDifficultyError,
  workbookFields,
  workbookInfoForm,
  workbookInfoTitle,
  workbookTitleError,
} from './workbookInfoForm.css';

import { FieldUpdaters, WorkbookInfo } from '../hooks/useWorkbookInfo';
import TitleField from './TitleField';
import DifficultyField from './DifficultyField';
import CategoryField from './CategoryField';
import DetailField from './DetailField';
import { GetErrorMessage } from '../hooks/useWorkbookValidation';

export interface WorkbookInfoFormProps {
  workbookInfo: Partial<WorkbookInfo>;
  getErrorMessage: GetErrorMessage;
  fieldUpdaters: FieldUpdaters;
}

export default function WorkbookInfoForm({
  workbookInfo,
  getErrorMessage,
  fieldUpdaters,
}: WorkbookInfoFormProps) {
  const { title, difficulty, category, detail } = workbookInfo;

  return (
    <section>
      <h2 className={workbookInfoTitle}>문제집 정보</h2>
      <div className={workbookInfoForm}>
        <TitleField title={title} updateTitle={fieldUpdaters.title} />
        <div className={workbookTitleError}>{getErrorMessage('title')}</div>
        <div className={workbookFields}>
          <DifficultyField difficulty={difficulty} updateDifficulty={fieldUpdaters.difficulty} />
          <div className={workbookDifficultyError}>{getErrorMessage('difficulty')}</div>
          <CategoryField category={category} updateCategory={fieldUpdaters.category} />
          <div className={workbookCategoryError}>{getErrorMessage('category')}</div>
        </div>
        <DetailField detail={detail} updateDetail={fieldUpdaters.detail} />
      </div>
    </section>
  );
}
