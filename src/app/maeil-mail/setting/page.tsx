import getAuthParams from '@/_utils/getAuthParams';
import { SearchParams } from '@/_types';
import * as React from 'react';
import Setting from '../../../_components/Setting';
import { getMailFrequency } from '@/_apis/subscription';

interface PageProps {
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: PageProps) {
  const { email, token } = getAuthParams(await searchParams);

  const { frequency } = await getMailFrequency(email);

  return <Setting email={email} token={token} currentMailFrequency={frequency} />;
}
