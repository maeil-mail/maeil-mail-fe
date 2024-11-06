import BASE_URL from "./baseUrl";

export const getTotalSentQuestionCount = async () => {
  const response = await fetch(`${BASE_URL}/statistics/mail-event/question`);

  if (!response.ok) {
    throw new Error("api 에러");
  }

  const { success, fail } = await response.json();

  return success + fail;
};
