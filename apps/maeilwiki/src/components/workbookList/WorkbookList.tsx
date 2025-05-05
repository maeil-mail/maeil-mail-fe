import * as React from 'react';
import Link from 'next/link';
import WorkbookItem from './WorkbookItem';
import Paginator from '@/common/components/Paginator';
import { useWorkbookList } from './hooks/useWorkbookList';
import { workBookItemWrapper, workbookListContainer } from './workbookList.css';
import { WikiCategoryTabOption } from '@/common/types/wiki';

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
            <Link
              scroll={false}
              href={{
                pathname: `workbook/${workbook.id}`,
                query: { category, page },
              }}
            >
              <WorkbookItem workbook={workbook} />
            </Link>
          </li>
        ))}
      </ol>
      <Paginator currentPage={page} lastPage={totalPage} />
    </div>
  );
}
