import API_ROUTES from '@/_apis/constants/routes';
import MOCK_WIKIS from './mockData/wikis.json';
import { http, HttpResponse } from 'msw';

export const wikiHandlers = [
  http.get(API_ROUTES.wiki, () => {
    return HttpResponse.json(MOCK_WIKIS, {
      status: 200,
    });
  }),

  http.post(API_ROUTES.wiki, ({ cookies }) => {
    const isLoggedIn = cookies.access === 'access';

    if (isLoggedIn) {
      return HttpResponse.json(null, {
        status: 201,
      });
    } else {
      return HttpResponse.json(null, {
        status: 401,
      });
    }
  }),
];
