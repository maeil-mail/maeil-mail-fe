import * as React from 'react';
import { getAuthParams } from '@/components/setting/utils/getAuthParams';
import { SearchParams } from '@/common/types/http';
import { getMailFrequency } from '@/components/setting/apis/getMailFrequency';
import Setting from '@/components/setting/Page';

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: PageProps) {
  const { email, token } = getAuthParams(await searchParams);

  const { frequency } = await getMailFrequency(email);

  return <Setting email={email} token={token} currentMailFrequency={frequency} />;
}
