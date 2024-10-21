import API_ROUTES from '@/_apis/routes';
import { http, HttpResponse } from 'msw';
import BASE_URL from '@/_apis/baseUrl';
import ALL_QUESTIONS from './allQuestions.json';

export const handlers = [
  http.post(`${BASE_URL}${API_ROUTES.post_subscribe}`, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.post(`${BASE_URL}${API_ROUTES.post_new_question}`, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.post(`${BASE_URL}${API_ROUTES.verify_email}`, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.get(`${BASE_URL}${API_ROUTES.question}`, ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');

    let filteredQuestions;

    if (!category || category === 'all') {
      filteredQuestions = ALL_QUESTIONS;
    } else {
      filteredQuestions = ALL_QUESTIONS.filter((q) => q.category === category);
    }

    if (filteredQuestions.length > 0) {
      return HttpResponse.json(filteredQuestions, {
        status: 200,
      });
    } else {
      return HttpResponse.json(
        { error: '질문을 찾을 수 없어요!' },
        {
          status: 404,
        },
      );
    }
  }),
  http.get(`${BASE_URL}${API_ROUTES.question}/:id`, ({ params }) => {
    const { id } = params;
    const question = ALL_QUESTIONS.find((question) => question.id === Number(id));

    if (question) {
      return HttpResponse.json(question, {
        status: 200,
      });
    } else {
      return HttpResponse.json(
        { error: '질문을 찾을 수 없어요!' },
        {
          status: 404,
        },
      );
    }
  }),
];
