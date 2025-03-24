import * as React from 'react';
import { wikiItemSkeleton, wikiList } from './wikiList.css';

export default function WikiListSkeleton() {
  return (
    <ul className={wikiList}>
      {Array.from({ length: 8 }).map((_, index) => (
        <li key={index} className={wikiItemSkeleton}></li>
      ))}
    </ul>
  );
}
