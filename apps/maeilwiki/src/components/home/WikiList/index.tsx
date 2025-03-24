'use client';

import React from 'react';
import Link from 'next/link';
import { WikiCategoryTabOption } from '@/common/types/wiki';
import Paginator from '@/common/components/Paginator';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';
import WikiItem from './WikiItem';
import { wikiList } from './wikiList.css';
import { useWikiList } from '../hooks/useWikiList';

interface WikiListProps {
  category: WikiCategoryTabOption;
  page: number;
}

export default function WikiList({ category, page }: WikiListProps) {
  const { data } = useWikiList({ category, page: page - 1 });

  const wikis = data.data;

  const onClickPaginator = () => {
    recordGAEvent(GA_EVENT.homeClickPaginator);
  };

  return (
    <>
      <ol className={wikiList}>
        {wikis.map((wiki) => (
          <Link key={wiki.id} href={`/wiki/${wiki.id}`}>
            <WikiItem wiki={wiki} />
          </Link>
        ))}
      </ol>
      <div onClick={onClickPaginator}>
        <Paginator currentPage={page} lastPage={data.totalPage} />
      </div>
    </>
  );
}
