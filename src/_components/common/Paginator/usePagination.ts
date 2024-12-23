'use client';

import useDeviceWidth from '@/_hooks/useDeviceWidth';
import calculateVisiblePages from './calculateVisiblePages';

const VISIBLE_PAGE_COUNT_FOR_NARROW = 6;
const VISIBLE_PAGE_COUNT = 9;

const NARROW_WIDTH_THRESHOLD = 530;

const usePagination = (currentPage: number, lastPage: number): number[] => {
  const width = useDeviceWidth();

  const isNarrowDevice = width && width < NARROW_WIDTH_THRESHOLD;

  const visiblePageCount = isNarrowDevice ? VISIBLE_PAGE_COUNT_FOR_NARROW : VISIBLE_PAGE_COUNT;

  const visiblePages = calculateVisiblePages(currentPage, lastPage, visiblePageCount);

  return visiblePages;
};

export default usePagination;
