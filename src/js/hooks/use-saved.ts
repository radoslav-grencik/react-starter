import { useLayoutEffect, useRef } from 'react';

export const useSaved = <T>(item: T) => {
  const savedItem = useRef(item);

  useLayoutEffect(() => {
    savedItem.current = item;
  }, [item]);

  return savedItem;
};
