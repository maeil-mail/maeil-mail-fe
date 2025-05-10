import * as React from 'react';
import SolveWorkbookPage from '@/components/solveWorkbook/Page';
import { getWorkbookDetail } from '@/components/workbookDetail/apis/getWorkbookDetail';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const data = await getWorkbookDetail(Number(id));

  return <SolveWorkbookPage workbookId={Number(id)} workbook={data} />;
}
