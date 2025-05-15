const perfectScoreMessages = [
  '와우, 만점입니다. 개발 천재로 인정합니다! 🧙🏻‍♀️',
  'Perfect! 이미 고수의 영역입니다. 👑',
  '만점을 받다니, 이건 예술이에요. 🎨',
  '한 문제도 놓치지 않다니… 감탄하고 갑니다. 😮',
  '완벽 그 자체! 이보다 나아질 순 없겠군요. 💯',
];

const highScoreMessages = [
  '실력자로 인정합니다. 조금만 보완하면 완벽해지시겠네요! 💡',
  '거의 다 왔어요! 날카롭게 마무리해 봅시다. ✨',
  '훌륭합니다. 기초가 튼튼하시군요! 📚',
  '기본이 잘 잡혀 있어요. 이제 디테일만 더해보면 되겠네요! 🎯',
  '한 끗 차이네요. 조금만 연습하면 만점은 시간 문제입니다! 🛠️',
];

const midScoreMessages = [
  '좋은 출발이에요! 앞으로 더 나아질 일만 남았어요. 🙂',
  '성장을 위한 발걸음을 떼셨군요. 계속 도전해봐요! 🌈',
  '준수한 성적이에요. 포기하지 말고 계속 나아가 봅시다! 🎯',
  '앞으로가 더 기대되는 성과예요. 계속 도전해봐요! 🔭',
  '출발이 좋았어요! 남은 길도 함께 걸어봐요. 👣',
];

const lowScoreMessages = [
  '시작이 반이에요. 차근차근 기본 개념부터 학습해 봅시다! 🌱',
  '이제 연습할 시간! 곧 실력이 붙을 거예요. 🧩',
  '처음은 누구나 서툴 수 있어요. 포기하지 마세요! 🔧',
  '실패는 성장의 첫걸음! 다시 한 번 도전해봐요. 🚶🏻‍♂️',
  '천천히, 하지만 확실하게 나아가고 있어요. 🐢',
];

const SCORE_THRESHOLD = {
  mid: 30,
  high: 60,
  perfect: 100,
};

export const getWorkbookResultComment = (correctCount: number, questionCount: number): string => {
  if (questionCount === 0) {
    throw new Error('문제가 없습니다.');
  }

  const percentage = (correctCount / questionCount) * 100;

  const getRandomMessage = (messages: string[]) =>
    messages[Math.floor(Math.random() * messages.length)];

  if (percentage === SCORE_THRESHOLD.perfect) {
    return getRandomMessage(perfectScoreMessages);
  }

  if (percentage >= SCORE_THRESHOLD.high) {
    return getRandomMessage(highScoreMessages);
  }

  if (percentage >= SCORE_THRESHOLD.mid) {
    return getRandomMessage(midScoreMessages);
  }

  return getRandomMessage(lowScoreMessages);
};
