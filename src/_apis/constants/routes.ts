const API_ROUTES = {
  subscribe: '/subscribe',
  verify_email: '/subscribe/verify/send',
  mailFrequency: '/subscribe/email-frequency',
  myQuestions: '/subscribe-question',
  question: '/question',
  post_new_question: '/admin/question',
  subscriberCount: '/statistics/subscribe',
} as const;

export const pathGenerator = {
  myQuestions: (email: string) => `${API_ROUTES.myQuestions}?email=${email}`,
  myMailFrequency: (email: string) => `${API_ROUTES.mailFrequency}?email=${email}`,
};

export default API_ROUTES;
