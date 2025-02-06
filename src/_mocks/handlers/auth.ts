import API_ROUTES from '@/_apis/constants/routes';
import MOCK_MY_AUTH_INFO from './mockData/myAuthInfo.json';
import { http, HttpResponse } from 'msw';

export const authHandlers = [
  http.post(API_ROUTES.refresh, ({ cookies }) => {
    const isRefreshAlive = cookies.refreshToken === 'refreshToken';

    if (isRefreshAlive) {
      return HttpResponse.json(null, {
        status: 200,
        headers: {
          'Set-Cookie': [
            'accessToken=accessToken; Path=/; HttpOnly; Secure; SameSite=Lax',
            'refreshToken=refreshToken; Path=/; HttpOnly; Secure; SameSite=Lax',
          ].join(', '),
        },
      });
    } else {
      return HttpResponse.json(null, { status: 401 });
    }
  }),

  http.get(API_ROUTES.memberProfile, ({ cookies }) => {
    const isLoggedIn = cookies.accessToken === 'accessToken';

    if (isLoggedIn) {
      return HttpResponse.json(MOCK_MY_AUTH_INFO, {
        status: 200,
      });
    } else {
      return HttpResponse.json(null, {
        status: 401,
      });
    }
  }),

  http.post(API_ROUTES.member, () => {
    return HttpResponse.json(null, {
      status: 200,
      headers: {
        'Set-Cookie': [
          'accessToken=accessToken; Path=/; HttpOnly; Secure; SameSite=Lax',
          'refreshToken=refreshToken; Path=/; HttpOnly; Secure; SameSite=Lax',
        ].join(', '),
      },
    });
  }),
];
