export const hasTouchSupport = () => {
  return matchMedia('(hover: none)').matches;
};
