const API_ROUTES = {
  post_subscribe: '/subscribe',
  verify_email: '/subscribe/verify/send',
  post_new_question: '/admin/question',
  question: '/question',
  subscriberCount: '/statistics/subscribe',
} as const;

export default API_ROUTES;
