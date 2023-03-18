import { useState } from 'react';

import { useWindowEventListener } from './use-window-event-listener';

export const usePrinting = () => {
  const [printing, setPrinting] = useState(false);

  useWindowEventListener('beforeprint', () => setPrinting(true));
  useWindowEventListener('afterprint', () => setPrinting(false));

  return printing;
};
