export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;

  return email.trim() !== '' && emailRegex.test(email) && !koreanRegex.test(email);
};

export default validateEmail;
