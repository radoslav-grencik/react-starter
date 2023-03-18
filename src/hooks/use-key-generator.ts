import { useCallback, useMemo } from 'react';
import { v4 as UUIDv4 } from 'uuid';

export const useKeyGenerator = () => {
  const keyMap = useMemo(() => new Map<unknown, string>(), []);

  return useCallback(
    <T>(item: T) => {
      if (keyMap.has(item)) {
        return keyMap.get(item) as string;
      }

      const newKey = UUIDv4();
      keyMap.set(item, newKey);

      return newKey;
    },
    [keyMap]
  );
};
