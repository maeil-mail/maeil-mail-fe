import * as React from 'react';
import WorkbookDetailContent from '@/components/workbookDetail/WorkbookDetailContent';
import {
  workbookDetailPageContainer,
  workbookDetailPageWrapper,
} from '@/components/workbookDetail/workbookDetail.css';

export default function Page() {
  return (
    <div className={workbookDetailPageContainer}>
      <div className={workbookDetailPageWrapper}>
        <WorkbookDetailContent />
      </div>
    </div>
  );
}
