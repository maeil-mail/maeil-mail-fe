export const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^[a-zA-Z0-9][a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]*[a-zA-Z0-9]@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const invalidCharsRegex =
    /[ㄱ-ㅎㅏ-ㅣ가-힣\u{1F600}-\u{1F64F}\u{2600}-\u{26FF}]/u;

  const consecutiveSpecialCharsRegex = /[!#$%&'*+/=?^_`{|}~-]{2,}/;

  const trimmedEmail = email.trim().toLowerCase();

  if (trimmedEmail === "") return false;
  if (trimmedEmail.length > 254) return false;
  if (invalidCharsRegex.test(trimmedEmail)) return false;
  if (trimmedEmail.includes("..")) return false;
  if (consecutiveSpecialCharsRegex.test(trimmedEmail)) return false;

  return emailRegex.test(trimmedEmail);
};

export default validateEmail;
