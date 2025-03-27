/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = <T extends (...args: any[]) => any>(
  callback: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timerId: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => callback(...args), wait);
  };
};
