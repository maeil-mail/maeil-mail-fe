import React from 'react';

type Millisecond = number;

export const useTimer = (duration: Millisecond, onFinish?: () => void) => {
  const [elapsedTime, setElapsedTime] = React.useState(0);
  const startTimeRef = React.useRef(0);
  const frameIdRef = React.useRef<number>();

  React.useEffect(() => {
    return () => {
      const frameId = frameIdRef.current;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const tick = () => {
    const now = performance.now();

    const elapsed = now - startTimeRef.current;

    if (elapsed >= duration) {
      setElapsedTime(duration);
      onFinish?.();
      return;
    }

    setElapsedTime(elapsed);

    frameIdRef.current = requestAnimationFrame(tick);
  };

  const start = () => {
    if (!duration) {
      return;
    }

    startTimeRef.current = performance.now();
    frameIdRef.current = requestAnimationFrame(tick);
  };

  return {
    start,
    leftTime: duration - elapsedTime,
    progressRate: elapsedTime / duration,
    formattedTime: formatTime(duration - elapsedTime),
  };
};

function formatTime(time: Millisecond) {
  const minutes = String(Math.floor(time / (60 * 1_000))).padStart(2, '0');
  const seconds = String(Math.floor((time % (60 * 1_000)) / 1000)).padStart(2, '0');

  return `${minutes}:${seconds}`;
}
