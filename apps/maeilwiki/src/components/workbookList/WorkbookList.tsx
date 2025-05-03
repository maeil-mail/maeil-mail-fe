import * as React from 'react';
import WorkbookItem from './WorkbookItem';
import { workBookItemWrapper, workbookListContainer } from './workbookList.css';
import { WikiCategoryTabOption } from '@/common/types/wiki';
import Link from 'next/link';
import { useWorkbookList } from './hooks/useWorkbookList';
import Paginator from '@/common/components/Paginator';

export interface WorkbookListProps {
  category: WikiCategoryTabOption;
  page: number;
}

export default function WorkbookList({ category, page }: WorkbookListProps) {
  const { data } = useWorkbookList(category, page);

  const { data: workbookList, totalPage } = data;

  return (
    <div>
      <ol className={workbookListContainer}>
        {workbookList.map((workbook) => (
          <li className={workBookItemWrapper} key={workbook.id}>
            <Link href={`workbook/${workbook.id}`}>
              <WorkbookItem workbook={workbook} />
            </Link>
          </li>
        ))}
      </ol>
      <Paginator currentPage={page} lastPage={totalPage} />
    </div>
  );
}
