import { useState } from 'react';

import { hasTouchSupport } from '../utils/touch';

import { useWindowEventListener } from './use-window-event-listener';

export const useIsTouchDevice = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(hasTouchSupport());

  useWindowEventListener('resize', () => {
    setIsTouchDevice(hasTouchSupport());
  });

  return isTouchDevice;
};
