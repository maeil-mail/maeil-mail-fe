const recordGAEvent = (action: string) => {
  if (window !== undefined && window.gtag) {
    window.gtag("event", action, { debug_mode: true });
  }
};

export default recordGAEvent;
