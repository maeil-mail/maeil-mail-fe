import { getSubscriberCount } from '@/common/apis/statistics';
import HomePage from '@/pages/home/Page';

export default async function Page() {
  const subscriberCount = await getSubscriberCount();

  return <HomePage subscriberCount={subscriberCount} />;
}
