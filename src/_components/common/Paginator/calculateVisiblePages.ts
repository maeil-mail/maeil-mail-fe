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

  const firstPage = currentPage - middleCount;

  if (firstPage < 1 || lastPage <= visibleCount) {
    return 1;
  }

  return Math.min(firstPage, lastPage - (visibleCount - 1));
}
