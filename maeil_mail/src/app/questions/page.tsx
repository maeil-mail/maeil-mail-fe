'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AllQuestion from '@/_pages/AllQuestionPage';

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
  },
});

export default function AllQuestionPage() {
  return (
    <QueryClientProvider client={client}>
      <AllQuestion />
    </QueryClientProvider>
  );
}
