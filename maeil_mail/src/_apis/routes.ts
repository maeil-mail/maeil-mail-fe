const API_ROUTES = {
  post_subscribe: '/subscribe',
  post_new_question: '/admin/question',
  question: '/question',
  verify_email: '/subscribe/verify/send',
} as const;

export default API_ROUTES;
