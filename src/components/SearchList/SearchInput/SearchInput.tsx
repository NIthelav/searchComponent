import React, { FC, useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

interface ISearchInput {
  onChange: (a: string) => void;
  toggle: () => void;
}

export const SearchInput: FC<ISearchInput> = ({ onChange, toggle }) => {
  const [value, setValue] = useState("");
  const debounced = useDebounce(value, 500);
  useEffect(() => {
    onChange(debounced.toLowerCase());
  }, [debounced, onChange]);
  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      onFocus={toggle}
      // onBlur={toggle}
      value={value}
    ></input>
  );
};
