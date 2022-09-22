import { useCallback } from "react";

export const useToggle = (
  setValue: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return useCallback(() => setValue((value) => !value), [setValue]);
};
