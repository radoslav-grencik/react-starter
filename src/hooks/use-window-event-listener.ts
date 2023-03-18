import { useEffect } from 'react';

import { useSaved } from './use-saved';

export const useWindowEventListener = <K extends keyof WindowEventMap>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions
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
  }, [savedListener, savedOptions, type]);
};
