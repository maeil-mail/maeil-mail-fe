export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;

  return email.trim() !== "" && emailRegex.test(email) && !koreanRegex.test(email);
};

export default validateEmail;
