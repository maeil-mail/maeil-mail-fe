import API_ROUTES from '@/_apis/constants/routes';
import { http, HttpResponse } from 'msw';

export const subscriptionHandlers = [
  http.post(API_ROUTES.post_subscribe, () => {
    console.log('handle subscribe');
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.post(API_ROUTES.verify_email, () => {
    console.log('handle verify email');
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
