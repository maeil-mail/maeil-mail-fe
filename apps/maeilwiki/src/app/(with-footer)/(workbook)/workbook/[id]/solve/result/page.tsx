import * as React from 'react';
import WorkbookResultPage from '@/components/workbookResult/Page';
import { getWorkbookDetail } from '@/components/workbookDetail/apis/getWorkbookDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const workbook = await getWorkbookDetail(Number(id));

  return (
    <React.Suspense>
      <WorkbookResultPage id={Number(id)} workbook={workbook} />
    </React.Suspense>
  );
}
