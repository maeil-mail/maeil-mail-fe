import { getSubscriberCount } from '@/_apis/statistics';
import HomePage from '@/_components/Home';

export default async function Page() {
  const subscriberCount = await getSubscriberCount();

  return <HomePage subscriberCount={subscriberCount} />;
}
