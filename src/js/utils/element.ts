export const isHTMLElement = (value: unknown): value is HTMLElement | null => {
  return value instanceof HTMLElement || value === null;
};
