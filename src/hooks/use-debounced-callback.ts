import { useMemo } from 'react';

import { AnyFunction } from '../types/core-types';
import { debounce } from '../utils/functions';

export const useDebouncedCallback = <T extends AnyFunction>(
  callback: T,
  deps?: React.DependencyList
) => {
  return useMemo(() => {
    return debounce(callback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
