export const WIKI_CATEGORY = {
  backend: 'backend',
  frontend: 'frontend',
  etc: 'etc',
} as const;

export const WIKI_CATEGORY_KO = {
  [WIKI_CATEGORY.backend]: '백엔드',
  [WIKI_CATEGORY.frontend]: '프론트엔드',
  [WIKI_CATEGORY.etc]: '기타',
} as const;

export const WIKI_CATEGORY_TAB_OPTION = {
  ...WIKI_CATEGORY,
  all: 'all',
} as const;

export const WIKI_CATEGORY_TAB_OPTION_KO = {
  ...WIKI_CATEGORY_KO,
  all: '전체',
};
