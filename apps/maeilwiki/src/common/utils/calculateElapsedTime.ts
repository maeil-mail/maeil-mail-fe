export const calculateElapsedTime = (date: string): string => {
  const start = new Date(date);
  const end = new Date();

  const seconds = Math.floor((end.getTime() - start.getTime()) / 1_000);

  const currentYear = end.getFullYear();
  const startYear = start.getFullYear();

  if (currentYear !== startYear) {
    return start.toLocaleDateString();
  }

  if (seconds < 60) {
    return '방금';
  }

  const minutes = seconds / 60;
  if (minutes < 60) {
    return `${Math.floor(minutes)}분 전`;
  }

  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  }

  const days = hours / 24;
  if (days < 7) {
    return `${Math.floor(days)}일 전`;
  }

  const month = String(start.getMonth() + 1).padStart(2, '0');
  const day = String(start.getDate()).padStart(2, '0');

  return `${month}/${day}`;
};
