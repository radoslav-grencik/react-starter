import { useRef } from 'react';

export const useIsFirstRender = () => {
  const firstRender = useRef(true);
  const result = useRef(true);

  if (firstRender.current) {
    firstRender.current = false;
  } else {
    result.current = false;
  }

  return result;
};
