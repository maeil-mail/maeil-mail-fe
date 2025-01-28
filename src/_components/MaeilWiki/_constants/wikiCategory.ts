export const WIKI_CATEGORY = {
  frontend: 'frontend',
  backend: 'backend',
  etc: 'etc',
} as const;

const WIKI_CATEGORY_KO = {
  [WIKI_CATEGORY.frontend]: '프론트엔드',
  [WIKI_CATEGORY.backend]: '백엔드',
  [WIKI_CATEGORY.etc]: '기타',
};

export const WIKI_CATEGORY_TAB_OPTION = {
  ...WIKI_CATEGORY,
  all: 'all',
} as const;

export const WIKI_CATEGORY_TAB_OPTION_KO = {
  ...WIKI_CATEGORY_KO,
  all: '전체',
};
