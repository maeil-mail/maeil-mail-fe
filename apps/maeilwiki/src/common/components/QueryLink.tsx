'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { ParsedUrlQueryInput } from 'querystring';
import { PropsWithChildren } from 'react';

interface QueryLinkProps {
  appendedQuery?: ParsedUrlQueryInput;
  scroll?: boolean;
}

export default function QueryLink({
  appendedQuery,
  scroll = false,
  children,
}: PropsWithChildren<QueryLinkProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = convertEntriesIntoObject([...(searchParams?.entries() || [])]);

  return (
    <Link href={{ pathname, query: { ...query, ...appendedQuery } }} scroll={scroll}>
      {children}
    </Link>
  );
}

function convertEntriesIntoObject(entries: [string, string][]) {
  const object = entries.reduce((query, entry) => {
    const [key, value] = entry;
    return {
      ...query,
      [key]: value,
    };
  }, {});

  return object;
}
