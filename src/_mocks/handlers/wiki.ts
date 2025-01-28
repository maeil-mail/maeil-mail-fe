import API_ROUTES from '@/_apis/constants/routes';
import MOCK_WIKIS from './mockData/wikis.json';
import { http, HttpResponse } from 'msw';

export const wikiHandlers = [
  http.get(API_ROUTES.wiki, () => {
    return HttpResponse.json(MOCK_WIKIS, {
      status: 200,
    });
  }),
];
