import { useRef } from 'react';
import isEqual from 'lodash/isEqual';

export const usePrevious = <T>(
  value: T,
  comparator: (prev: T, current: T) => boolean = isEqual
) => {
  const ref = useRef<{
    prev: T | null;
    current: T;
  }>({
    prev: null,
    current: value,
  });

  const current = ref.current.current;

  if (!comparator(value, current)) {
    ref.current = {
      prev: current,
      current: value,
    };
  }

  return ref.current.prev;
};
