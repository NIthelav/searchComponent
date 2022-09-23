import { useEffect, useState, useCallback } from "react";

export const useOuterClick = (id: string, isOpened: boolean): boolean => {
  const [isOuter, setIsOuter] = useState(false);
  const listener = useCallback(
    (e: MouseEvent) => {
      if (e.target instanceof HTMLElement) {
        setIsOuter(!!e.target.closest(`#${id} *`));
      }
    },
    [id]
  );
  useEffect(() => {
    if (isOpened) {
      document.addEventListener("click", listener);
      return () => document.removeEventListener("click", listener);
    }
  }, [listener, isOpened]);

  return isOuter;
};
