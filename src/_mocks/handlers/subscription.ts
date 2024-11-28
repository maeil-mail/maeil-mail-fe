import API_ROUTES from '@/_apis/constants/routes';
import { http, HttpResponse } from 'msw';

export const subscriptionHandlers = [
  http.post(API_ROUTES.subscribe, () => {
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
