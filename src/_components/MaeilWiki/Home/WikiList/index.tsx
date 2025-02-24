'use client';

import React from 'react';
import WikiItem from './WikiItem';
import { wikiList } from './wikiList.css';
import { useWikiList } from '../_hooks/useWikiList';
import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import Paginator from '@/_components/common/Paginator';
import Link from 'next/link';
import recordGAEvent from '@/_utils/recordGAEvent';
import { GA_EVENT } from '../../_constants/GA_EVENT';

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
