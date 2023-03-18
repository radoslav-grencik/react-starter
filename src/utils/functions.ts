import { AnyFunction } from '../types/core-types';

export const debounce = <T extends AnyFunction>(
  callback: T,
  leading = false,
  debounceDelay = 200
) => {
  let timeout: ReturnType<typeof setTimeout> | null;

  return function (
    this: ThisParameterType<typeof callback>,
    ...args: Parameters<typeof callback>
  ) {
    const delayed = () => {
      if (!leading) {
        callback.apply(this, args);
      }
      timeout = null;
    };

    if (timeout) {
      clearTimeout(timeout);
    } else if (leading) {
      callback.apply(this, args);
    }

    timeout = setTimeout(delayed, debounceDelay);
  };
};

export const throttle = <T extends AnyFunction>(
  callback: T,
  throttleDelay = 100
) => {
  let inThrottle = false;

  return async function (
    this: ThisParameterType<typeof callback>,
    ...args: Parameters<typeof callback>
  ) {
    if (!inThrottle) {
      inThrottle = true;
      await delay(throttleDelay);
      inThrottle = false;

      callback.apply(this, args);
    }
  };
};

export const delay = (delay = 200) => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};
