import * as React from 'react';
import { wikiItemSkeleton, wikiList } from './wikiList.css';

export interface WikiListSkeletonProps {}

export default function WikiListSkeleton(props: WikiListSkeletonProps) {
  return (
    <ul className={wikiList}>
      {Array.from({ length: 8 }).map((_, index) => (
        <li key={index} className={wikiItemSkeleton}></li>
      ))}
    </ul>
  );
}
