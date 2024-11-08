import { getSubscriberCount } from '@/_apis/statistics';
import HomePage from '@/_pages/HomePage';

export default async function Home() {
  const count = await getSubscriberCount();

  return <HomePage count={count} />;
}
