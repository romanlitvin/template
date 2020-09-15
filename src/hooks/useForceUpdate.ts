import { useCallback, useState } from "react";

export default () => {
  const [, setTick] = useState(0);
  return useCallback(() => {
    setTick((tick) => tick++);
  }, []);
};
