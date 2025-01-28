'use client';

import React from 'react';
import WikiItem from './WikiItem';
import { wikiList } from './wikiList.css';
import { WikiListItem } from '../../_types/wiki';
import { useWikiList } from '../_hooks/useWikiList';
import { WikiCategoryTabOption } from '../../_types/wikiCategory';

interface WikiListProps {
  category: WikiCategoryTabOption;
  page: number;
}

export default function WikiList({ category, page }: WikiListProps) {
  const { data } = useWikiList({ category, page });

  const wikis = data.data;

  return (
    <ol className={wikiList}>
      {wikis.map((wiki, index) => {
        const pageOffset = (page - 1) * 8;
        const order = index + 1 + pageOffset;

        return <WikiItem key={wiki.id} wiki={wiki} order={order} />;
      })}
    </ol>
  );
}
