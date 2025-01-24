'use client';

import React from 'react';
import WikiItem from './WikiItem';
import { wikiList } from './wikiList.css';
import { WikiListItem } from '../../_types/wiki';

interface WikiListProps {
  wikis: WikiListItem[];
  page: number;
}

export default function WikiList({ wikis, page }: WikiListProps) {
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
