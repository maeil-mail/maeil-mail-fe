'use client';

import { useRouter } from 'next/navigation';
import { backButton, pageNavContainer, pageNavWrapper, pageTitle } from './pageNav.css';
import BackIcon from '@/assets/back.svg';

export interface PageNavProps {
  title: string;
}

export default function PageNav({ title }: PageNavProps) {
  const route = useRouter();

  const onClickBack = () => {
    if (confirm('진행 중인 내역이 저장되지 않을 수 있습니다. 정말 뒤로가시겠습니까?')) {
      route.back();
    }
  };

  return (
    <nav className={pageNavContainer}>
      <div className={pageNavWrapper}>
        <button className={backButton} onClick={onClickBack}>
          <BackIcon />
        </button>
        <h1 className={pageTitle}>{title}</h1>
      </div>
    </nav>
  );
}
