import * as React from 'react';

import DifficultyIndicator from './DifficultyIndicator';
import { WIKI_CATEGORY_KO } from '@/common/constants/wikiCategory';
import {
  workbookItemBottom,
  workbookItemCategoryTag,
  workbookItemContainer,
  workbookItemDetail,
  workbookItemMiddle,
  workbookItemTitle,
  workbookItemTop,
} from './workbookList.css';
import { WorkbookListItem } from './apis/getWorkbookList';
import { calculateElapsedTime } from '@/common/utils/calculateElapsedTime';

export interface WorkbookItemProps {
  workbook: WorkbookListItem;
}

export default function WorkbookItem({ workbook }: WorkbookItemProps) {
  const {
    id,
    category,
    difficultyLevel,
    workbookTitle,
    workbookDetail,
    owner,
    createdAt,
    questionCount,
  } = workbook;

  return (
    <div key={id} className={workbookItemContainer}>
      <div className={workbookItemTop}>
        <p className={workbookItemCategoryTag({ category })}>{WIKI_CATEGORY_KO[category]}</p>
        <DifficultyIndicator difficulty={difficultyLevel} />
      </div>
      <div className={workbookItemMiddle}>
        <p className={workbookItemTitle}>{workbookTitle}</p>
        <p className={workbookItemDetail}>{workbookDetail}</p>
      </div>
      <div className={workbookItemBottom}>
        <p>{owner.name}</p>&nbsp;|&nbsp;
        <p suppressHydrationWarning>{calculateElapsedTime(createdAt)}</p>&nbsp;|&nbsp;
        <p>{questionCount}문제</p>
      </div>
    </div>
  );
}
