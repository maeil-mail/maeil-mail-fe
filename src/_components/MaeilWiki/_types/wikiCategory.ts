import { WIKI_CATEGORY, WIKI_CATEGORY_TAB_OPTION } from '../_constants/wikiCategory';

export type WikiCategory = keyof typeof WIKI_CATEGORY;

export type WikiCategoryTabOption = keyof typeof WIKI_CATEGORY_TAB_OPTION;
