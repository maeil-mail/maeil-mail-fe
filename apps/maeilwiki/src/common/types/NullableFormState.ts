export type NullableFormState<FormState> = {
  [K in keyof FormState]: FormState[K] | null;
};
