export function abbreviateCategory(category: string) {
  switch (category) {
    case 'frontend':
      return 'FE';
    case 'backend':
      return 'BE';
    default:
      return undefined;
  }
}
