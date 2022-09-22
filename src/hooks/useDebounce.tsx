import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounceValue(value), delay);

    return () => {
      clearInterval(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
