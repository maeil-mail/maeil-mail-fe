import API_ROUTES from '@/_apis/constants/routes';
import { http, HttpResponse } from 'msw';
import MOCK_QUESTIONS from './mockData/questions.json';
import MOCK_MY_QUESTIONS from './mockData/myQuestions.json';

export const questionHandlers = [
  http.post(API_ROUTES.post_new_question, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),

  http.get(API_ROUTES.question, ({ request }) => {
    const url = new URL(request.url);
    const category = url.searchParams.get('category');

    let filteredQuestions;

    if (!category || category === 'all') {
      filteredQuestions = MOCK_QUESTIONS;
    } else {
      filteredQuestions = MOCK_QUESTIONS.filter((question) => question.category === category);
    }

    if (filteredQuestions.length > 0) {
      return HttpResponse.json(filteredQuestions, {
        status: 200,
      });
    } else {
      return HttpResponse.json(
        { error: 'Mock 데이터에서 해당 질문을 찾을 수 없어요!' },
        {
          status: 404,
        },
      );
    }
  }),

  http.get(API_ROUTES.myQuestions, () => {
    return HttpResponse.json(MOCK_MY_QUESTIONS, {
      status: 200,
    });
  }),

  http.get(`${API_ROUTES.question}/:id`, ({ params }) => {
    const { id } = params;
    const question = MOCK_QUESTIONS.find((question) => question.id === Number(id));

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
