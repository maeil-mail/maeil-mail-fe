export const PROGRESS_MESSAGE = {
  success_add_question: '새로운 질문 둥록에 성공했어요!',
  success_subscription: '이메일 등록이 완료 되었어요!',
} as const;

export const ERROR_MESSAGE = {
  fail_add_question: '새로운 질문 둥록에 실패했어요!',
  fail_subscription: '이메일 등록에 실패했어요!',
  invalid_category: '카테고리를 올바르게 선택해주세요',
  invalid_email: '유효한 이메일을 입력해주세요.',
  not_defined_context: '컨텍스트가 정의되지 않았어요!',
  fail_verify_email: '인증번호를 보내는데에 실패했어요!',
} as const;
