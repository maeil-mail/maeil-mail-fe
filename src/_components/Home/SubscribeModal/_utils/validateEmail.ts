const MAX_EMAIL_LENGTH = 254;

export const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^(?!.*\.\.)(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;

  const unicodeRegex = /^[\x00-\x7F]+$/;

  const isValidLength = email.length <= MAX_EMAIL_LENGTH;

  return (
    email.trim() !== "" &&
    emailRegex.test(email) &&
    !koreanRegex.test(email) &&
    unicodeRegex.test(email) &&
    isValidLength
  );
};

export default validateEmail;
