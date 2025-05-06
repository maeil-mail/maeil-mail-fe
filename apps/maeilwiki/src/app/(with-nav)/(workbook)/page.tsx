'use client';

import * as React from 'react';
import { Suspense } from 'react';
import HeroBanner from '@/common/components/HeroBanner';
import CategoryFilterTabBar from '@/common/components/CategoryFilterTabBar';
import WorkbookList from '@/components/workbookList/WorkbookList';
import WorkbookListSkeleton from '@/components/workbookList/WorkbookListSkeleton';
import { workbookListPageContainer } from '@/components/workbookList/workbookList.css';
import { useWikiParams } from '@/components/home/hooks/useWikiParams';

export default function Page() {
  return (
    <Suspense>
      <WorkbookListPage />
    </Suspense>
  );
}

function WorkbookListPage() {
  const { category, page } = useWikiParams();

  return (
    <div>
      <HeroBanner subtitle="객관식 문제를 풀고 놓친 개념을 점검해 보세요!" />
      <div className={workbookListPageContainer}>
        <CategoryFilterTabBar selectedOption={category} />
        <Suspense fallback={<WorkbookListSkeleton />}>
          <WorkbookList category={category} page={page} />
        </Suspense>
      </div>
    </div>
  );
}
