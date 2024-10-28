const recordGAEvent = (action: string) => {
  if (window !== undefined && window.gtag) {
    window.gtag("event", action);
  }
};

export default recordGAEvent;
