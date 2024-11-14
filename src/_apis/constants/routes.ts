const API_ROUTES = {
  post_subscribe: '/subscribe',
  verify_email: '/subscribe/verify/send',
  question: '/question',
  myQuestions: '/subscribe-question',
  post_new_question: '/admin/question',
  subscriberCount: '/statistics/subscribe',
  unsubscribe: '/unsubscribe',
  unsubscribeCompleted: '/unsubscribe/completed',
} as const;

export const pathGenerator = {
  myQuestions: (email: string) => `${API_ROUTES.myQuestions}?email=${email}`,
};

export default API_ROUTES;
