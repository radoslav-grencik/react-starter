import { createRef, useMemo } from 'react';

export const useDynamicRefs = <T>() => {
  const refMap = useMemo(() => new Map<string, React.RefObject<T>>(), []);

  return useMemo(
    () => ({
      get: (key: string) => refMap.get(key),

      set: (key: string) => {
        let ref = refMap.get(key);
        if (!ref) {
          ref = createRef<T>();
          refMap.set(key, ref);
        }
        return ref;
      },

      delete: (key: string) => refMap.delete(key),

      length: () => refMap.values.length,

      forEach: (
        callbackfn: (
          value: React.RefObject<T>,
          key: string,
          map: Map<string, React.RefObject<T>>
        ) => void
      ) => refMap.forEach(callbackfn),

      toArray: () => Array.from(refMap.values()),

      clear: () => refMap.clear(),
    }),
    [refMap]
  );
};
