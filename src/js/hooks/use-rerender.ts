import { useCallback, useState } from 'react';

export const useRerender = () => {
  const [trigger, setTrigger] = useState(false);

  const rerender = useCallback(
    () => setTrigger((prevTrigger) => !prevTrigger),
    []
  );

  return [trigger, rerender] as const;
};
