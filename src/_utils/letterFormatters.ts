export const abbreviateCategory = (category: string) => {
  switch (category) {
    case 'frontend':
      return 'FE';
    case 'backend':
      return 'BE';
    default:
      return undefined;
  }
};

export const convertIndexIntoDay = (index: number) => {
  switch (index) {
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    default:
      return undefined;
  }
};
