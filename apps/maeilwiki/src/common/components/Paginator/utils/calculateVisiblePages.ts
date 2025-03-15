const calculateVisiblePages = (
  currentPage: number,
  lastPage: number,
  visibleCount: number,
): number[] => {
  const firstPage = calculateFirstPage(currentPage, lastPage, visibleCount);

  const length = Math.min(lastPage, visibleCount);

  const visiblePages = Array.from({ length }).map((_, index) => firstPage + index);

  return visiblePages;
};

export default calculateVisiblePages;

function calculateFirstPage(currentPage: number, lastPage: number, visibleCount: number): number {
  const middleCount = Math.floor(visibleCount / 2);

  const firstPage = Math.max(currentPage - middleCount, 1);

  const firstPageMaxLimit = Math.max(lastPage - (visibleCount - 1), 1);

  return Math.min(firstPage, firstPageMaxLimit);
}
