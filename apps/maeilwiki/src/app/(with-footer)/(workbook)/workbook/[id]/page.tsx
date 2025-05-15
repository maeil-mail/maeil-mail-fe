import * as React from 'react';
import WorkbookDetailContent from '@/components/workbookDetail/WorkbookDetailContent';
import {
  workbookDetailPageContainer,
  workbookDetailPageWrapper,
} from '@/components/workbookDetail/workbookDetail.css';
import { getWorkbookDetail } from '@/components/workbookDetail/apis/getWorkbookDetail';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const workbook = await getWorkbookDetail(Number(id));

  return (
    <div className={workbookDetailPageContainer}>
      <div className={workbookDetailPageWrapper}>
        <WorkbookDetailContent workbook={workbook} />
      </div>
    </div>
  );
}
