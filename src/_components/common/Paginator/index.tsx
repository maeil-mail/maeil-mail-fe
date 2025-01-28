'use client';

import DoubleArrowLeft from '@/_assets/icons/doubleArrowLeft.svg';
import DoubleArrowRight from '@/_assets/icons/doubleArrowRight.svg';
import { doubleArrowLeft, doubleArrowRight, pageNumber, paginatorContainer } from './paginator.css';
import usePagination from './_hooks/usePagination';
import QueryLink from '../QueryLink';

export interface PaginatorProps {
  currentPage: number;
  lastPage: number;
}

const MIN_COUNT_FOR_PAGINATION = 2;

export default function Paginator({ currentPage, lastPage }: PaginatorProps) {
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
        <QueryLink appendedQuery={{ page: 1 }}>
          <DoubleArrowLeft className={doubleArrowLeft} />
        </QueryLink>
      )}
      {visiblePages.map((page) => (
        <QueryLink key={page} appendedQuery={{ page }}>
          <p aria-current={page === currentPage} className={pageNumber}>
            {page}
          </p>
        </QueryLink>
      ))}
      {isArrowRightVisible && (
        <QueryLink appendedQuery={{ page: lastPage }}>
          <DoubleArrowRight className={doubleArrowRight} />
        </QueryLink>
      )}
    </div>
  );
}
