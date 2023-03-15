import { useEffect } from 'react';

import { isHTMLElement } from '../utils/element';

import { useSaved } from './use-saved';

export const useElementEventListener = <
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement
>(
  element: T | null | React.MutableRefObject<T | null>,
  type: K,
  listener: (this: T, ev: HTMLElementEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
  deps?: React.DependencyList
) => {
  const savedElement = useSaved(isHTMLElement(element) ? element : null);
  const savedListener = useSaved(listener);
  const savedOptions = useSaved(options);

  const finalElement = isHTMLElement(element) ? savedElement : element;

  useEffect(() => {
    const eventTarget = finalElement.current;

    if (!eventTarget) {
      return;
    }

    const eventListener = function (ev: HTMLElementEventMap[K]) {
      savedListener.current.apply(eventTarget, [ev]);
    };

    const params = [type, eventListener, savedOptions.current] as const;

    eventTarget.addEventListener(...params);

    return () => {
      eventTarget.removeEventListener(...params);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalElement, savedListener, savedOptions, type, ...(deps ?? [])]);
};
