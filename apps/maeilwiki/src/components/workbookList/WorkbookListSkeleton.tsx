import * as React from 'react';
import {
  workbookItemSkeletonContainer,
  workBookItemWrapper,
  workbookListContainer,
} from './workbookList.css';

const ITEM_COUNT = 12;

export default function WorkbookListSkeleton() {
  return (
    <ul className={workbookListContainer}>
      {Array.from({ length: ITEM_COUNT }).map((_, index) => (
        <li className={workBookItemWrapper} key={`workbook-list-item-skeleton-${index}`}>
          <div className={workbookItemSkeletonContainer}></div>
        </li>
      ))}
    </ul>
  );
}
