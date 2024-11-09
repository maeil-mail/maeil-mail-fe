import { getSubscriberCount } from '@/_apis/statistics';
import HomePage from '@/_pages/HomePage';

export default async function Home() {
  const subscriberCount = await getSubscriberCount();

  return <HomePage subscriberCount={subscriberCount} />;
}
