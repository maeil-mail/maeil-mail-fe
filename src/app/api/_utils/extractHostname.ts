type Hostname = string;

export const extractHostname = (url: string): Hostname => {
  return new URL(url).hostname;
};
