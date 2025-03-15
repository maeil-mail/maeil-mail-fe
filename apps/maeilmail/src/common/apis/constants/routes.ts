import { QuestionCategoryEN } from '@/common/types/question';

export const API_ROUTES = {
  subscribe: '/subscribe',
  verify_email: '/subscribe/verify/send',
  mailFrequency: '/subscribe/email-frequency',
  myQuestions: '/subscribe-question',
  myWeeklyQuestions: '/subscribe-question/weekly',
  question: '/question',
  adminQuestion: '/admin/question',
  subscriberCount: '/statistics/subscribe',
  wiki: '/wiki',
  member: '/member',
  memberProfile: '/member/profile',
  refresh: '/member/refresh',
} as const;

export const pathGenerator = {
  myQuestions: (email: string, page: number, category: QuestionCategoryEN) =>
    `${API_ROUTES.myQuestions}?size=8&email=${email}&page=${page}&category=${category}`,
  myMailFrequency: (email: string) => `${API_ROUTES.mailFrequency}?email=${email}`,
  myWeeklyQuestions: (
    email: string,
    category: string,
    period: {
      year: number;
      month: number;
      week: number;
    },
  ) =>
    `${API_ROUTES.myWeeklyQuestions}?email=${email}&category=${category}&year=${period.year}&month=${period.month}&week=${period.week}`,
};
