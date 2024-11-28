import getAuthParams from '@/_utils/getAuthParams';
import { SearchParams } from '@/_types';
import * as React from 'react';
import Setting from '../../_components/Setting';
import { getMailFrequency } from '@/_apis/subscription';

export interface SettingPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function SettingPage({ searchParams }: SettingPageProps) {
  const { email, token } = getAuthParams(await searchParams);

  const { frequency } = await getMailFrequency(email);

  // [x] input과 label 추가
  // [x] query string의 이메일과 토큰 받기
  // [x] 상태로 모든 payload 관리
  // [x] msw 로직 작성하기
  // [x] api로 백엔드 요청 로직 작섵
  // 스타일링
  // 리팩토링

  return <Setting email={email} token={token} currentMailFrequency={frequency} />;
}
