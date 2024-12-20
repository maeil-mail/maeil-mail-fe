'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DoubleArrowLeft from '@/_assets/icons/doubleArrowLeft.svg';
import DoubleArrowRight from '@/_assets/icons/doubleArrowRight.svg';
import { doubleArrowLeft, doubleArrowRight, pageNumber, paginatorContainer } from './paginator.css';
import usePagination from './usePagination';

export interface PaginatorProps {
  currentPage: number;
  lastPage: number;
}

const MIN_COUNT_FOR_PAGINATION = 2;

export default function Paginator({ currentPage, lastPage }: PaginatorProps) {
  const pathname = usePathname();

  const visiblePages = usePagination(currentPage, lastPage);

  const hasManyPages = visiblePages.length < lastPage;

  const isArrowLeftVisible = hasManyPages && currentPage !== 1;
  const isArrowRightVisible = hasManyPages && currentPage !== lastPage;

  if (lastPage < MIN_COUNT_FOR_PAGINATION) {
    return null;
  }

  return (
    <div className={paginatorContainer}>
      {isArrowLeftVisible && (
        <Link href={{ pathname, query: { page: 1 } }} scroll={false}>
          <DoubleArrowLeft className={doubleArrowLeft} />
        </Link>
      )}
      {visiblePages.map((page) => (
        <Link key={page} href={{ pathname, query: { page } }} scroll={false}>
          <p aria-current={page === currentPage} className={pageNumber}>
            {page}
          </p>
        </Link>
      ))}
      {isArrowRightVisible && (
        <Link href={{ pathname, query: { page: lastPage } }} scroll={false}>
          <DoubleArrowRight className={doubleArrowRight} />
        </Link>
      )}
    </div>
  );
}
