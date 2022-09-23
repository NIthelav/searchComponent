import React, { FC, useEffect, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { cn } from "../../../util/cn";
import "./SearchInput.css";

const cls = cn("searchInput");
interface ISearchInput {
  onChange: (a: string) => void;
  open: () => void;
}

export const SearchInput: FC<ISearchInput> = ({ onChange, open }) => {
  const [value, setValue] = useState("");
  const debounced = useDebounce(value, 500);
  useEffect(() => {
    onChange(debounced.toLowerCase());
  }, [debounced, onChange]);
  return (
    <input
      onChange={(e) => setValue(e.target.value)}
      onFocus={open}
      value={value}
      className={cls()}
    />
  );
};
