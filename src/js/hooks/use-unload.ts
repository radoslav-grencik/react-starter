import { useWindowEventListener } from './use-window-event-listener';

export const useUnload = (
  callback: (this: Window, ev: BeforeUnloadEvent) => void
) => {
  useWindowEventListener('beforeunload', callback);
};
