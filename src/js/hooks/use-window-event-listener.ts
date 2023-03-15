import { useEffect } from 'react';

import { useSaved } from './use-saved';

export const useWindowEventListener = <K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
  deps?: React.DependencyList
) => {
  const savedListener = useSaved(listener);
  const savedOptions = useSaved(options);

  useEffect(() => {
    const eventListener = function (ev: WindowEventMap[K]) {
      savedListener.current.apply(window, [ev]);
    };

    const params = [type, eventListener, savedOptions.current] as const;

    window.addEventListener(...params);

    return () => {
      window.removeEventListener(...params);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedListener, savedOptions, type, ...(deps ?? [])]);
};
