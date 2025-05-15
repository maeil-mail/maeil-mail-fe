export type WorkbookAnswer = Map<number, Set<number>>;

export const workbookAnswerStore = {
  get(workbookId: number): WorkbookAnswer | null {
    const rawAnswer = localStorage.getItem(`workbook-${workbookId}-answer`) || '';

    if (!rawAnswer) {
      return null;
    }

    const parsedAnswer = JSON.parse(rawAnswer).map((entry: [number, number[]]) => {
      const [questionIndex, selectedChoices] = entry;

      return [questionIndex, new Set(selectedChoices)];
    });

    return new Map(parsedAnswer);
  },

  save(workbookId: number, answer: WorkbookAnswer) {
    const stringifiedAnswer = JSON.stringify([
      ...answer.entries().map((value) => {
        const [questionIndex, answer] = value;

        return [questionIndex, [...answer]];
      }),
    ]);

    localStorage.setItem(`workbook-${workbookId}-answer`, stringifiedAnswer);
  },
};
