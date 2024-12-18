import API_ROUTES from '@/_apis/constants/routes';
import { http, HttpResponse } from 'msw';

interface SubscriptionBody {
  email: string;
  frequency: 'daily' | 'weekly';
  category: string[];
  code: string;
}

export const subscriptionHandlers = [
  http.post(API_ROUTES.subscribe, async ({ request }) => {
    const body = (await request.json()) as SubscriptionBody;

    if (!body) {
      return HttpResponse.json(null, {
        status: 400,
      });
    }

    const { email, frequency, category, code } = body;

    const isCompleted = email && frequency && category && code;
    const CORRECT_CODE = '1234';
    const isValidCode = code === CORRECT_CODE;

    if (!isCompleted || !isValidCode) {
      return HttpResponse.json(null, {
        status: 400,
      });
    }

    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.get(API_ROUTES.mailFrequency, () => {
    return HttpResponse.json(
      {
        frequency: 'weekly',
      },
      {
        status: 200,
      },
    );
  }),
  http.patch(API_ROUTES.mailFrequency, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.post(API_ROUTES.verify_email, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.get(API_ROUTES.subscriberCount, () => {
    return HttpResponse.json(
      {
        cumulativeCount: 100_000,
      },
      {
        status: 200,
      },
    );
  }),
];
