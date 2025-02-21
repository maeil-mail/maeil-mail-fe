'use client';

import React from 'react';
import WikiItem from './WikiItem';
import { wikiList } from './wikiList.css';
import { useWikiList } from '../_hooks/useWikiList';
import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import Paginator from '@/_components/common/Paginator';
import Link from 'next/link';

interface WikiListProps {
  category: WikiCategoryTabOption;
  page: number;
}

export default function WikiList({ category, page }: WikiListProps) {
  const { data } = useWikiList({ category, page: page - 1 });

  const wikis = data.data;

  return (
    <>
      <ol className={wikiList}>
        {wikis.map((wiki) => (
          <Link key={wiki.id} href={`/wiki/${wiki.id}`}>
            <WikiItem wiki={wiki} />
          </Link>
        ))}
      </ol>
      <Paginator currentPage={page} lastPage={data.totalPage} />
    </>
  );
}
